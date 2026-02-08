import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { z } from 'zod';

// Re-implementing the validation schema here since we are outside the src directory
// and want a standalone serverless function.
const stringFieldSchema = (minLength = 2, maxLength = 50) =>
    z
        .string()
        .min(minLength) // Min length
        .max(maxLength); // Max length

const contactFormSchema = z.object({
    firstName: stringFieldSchema(),
    lastName: stringFieldSchema(),
    email: z.string().email(),
    message: stringFieldSchema(10, 500),
    lang: z.string().optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL;

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    if (request.method !== 'POST') {
        return response.status(405).json({ status: 'error', message: 'Method Not Allowed' });
    }

    try {
        const validationResult = contactFormSchema.safeParse(request.body);

        if (!validationResult.success) {
            return response.status(400).json({
                status: 'error',
                message: 'Validation failed',
                errors: validationResult.error.flatten().fieldErrors,
            });
        }

        const { firstName, lastName, email, message } = validationResult.data;

        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL as string,
            to: [TO_EMAIL as string],
            subject: `New Portfolio Message from ${firstName} ${lastName}`,
            replyTo: email,
            html: `
        <h2>New Message from your Portfolio</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return response.status(500).json({
                status: 'error',
                message: 'Failed to send message',
                error: error.message,
            });
        }

        return response.status(200).json({
            status: 'success',
            message: 'Message sent successfully',
            data: { id: data?.id },
        });
    } catch (err) {
        console.error('Submission error:', err);
        return response.status(500).json({
            status: 'error',
            message: 'An unexpected error occurred',
        });
    }
}

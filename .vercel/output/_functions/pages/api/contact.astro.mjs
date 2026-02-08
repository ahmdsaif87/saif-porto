import { c as contactFormSchema } from '../../chunks/type_D1NHzS_B.mjs';
import { u as ui } from '../../chunks/ui_QOefRRaV.mjs';
import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend("re_gKuo6yBC_M53HQKKebWUYevWphdSnsg6n");
const TO_EMAIL = "ahmadsaif7456@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";
const POST = async ({ request }) => {
  let lang = "en";
  let currentTranslations = ui[lang].contactPage;
  let formDataForValidation;
  try {
    const requestBody = await request.json();
    const requestLang = requestBody.lang;
    if (requestLang && ui[requestLang]) {
      lang = requestLang;
      currentTranslations = ui[lang].contactPage;
    }
    const { lang: _lang, ...restOfBody } = requestBody;
    formDataForValidation = restOfBody;
  } catch (error) {
    const errorResponse = {
      status: "error",
      message: currentTranslations.toastErrorUnexpected,
      error: "Invalid JSON input"
    };
    return new Response(JSON.stringify(errorResponse), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const validationResult = contactFormSchema.safeParse(formDataForValidation);
  if (!validationResult.success) {
    return new Response(
      JSON.stringify({
        status: "error",
        message: currentTranslations.toastErrorValidationFailed,
        errors: validationResult.error.flatten().fieldErrors
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const { firstName, lastName, email, message } = validationResult.data;
  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `New Portfolio Message from ${firstName} ${lastName}`,
      replyTo: email,
      html: `
        <h2>New Message from your Portfolio</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    });
    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({
          status: "error",
          message: currentTranslations.toastErrorFailedToSend,
          error: error.message
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({
        status: "success",
        message: currentTranslations.toastSuccessMessageSent,
        data: { id: data?.id }
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Submission error:", err);
    return new Response(
      JSON.stringify({
        status: "error",
        message: currentTranslations.toastErrorUnexpected
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

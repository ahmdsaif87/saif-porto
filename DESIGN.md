---
name: Ahmad Saif — Portfolio
description: Personal portfolio — minimal, confident, technically excellent
colors:
  ink: "#0a0a0a"
  paper: "#ffffff"
  gray-100: "#f5f5f5"
  gray-200: "#e5e5e5"
  gray-300: "#d4d4d4"
  gray-400: "#a3a3a3"
  gray-500: "#737373"
  gray-600: "#404040"
  gray-700: "#262626"
  gray-800: "#1f1f1f"
  gray-900: "#1a1a1a"
  gray-950: "#141414"
  dark-paper: "#0a0a0a"
  dark-ink: "#fafafa"
  destructive: "#dc2626"
typography:
  display:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 700
    lineHeight: 1.1
  heading:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 500
    textTransform: uppercase
    letterSpacing: "0.08em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
    fontWeight: 500
    textTransform: uppercase
    letterSpacing: "0.08em"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.ink}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    border: "1px solid {colors.gray-200}"
    padding: "14px 32px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    border: "1px solid {colors.ink}"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    border: "1px solid {colors.gray-200}"
    padding: "24px"
  card-hover:
    borderColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    border: "1px solid {colors.gray-200}"
    padding: "8px 12px"
  input-focus:
    borderColor: "{colors.ink}"
    ring: "3px {colors.ink} / 0.5"
---

# Design System: The Monochrome Studio

## 1. Overview

**Creative North Star: "The Monochrome Studio"**

A personal portfolio that doubles as its own credential. Every pixel, every interaction, every typographic choice is a demonstration of craft. The design doesn't frame the work — it is the work.

This system operates in black, white, and carefully calibrated grays. There is no color accent, no gradient, no shadow. Hierarchy comes from weight, size, and spacing alone. Surfaces are flat. Borders are real (1px, solid). Radius is zero. The grain texture overlay at 0.018 opacity is the only concession to texture — a nod to the tactile without breaking the honesty.

The portfolio rejects every AI-generated design reflex: no purple gradients, no glassmorphism, no bounce easings, no side-stripe accents, no numbered section markers, no uppercase kickers above every section. The structure reveals itself through layout, not ornament.

**Key Characteristics:**
- Monochrome-only palette (no accent color)
- Zero border radius throughout
- No shadows — flat surfaces only
- Space Grotesk for display, Inter for body
- Uppercase, letter-spaced labels and nav
- Noise grain at 0.018–0.025 opacity for subtle tactility
- Scroll-reveal animations with exponential easing
- Generous whitespace and open line lengths

## 2. Colors

A strictly monochrome palette. No accent color exists. Variation comes from value (lightness) alone.

### Primary
- **Ink** (#0a0a0a): Primary text, primary button backgrounds, focus rings, active states. The anchor black.

### Neutral
- **Paper** (#ffffff): Page background in light mode, inverted-section text in dark mode.
- **Gray 100** (#f5f5f5): Secondary and muted backgrounds (light mode).
- **Gray 200** (#e5e5e5): Borders, inputs, dividers (light mode).
- **Gray 300** (#d4d4d4): Light chart fills, low-priority surfaces.
- **Gray 400** (#a3a3a3): Muted text (light mode body-adjacent), chart fills (dark mode).
- **Gray 500** (#737373): Muted foreground text (light mode), chart fills.
- **Gray 600** (#404040): Dark mode mid-tone.
- **Gray 700** (#262626): Dark mode borders, inputs.
- **Gray 800** (#1f1f1f): Dark mode accent surface.
- **Gray 900** (#1a1a1a): Dark mode secondary/muted background.
- **Gray 950** (#141414): Dark mode card/popover background.
- **Dark Paper** (#0a0a0a): Page background in dark mode (same as ink).
- **Dark Ink** (#fafafa): Primary text in dark mode.
- **Destructive** (#dc2626): Destructive actions only (error states, delete buttons).

### The Monochrome Rule
The palette is intentionally colorless. No hue is added to any neutral. Warmth is carried by imagery, typography weight, and layout — never by tinting the background. If a color appears, it comes from project screenshots or the user's avatar, not from the system itself.

## 3. Typography

**Display Font:** Space Grotesk (with Inter and system-ui fallbacks)
**Body Font:** Inter (with system-ui fallbacks)
**Label Font:** Space Grotesk (same as display)

**Character:** Sharp geometric display paired with a neutral, highly readable body. Space Grotesk brings a confident, contemporary edge to headings and labels. Inter handles body copy with quiet efficiency. The contrast is in weight and spacing, not in genre — both are sans-serif, but the roles are distinct.

### Hierarchy
- **Display** (700, `clamp(2.5rem, 5vw, 4.5rem)`, 1.1): Hero name and major section titles only. Used sparingly.
- **Headline** (600, `clamp(1.5rem, 3vw, 2.5rem)`, 1.2): Section headings. Text-wrap: balanced.
- **Title** (600, `1.25rem`, 1.3): Card titles, subsection headings.
- **Body** (400, `1rem` / `0.9375rem`, 1.6): All prose. Line length capped at 65–75ch via container width.
- **Small** (400, `0.875rem`, 1.5): Muted descriptions, metadata.
- **Label** (500, `0.8125rem`, 1, uppercase, `0.08em` letter-spacing): Navigation items, button text, form labels. Always uppercase.

### The Two-Family Rule
Display/heading roles use Space Grotesk. Body/label roles use Inter. These families should never swap roles. No additional fonts are introduced.

## 4. Elevation

This system is flat by default and flat by choice. Depth is conveyed entirely through typographic hierarchy, spacing, and border contrast — never through shadows.

Surfaces at the same level share the same background color. A card is distinguished from the page by a 1px solid border (gray-200 in light mode, gray-700 in dark), not by a shadow. Hover states invert the border to the foreground color (ink/dark-ink). No surface ever casts a shadow.

### The No-Shadow Rule
Every shadow token resolves to `none`. If a surface needs separation from its background, use a border or a tonal shift. Box-shadows are prohibited.

## 5. Components

### Buttons
- **Shape:** Zero radius (0px). Solid 1px border.
- **Primary:** Black background (`--primary`), white text (`--primary-foreground`). Uppercase, 0.08em letter-spacing, Space Grotesk 500 weight. Padding: 14px 32px.
- **Hover / Focus:** Background inverts to transparent, text flips to black. Focus-visible shows a 3px ring at 50% opacity.
- **Outline:** Transparent background, black text, gray-200 border. Hover inverts to filled black.
- **Inverted:** Light-on-dark variant. White background with black text. Hover inverts to transparent.
- **Secondary / Ghost:** Subtle background shift on hover (accent surface). No border.
- **Link:** Underline on hover only.

### Cards
- **Corner Style:** Zero radius (0px).
- **Background:** `--card` (white in light, gray-950 in dark).
- **Shadow:** None. Separated from the page by a 1px solid `--border`.
- **Hover:** Border transitions to `--foreground`.
- **Internal Padding:** 24px (`px-6 py-6`). Content components (header, body, footer) may vary.

### Inputs & Fields
- **Style:** Zero radius. 1px solid `--border`. Transparent background (`bg-transparent`).
- **Focus:** Border shifts to `--ring` (ink/dark-ink). 3px ring at 50% opacity appears via `focus-visible`.
- **Placeholder:** Gray-500 (`--muted-foreground`), maintaining 4.5:1 contrast.
- **Error / Disabled:** Red designator border for aria-invalid. Disabled at 50% opacity.

### Navigation
- **Style:** Horizontal bar, uppercase labels, 0.08em letter-spacing, Space Grotesk 500.
- **Active state:** Thin underline bar below the active link, colored `--foreground`.
- **Mobile:** Hamburger icon toggles a full-height slide-down overlay with staggered link animations. Body scroll locked when open.

### Badges
- **Style:** Zero radius. Small uppercase label. Gray background for default, foreground color for outline.

### Carousel
- **Style:** Embla-based. Arrow navigation on desktop, dot indicators on mobile. No decorative chrome.

## 6. Do's and Don'ts

### Do:
- **Do** use black (#0a0a0a) and white (#ffffff) as the anchoring poles of every composition.
- **Do** use Space Grotesk for all headings, uppercase labels, and navigation.
- **Do** use Inter for body copy, descriptions, and prose content.
- **Do** keep radius at 0px everywhere — no exceptions.
- **Do** use solid 1px borders (gray-200 light, gray-700 dark) to separate surfaces.
- **Do** use exponential easing (`cubic-bezier(0.16, 1, 0.3, 1)` or `cubic-bezier(0.4, 0, 0.2, 1)`) for transitions and animations.
- **Do** respect `prefers-reduced-motion` — all animations must degrade gracefully.
- **Do** maintain WCAG AA contrast (4.5:1 body, 3:1 large text) on every surface pairing.

### Don't:
- **Don't** introduce any accent color. The palette is strictly monochrome.
- **Don't** use gradients, gradient text, or `background-clip: text`.
- **Don't** add shadows of any kind. Every shadow token resolves to `none`.
- **Don't** use glassmorphism, blur overlays, or translucent surfaces.
- **Don't** use bounce or elastic easing — feels dated and AI-generated.
- **Don't** wrap everything in cards or nest cards inside cards.
- **Don't** use side-stripe borders (border-left/border-right >1px as decoration).
- **Don't** use numbered section markers (01 / 02 / 03) as default scaffolding.
- **Don't** use tiny uppercase tracked kickers above every section.
- **Don't** use Inter for display/heading roles — that's Space Grotesk's job.
- **Don't** use pure black (#000) or pure white (#fff) — always use the defined tokens.
- **Don't** let hero heading clamp exceed 6rem, and never tighten letter-spacing below -0.04em.
- **Don't** use icons as decoration — they must serve a functional purpose.

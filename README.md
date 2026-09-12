# Anvaya Groups — Website

Production-quality, responsive marketing site for **Anvaya Groups** — *Build. Learn. Go Global.*

Built with **React 19 + TypeScript + Vite + Tailwind CSS v4**. All CTAs open a pre-filled WhatsApp chat.

## Getting Started

```bash
npm install
npm run dev       # local dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Project Structure

```
src/
  components/
    Header.tsx, Hero.tsx, HeroVisual.tsx, Services.tsx,
    TechnologySection.tsx, EducationSection.tsx, VisaSection.tsx,
    ImpactSection.tsx, FinalCTA.tsx, TrustedBy.tsx, Footer.tsx,
    Button.tsx, Logo.tsx
    illustrations/   — CSS/SVG hero & section artwork (no raster images)
    icons/            — custom social icons (LinkedIn/Instagram/Facebook/YouTube)
  hooks/
    useReveal.ts      — scroll-triggered fade/slide-in animation
    useCountUp.ts      — animated stat counters
  utils/
    whatsapp.ts       — single source of truth for the WhatsApp number & all
                          pre-filled CTA messages (`openWhatsApp("startProject")`)
```

## WhatsApp CTAs

Every CTA button routes through `src/utils/whatsapp.ts`:

```ts
openWhatsApp("startProject"); // or "bookConsultation", "getInTouch",
                                //   "getGuidance", "startVisaProcess",
                                //   "contactAnvaya", "exploreTechServices"
```

which opens `https://wa.me/919177300297?text=<encoded message>` in a new tab.

## Notes

- No external image assets — every visual (globe, devices, passport, mountains,
  campus/books, etc.) is built with CSS/SVG so it stays crisp and lightweight.
- Fully responsive: single-column mobile layout, no horizontal overflow, tap-friendly
  hamburger nav.
- Subtle scroll-reveal + hover animations only — no flashy effects.

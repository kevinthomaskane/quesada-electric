# Quesada Electric — Website Prototype

A bold, professional Next.js website prototype for **Quesada Electric**, a licensed electrical contractor based in Hermosa Beach, CA.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Adding the Real Photos

The gallery currently uses placeholder images. To add the actual Yelp photos:

1. Open the `public/images/` folder
2. Replace the placeholder files with your actual photos, using these exact filenames:

| Filename     | Photo Description                          |
|--------------|--------------------------------------------|
| `work-1.jpg` | Exterior conduit runs on white building     |
| `work-2.jpg` | Residential panel close-up (wiring)        |
| `work-3.jpg` | Electrician doing commercial panel work    |
| `work-4.jpg` | Underground disconnects / trench work      |
| `work-5.jpg` | Conduit runs on building exterior          |
| `work-6.jpg` | Three-phase disconnect switch (Eaton)      |
| `work-7.jpg` | Labeled residential breaker panel          |
| `work-8.jpg` | Underground conduit trench with tape       |
| `work-9.jpg` | Large commercial Siemens panel             |

Photos can be `.jpg`, `.png`, or `.webp` — just match the filename.

---

## Business Info Populated

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Business Name   | Quesada Electric                          |
| Owner           | Samir Quesada Castillo                    |
| Phone           | (862) 202-7122                            |
| Location        | Hermosa Beach, CA 90254                   |
| CA License      | #1132988 (C-10 Electrical, Active)        |
| Bond            | $25,000                                   |
| BuildZoom Score | 92 (Top 32% of CA contractors)            |

---

## Pages & Sections

| Section      | Description                                        |
|--------------|----------------------------------------------------|
| Hero         | Full-screen intro with CTA buttons & stats         |
| Services     | 6 service cards (panel, EV, residential, etc.)     |
| Gallery      | Filterable 9-photo portfolio grid with lightbox    |
| About        | About Samir, license info, trust stats             |
| Why Us       | 6 trust badges + service area map                  |
| Contact      | Phone, address, hours + contact form               |
| Footer       | Links, license badge, service areas, CTA banner    |

---

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v3**
- **Lucide React** (icons)
- **next/image** (optimized images with lightbox)

---

## Customization Notes

- **Colors**: Edit `tailwind.config.ts` to change the amber/dark theme
- **Phone / Email**: Search for `(862) 202-7122` and `info@quesadaelectric.com` across components
- **Contact Form**: Currently front-end only — wire up to Resend, Formspree, or a Next.js API route
- **Domain / SEO**: Update `app/layout.tsx` metadata with the final domain once live

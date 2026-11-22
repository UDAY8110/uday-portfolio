# Uday Kumar — The Series

A cinematic, streaming-inspired portfolio for Uday Kumar, an Electronics & Communication Engineering undergraduate, RF and microwave research intern at IIT Delhi, and IEEE Student Branch President. The existing series-inspired layout, transitions, animations and responsive behavior are preserved.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with any streaming service and uses none of their logos.

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Portfolio content and assets

Content is centralized in [`src/data/portfolio.ts`](src/data/portfolio.ts). It contains the profile, education, internships, IEEE leadership, projects, research, achievements, skills and story-series content.

The supplied resume is included as `public/assets/Uday_Kumar_Resume.docx`. The resume actions download or open this original DOCX; the in-page resume view is a portfolio summary.

No personal portrait was supplied. The opening, profile selector and hero use a neutral abstract graphic rather than a stock or fabricated photo. `npm run images` builds the text-only social-share image; it does not create portrait assets.

The Uday Tour & Travels website is linked from its project card and was checked for an HTTP 200 response.

## What's inside

```
src/
  data/portfolio.ts         Central portfolio content and section ordering
  App.tsx                   Opening → profile selection → portfolio; overlays
  components/
    OpeningSequence         Animated series opening
    ProfileSelector         Audience profiles and neutral Uday avatar
    Navbar                  Section navigation and profile switcher
    Hero                    Parallax hero, particles and highlight chips
    About                   Introduction, education, research and leadership
    Seasons / EpisodeCard   Education and experience story arc
    Originals / ProjectCard Responsive project cards and horizontal sequence
    ProjectModal            Project details and verified website link
    TopPicks                Highlights rail
    Skills                  Skill categories and evidence
    Achievements            Awards and research manuscripts
    ResumeViewer            Resume summary and DOCX actions
    FinalCTA                Email, phone and social links
    CustomCursor, fx.tsx    Cursor states, magnetic buttons, tilt and motion
  hooks/                    Smooth scroll, progress and media preferences
scripts/build-images.mjs    Text-only social share image generator
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11 and Lenis.

Reduced-motion preferences, keyboard controls, responsive touch rails and accessible dialog behavior remain supported.

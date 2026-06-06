# Remali Hamza Portfolio

A polished one-page developer portfolio for Remali Hamza, built with React, Vite, Motion, Lucide icons, and Devicon skill icons.

## Highlights

- Responsive portfolio sections for profile, work, skills, training, and contact.
- Animated hero headline, profile card, spotlight cards, and floating dock navigation.
- Structured project inventory powered by a single data file.
- Downloadable CV and external project links.
- Modern dependency set with Vite 8, ESLint 10, React 19, and zero npm audit vulnerabilities.

## Tech Stack

- React 19
- Vite 8
- Motion
- Lucide React
- ESLint flat config

## Project Structure

```text
src/
  assets/                  Static portfolio assets
  components/
    common/                Shared UI such as section titles
    effects/               Motion and visual effect components
    layout/                Page composition and app shell
    navigation/            Floating dock navigation
    sections/              Portfolio page sections
  data/                    Portfolio content and project inventory
  App.jsx                  Thin app entry component
  main.jsx                 React mount point
  index.css                Global theme and responsive layout styles
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

## Local Development

Install dependencies, then start Vite:

```bash
npm install
npm run dev
```

The app runs locally at the URL Vite prints in the terminal, usually `http://localhost:5173/`.

## Content Editing

Most portfolio content lives in `src/data/portfolioData.js`:

- `stats` controls the hero stat cards.
- `facts` controls the profile facts.
- `projects` controls the featured and compact work sections.
- `languages` controls the Devicon language grid.

Projects are shown in batches of 6, with Show more and Show less controls.

## Quality Checks

Before publishing changes:

```bash
npm run lint
npm run build
```

Current cleanup status:

- Unused router dependencies removed.
- Empty legacy folders removed.
- Component folders reorganized by responsibility.
- npm audit reports zero vulnerabilities.

# RX Hamza Portfolio

Personal developer portfolio for Remali Hamza, built with React and Vite.

## Features

- Single-page portfolio with Home, Work, Skills, Training, and Contact sections
- Responsive dark UI with subtle motion and desktop dock navigation
- Project inventory grouped for quick scanning
- Lazy-loaded PDF export for the downloadable CV
- Devicon skill icons and Lucide UI icons

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

## Tech

- React
- Vite
- Motion
- Lucide React
- html2pdf.js

## Structure

- `src/App.jsx` contains the app shell and navigation wiring.
- `src/sections` contains the page sections.
- `src/data/portfolioData.js` contains projects, skills, languages, and stats.
- `src/components/react-bits` contains the reusable animated UI pieces.

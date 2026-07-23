# Mohammad Saad Iqbal — Personal Portfolio Website

> **AI & ML Engineer | Full-Stack Developer | Designer**  
> A high-performance, interactive 3D portfolio website built with **React**, **TypeScript**, **Three.js**, **GSAP**, and **Vite**.

---

## Features & Highlights

- **Interactive 3D WebGL Canvas**: Three.js GLTF character model with real-time head tracking and lighting effects.
- **Dynamic Hero Title Cycler**: Smooth cycling between *AI & ML Engineer*, *Full-Stack Developer*, and *Designer*.
- **Cyberpunk "What I Do" Section**: Interactive 3-box expandable skill panels with tool tags.
- **Career & Experience Timeline**: Detailed chronological breakdown of professional and research experience.
- **Key Achievements Accordion**: Interactive, scroll-animated vertical timeline powered by **GSAP ScrollTrigger**.
- **Licenses & Certificates Showcase**: Filterable grid (*All*, *AI & ML*, *Full Stack*, *Design*, *Other*) with certificate image modals and validation links.
- **Domain-Specific Projects Grid**: Tabbed showcase (*AI & ML*, *Full Stack*, *Design*) featuring project detail modals, GitHub, and Behance links.
- **Interactive Tech Stack Pyramid**: Domain-filtered pyramid switcher highlighting tools and technologies.
- **Multi-Resume Download Menu**: Quick-download popover for domain-specific resumes (*AI & ML*, *Full Stack*, *Design*).
- **Data-Driven Configuration (`src/config.ts`)**: Single source of truth driving all site content, project data, certificates, achievements, and social links.

---

## Tech Stack

- **Frontend Core**: React 18, TypeScript, Vite
- **3D & WebGL**: Three.js, @react-three/fiber, @react-three/drei
- **Animations & Smooth Scroll**: GSAP, ScrollTrigger, Lenis
- **Styling**: Vanilla CSS (Custom Design System, Dark & Purple Aesthetic)
- **Deployment**: Vercel (Analytics & Speed Insights integrated)

---

## Project Structure

```text
My_Portfolio_Website/
├── public/
│   ├── images/         # Project screenshots, achievement images & certificates
│   ├── resumes/        # Domain-specific PDF resume downloads
│   └── video/          # Background videos & assets
├── src/
│   ├── components/     # React UI components (Landing, WhatIDo, Career, Work, etc.)
│   ├── context/        # React context (LoadingProvider)
│   ├── pages/          # Page routes (MyWorks)
│   ├── config.ts       # Central typed configuration file (Single Source of Truth)
│   ├── App.tsx         # Root component & router
│   └── main.tsx        # Application entry point
├── package.json
└── vite.config.ts
```

---

## Configuration & Customization (`src/config.ts`)

All content on the website is data-driven via `src/config.ts`. To update details:

```typescript
export const config: Config = {
  developer: {
    fullName: "Mohammad Saad Iqbal",
    titles: ["AI & ML Engineer", "Full-Stack Developer", "Designer"],
    description: "CS Graduate specializing in Agentic AI systems...",
  },
  contact: {
    email: "saad.dev13@gmail.com",
    github: "https://github.com/Saad-Dev13",
    linkedin: "https://www.linkedin.com/in/mohammad-saad-iqbal-/",
    behance: "https://www.behance.net/mohammadsaadiqbal",
  },
  // experiences, projects, achievements, certificates, and resumes...
};
```

---

## Getting Started

### 1) Clone the Repository

```bash
git clone https://github.com/Saad-Dev13/My_Portfolio_Website.git
cd My_Portfolio_Website
```

### 2) Install Dependencies

```bash
npm install
```

### 3) Run Locally (Development)

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`.

### 4) Production Build

```bash
npm run build
```

---

## Connect

- **GitHub**: [Saad-Dev13](https://github.com/Saad-Dev13)
- **LinkedIn**: [Mohammad Saad Iqbal](https://www.linkedin.com/in/mohammad-saad-iqbal-/)
- **Behance**: [mohammadsaadiqbal](https://www.behance.net/mohammadsaadiqbal)
- **Email**: [saad.dev13@gmail.com](mailto:saad.dev13@gmail.com)

---

## License

This project is licensed under the [MIT License](LICENSE).

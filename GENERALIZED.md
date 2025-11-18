# Generalized Project Documentation: Barakah Roots Website

This document provides a generalized overview of the Barakah Roots website project, including its structure, technologies, and key features.

## 1. Project Overview

This project is a modern, responsive, and accessible website for the "Barakah Roots — Kenya Youth Agricultural Initiative". The primary goals of the website are to showcase the organization's impact, attract volunteers, facilitate donations and seedling adoptions, and provide information about their projects and workshops.

The application is a full-stack project with a React-based frontend and a Node.js (Express) backend.

## 2. Tech Stack

The project utilizes a modern tech stack:

-   **Frontend:**
    -   **Framework:** React (v19) with Vite for fast development and bundling.
    -   **Routing:** React Router (v7) for client-side routing.
    -   **Styling:** Tailwind CSS (v4) with a custom theme for a consistent and modern design.
    -   **Animations:** Framer Motion for smooth transitions and micro-interactions.
    -   **UI Components:** A custom-built component library.

-   **Backend:**
    -   **Framework:** Node.js with Express (v5) for a simple and efficient REST API.
    -   **CORS:** `cors` middleware to handle cross-origin requests.

-   **Development & Tooling:**
    -   **Package Manager:** npm
    -   **Linting:** ESLint for code quality.
    -   **Testing:** Jest, React Testing Library, and Playwright are set up for unit and end-to-end testing.
    -   **CI/CD:** GitHub Actions for continuous integration.

## 3. Project Structure

The project is organized into a monorepo-like structure with the main application code residing in the `barakah-roots-site` directory.

```
barakah-roots-site/
├── .github/              # CI/CD workflows (GitHub Actions)
│   └── workflows/
│       └── ci.yml
├── public/               # Static assets (images, robots.txt, sitemap.xml)
├── scripts/              # Scripts for data seeding and sitemap generation
├── server/               # Node.js Express backend
│   ├── index.js          # Main server file
│   └── package.json      # Backend dependencies
├── src/                  # Frontend source code
│   ├── assets/           # Static assets like images and SVGs
│   ├── components/       # Reusable React components
│   ├── layouts/          # Layout components (e.g., MainLayout, AdminLayout)
│   ├── pages/            # Page components for each route
│   ├── App.jsx           # Main App component with routing
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and Tailwind CSS imports
├── .gitignore
├── index.html            # Main HTML entry point for Vite
├── package.json          # Frontend dependencies and scripts
├── tailwind.config.js    # Tailwind CSS theme and configuration
└── vite.config.js        # Vite configuration
```

## 4. Frontend Details

### Styling

-   **Tailwind CSS:** The project uses Tailwind CSS for all styling.
-   **Custom Theme:** The `tailwind.config.js` file defines a custom theme with a specific color palette and fonts to match the brand identity:
    -   **Colors:** `cream`, `light-green`, `deep-olive`, `warm-sand`, `barakah-text`.
    -   **Fonts:** `Inter` for body text and `Merriweather` for display text.
-   **Micro-interactions:** The project uses Framer Motion to create subtle animations and transitions on hover and page load, enhancing the user experience.

### Components

The `src/components` directory contains a library of reusable components, including:

-   `Header.jsx`: A sticky header with navigation and a mobile-friendly menu.
-   `Footer.jsx`: A footer with quick links, social media icons, and a newsletter signup form.
-   `Hero.jsx`: A hero section for the home page with animated text and call-to-action buttons.
-   `ProjectCard.jsx`: A card component to display project information with a hover effect.
-   `Form.jsx`: A reusable form component.

### Pages & Routing

-   **Pages:** The `src/pages` directory contains a component for each page of the website (e.g., `Home.jsx`, `About.jsx`, `Projects.jsx`).
-   **Routing:** The `src/App.jsx` file uses React Router to define the application's routes. It includes a main layout for the public-facing pages and a separate layout for the admin section.

### SEO

-   **Meta Tags:** Each page includes a `<title>` and `<meta name="description">` tag for SEO, implemented using React 19's built-in support for metadata.
-   **Structured Data:** JSON-LD is used to provide structured data for the organization (`Organization` schema) and blog posts (`BlogPosting` schema).
-   **Sitemap & Robots.txt:** A `sitemap.xml` is generated via a script, and a `robots.txt` file is included in the `public` directory.

## 5. Backend Details

The backend is a simple Node.js server using the Express framework.

### API Endpoints

The `server/index.js` file defines the following API endpoints:

-   `GET /api/projects`: Returns a list of all projects.
-   `GET /api/projects/:id`: Returns a single project by its ID.
-   `GET /api/seedlings`: Returns a list of all seedlings.
-   `POST /api/adoptions`: A stubbed endpoint for handling seedling adoptions.
-   `POST /api/volunteer`: A stubbed endpoint for volunteer signups.
-   `POST /api/contact`: A stubbed endpoint for handling contact form submissions.

The API uses sample data from arrays within the `index.js` file.

## 6. Scripts & Commands

The `package.json` file in the `barakah-roots-site` directory contains the following important scripts:

-   `npm run dev`: Starts both the frontend and backend development servers concurrently.
-   `npm run build`: Builds the frontend for production.
-   `npm run lint`: Lints the codebase using ESLint.
-   `npm run preview`: Previews the production build locally.

The `server/package.json` file contains a script to generate the sitemap:

-   `npm run generate-sitemap`: Generates the `sitemap.xml` file.

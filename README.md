# Brian Omondi Ayieke - Portfolio Website

A modern, professional portfolio website showcasing full-stack web development and AI solutions projects.

## Quick Start

### Local Development
```bash
cd portfolio-site
# Using Python
python -m http.server 8000
# OR using Node.js
npx http-server -p 8000
```
Visit `http://localhost:8000` in your browser.

### Deploy to Netlify
See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for step-by-step instructions.

## Project Structure

- `index.html` — Main landing page with hero, about, projects, gallery, contact sections
- `styles.css` — All styling, responsive design, and animations
- `scripts.js` — Dynamic content loading, form handling, lightbox functionality
- `projects/project.html` — Project detail page template
- `projects/projects.json` — All project data (7 projects included)
- `media/` — Project screenshots and profile photo
- `netlify.toml` — Netlify deployment configuration
- `.gitignore` — Git ignore rules

## Features

**Hero Section** with profile photo, name, and job title
**Fully Responsive** — Desktop, tablet, and mobile optimized
**Modern Design** — Clean, professional aesthetic
**Interactive Gallery** — Lightbox with image expansion
**Project Cards** — Showcasing 7 complete projects
**Project Details** — Full project pages with problem/solution/architecture
**Contact Form** — Netlify Forms integration
**Image Lightbox** — Click images to expand and inspect layouts

## Adding/Editing Projects

1. Open `projects/projects.json`
2. Add or edit project objects with these fields:
   - `slug` — URL-friendly ID (e.g., "my-project")
   - `title` — Project name
   - `description` — Brief overview
   - `tech` — Array of technologies
   - `live` — Live demo URL (optional)
   - `github` — GitHub URL (optional)
   - `problem` — Problem statement
   - `solution` — Solution description
   - `features` — Array of key features
   - `architecture` — Architecture overview
   - `outcomes` — Array of project outcomes
   - `media` — Array of images/videos

3. Add project images to `media/` directory
4. Update image paths in projects.json
5. Changes reflect automatically on the site

## Configuration

Edit `scripts.js` to update:
```javascript
const CONFIG = {
  EMAIL: "your-email@example.com",
  GITHUB: "https://github.com/your-username",
  LINKEDIN: "https://linkedin.com/in/your-profile",
  WHATSAPP: "https://wa.me/YOUR_PHONE",
  CV: "cv/Your-Resume.pdf"
};
```

## Contact Form Setup

1. Deploy to Netlify (see DEPLOYMENT_GUIDE.md)
2. Form submissions automatically go to your email
3. Check "Forms" section in Netlify dashboard

## Deployment Options

1. **Netlify** (Recommended) — Easiest setup, automatic deploys from GitHub
2. **Vercel** — Similar to Netlify, great performance
3. **GitHub Pages** — Free hosting, limited features

**See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.**
- Configure `scripts.js` > `CONFIG.FORM_ENDPOINT` with a form endpoint (Formspree, Netlify Forms, or your serverless function). If empty, the form falls back to a `mailto:` link using `CONFIG.EMAIL`.

SEO & Deploy
- Add per-page `meta` tags as desired. This scaffold is static and SEO-friendly by default (separate project pages per slug).
- Deploy as static files on GitHub Pages, Netlify, Vercel, or any static host.

Extensibility
- Projects rendered from JSON for easy additions without redesign.
- `projects/project.html` supports images and embedded video if you provide `media` entries.

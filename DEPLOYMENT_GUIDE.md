# Brian Omondi Ayieke - Full-Stack Web Developer Portfolio

A modern, responsive portfolio website showcasing full-stack web development projects and AI solutions.

## 🚀 Features

- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile
- **Project Showcase** – 7 detailed project cards with cover images, descriptions, and tech stacks
- **Project Detail Pages** – Individual pages for each project with problem/solution/architecture details
- **Interactive Gallery** – Image lightbox with zoom and expand functionality
- **Contact Form** – Netlify Forms integration for message submissions
- **Professional Profile** – Hero section with profile photo, name, and job title
- **Modern Styling** – Clean, minimal design with neutral color palette
- **Inter Font** – Beautiful typography with Google Fonts integration

## 📁 Project Structure

```
portfolio-site/
├── index.html                 # Main landing page
├── styles.css                 # Global styles and responsive design
├── scripts.js                 # JavaScript functionality
├── projects/
│   ├── project.html           # Project detail template
│   └── projects.json          # Project data (7 projects)
├── media/
│   ├── Professional pic.png   # Profile photo
│   ├── optiprice.png          # Project screenshots
│   ├── cattledoctor.png
│   ├── quickfold.png
│   ├── maisha.png
│   ├── househunter.png
│   ├── broshere.png
│   └── eishconsult.png
├── netlify.toml               # Netlify deployment config
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

## 🛠️ Configuration

Before deploying, update the following in `scripts.js`:

```javascript
const CONFIG = {
  FORM_ENDPOINT: "NETLIFY",
  EMAIL: "brianayieke@gmail.com",
  GITHUB: "https://github.com/your-username",
  LINKEDIN: "https://www.linkedin.com/in/your-profile",
  WHATSAPP: "https://wa.me/254725501428",
  CV: "cv/Brian-Resume.pdf"
};
```

## 📝 Projects Data

Projects are stored in `projects/projects.json`. Each project includes:
- `slug` - URL-friendly identifier
- `title` - Project name
- `description` - Brief overview
- `tech` - Array of technologies used
- `live` - Live demo URL (optional)
- `github` - GitHub repository URL (optional)
- `problem` - Problem statement
- `solution` - Solution description
- `features` - Array of key features
- `architecture` - Architecture overview
- `outcomes` - Array of project outcomes
- `media` - Array of project images/videos

## 🚀 Deployment

### Option 1: Deploy to Netlify (Recommended)

#### Step 1: Create GitHub Repository

1. Initialize Git in your project:
```bash
cd "path/to/portfolio-site"
git init
git add .
git commit -m "Initial portfolio commit"
```

2. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it `portfolio` or `brian-portfolio`
   - Click "Create repository"

3. Push to GitHub:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

#### Step 2: Deploy to Netlify

1. Go to https://netlify.com and sign up
2. Click "New site from Git"
3. Select GitHub and authorize
4. Choose your portfolio repository
5. Build settings:
   - **Build command:** (leave empty)
   - **Publish directory:** `.` (root directory)
6. Click "Deploy site"

✅ Your site will be live at `your-site-name.netlify.app`

### Step 3: Configure Netlify Forms

For the contact form to work:

1. Go to your site settings on Netlify
2. Deploy the site once (forms are detected on first deploy)
3. Test the form on your live site
4. Check "Forms" section in Netlify dashboard for submissions

### Option 2: Deploy to Vercel

1. Push your repo to GitHub (see Step 1 above)
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Accept default settings and click "Deploy"

### Option 3: Deploy to GitHub Pages

1. Push your repo to GitHub
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/root` folder
5. Click "Save"

## 💻 Local Development

To run locally:

```bash
# Using Python (if installed)
cd portfolio-site
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000
```

Visit `http://localhost:8000` in your browser.

## 📧 Setting up Email Notifications

When form submissions come through Netlify Forms:

1. Go to your Netlify site dashboard
2. Click "Forms"
3. Click "Settings and usage"
4. Add notification email address
5. Choose notification triggers

## 🎨 Customization

### Update Profile Section
- Replace `media/Professional pic.png` with your photo
- Update name in `index.html` (line with "Brian Omondi Ayieke")
- Update job title if needed

### Update Projects
- Edit `projects/projects.json`
- Add project cover images to `media/` directory
- Update project screenshots

### Update Colors
Edit CSS variables in `styles.css`:
```css
:root{
  --bg:#ffffff;
  --text:#1f2933;
  --muted:#6b7280;
  --accent:#0b1320;
  --panel:#f7f7f8;
}
```

### Add CV Download
1. Create `cv/` directory in portfolio-site folder
2. Add your CV file (e.g., `Brian-Resume.pdf`)
3. Update in `scripts.js`: `CV: "cv/Brian-Resume.pdf"`

## 🔧 Features Explained

### Project Cards
- Display with cover images
- Show tech stack as badges
- Links to live demos and detail pages
- Fully responsive grid

### Project Detail Pages
- Full project information
- Problem/Solution sections
- Architecture overview
- Key features list
- Media gallery with lightbox
- Outcomes and CTA section

### Image Lightbox
- Click any image to expand
- White centered modal on screen
- Translucent red close button
- Keyboard shortcut (ESC to close)
- Fully responsive

### Contact Form
- Name and email fields
- Message textarea
- Netlify Forms integration
- Email notifications to inbox
- Fallback to mailto if not deployed

## 📱 Responsive Breakpoints

- **Desktop:** 900px and above
- **Tablet:** 520px - 899px
- **Mobile:** Below 520px

## 🎯 Next Steps

1. ✅ Update your information in `scripts.js`
2. ✅ Add your CV file for download
3. ✅ Deploy to GitHub
4. ✅ Deploy to Netlify
5. ✅ Test contact form
6. ✅ Test image lightbox
7. ✅ Check mobile responsiveness

## 📄 License

This portfolio is open source and available under the MIT License.

## 👤 Author

**Brian Omondi Ayieke**
- Email: brianayieke@gmail.com
- WhatsApp: +254725501428
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

**Enjoy your new portfolio website! 🎉**

# 🚀 Deployment Instructions - Brian Omondi Ayieke Portfolio

## Quick Summary

Your portfolio is ready to deploy! Choose your preferred platform below.

---

## Option 1: Deploy to Netlify + GitHub (Recommended)

This is the easiest and most recommended approach.

### Prerequisites
- GitHub account (create at https://github.com)
- Netlify account (create at https://netlify.com - can sign up with GitHub)

### Step-by-Step Instructions

#### Step 1: Create GitHub Repository

1. **Initialize Git locally:**
   ```bash
   cd "D:\Projects1\brian portfolio\portfolio-site"
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

   Or run the setup script:
   - **Windows:** Double-click `SETUP.bat`
   - **Mac/Linux:** `bash SETUP.sh`

2. **Create repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `portfolio` (or `brian-portfolio`)
   - Description: "Full-stack web developer portfolio"
   - Choose "Public" (so Netlify can access it)
   - Click "Create repository"

3. **Connect local repo to GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
   
   Replace `YOUR_USERNAME` with your GitHub username.

#### Step 2: Deploy to Netlify

1. **Sign up for Netlify:**
   - Go to https://netlify.com
   - Click "Sign up" and choose "Sign up with GitHub"
   - Authorize Netlify to access your GitHub account

2. **Create new site:**
   - Click "New site from Git" (or "+ New site from Git")
   - Select GitHub as your Git provider
   - Find and select `YOUR_USERNAME/portfolio` repository
   - Click "Connect"

3. **Configure build settings:**
   - **Build command:** (leave empty)
   - **Publish directory:** `.` (current directory)
   - Click "Deploy site"

4. **Wait for deployment:**
   - Netlify will build and deploy your site
   - You'll get a URL like `https://your-site-name.netlify.app`
   - This is your live portfolio URL!

#### Step 3: Set Up Custom Domain (Optional)

1. In Netlify dashboard, go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Enter your custom domain (e.g., `brianayieke.com`)
4. Follow DNS configuration instructions for your domain registrar

#### Step 4: Enable Form Submissions

1. In Netlify dashboard, go to "Forms"
2. Set up form notifications:
   - Click your form
   - Add your email for notifications
   - Test the contact form on your live site

---

## Option 2: Deploy to Vercel

Vercel is similar to Netlify and offers excellent performance.

### Steps:

1. **Push to GitHub** (see Option 1, Steps 1-3)

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your GitHub account and `portfolio` repository
   - Click "Import"
   - Accept all defaults
   - Click "Deploy"

3. **Your site is live!**
   - Vercel will provide your URL (like `portfolio.vercel.app`)

### Note on Contact Forms:
- Contact forms won't auto-submit on Vercel
- Add a serverless function or use a service like Formspree
- Or set up GitHub Actions to email submissions

---

## Option 3: Deploy to GitHub Pages

GitHub Pages is free and simple, but has some limitations.

### Steps:

1. **Push to GitHub** (see Option 1, Steps 1-3)

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll to "Pages" section
   - Under "Source", select branch: `main`
   - Select folder: `/ (root)`
   - Click "Save"

3. **Your site is live!**
   - GitHub will provide your URL (like `https://YOUR_USERNAME.github.io/portfolio`)

### Note on Contact Forms:
- GitHub Pages doesn't support form submissions
- Contact form will use mailto fallback
- Users need email client configured to send messages

---

## After Deployment Checklist

- [ ] Test all links work correctly
- [ ] Test contact form (submit test message)
- [ ] Check mobile responsiveness on phone/tablet
- [ ] Try image lightbox functionality
- [ ] Click on project cards and view details
- [ ] Test gallery image expansion
- [ ] Verify all social links (GitHub, LinkedIn, WhatsApp) work

---

## Updating Your Site

After deployment, to update content:

1. **Make changes locally:**
   - Edit `index.html`, `scripts.js`, or `projects/projects.json`
   - Test locally: `python -m http.server 8000`

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update project descriptions"
   git push
   ```

3. **Netlify/Vercel will auto-deploy:**
   - Your changes will be live in seconds!
   - No manual redeploy needed

---

## Configuration Before Going Live

Update these settings in `scripts.js`:

```javascript
const CONFIG = {
  EMAIL: "brianayieke@gmail.com",           // Your email
  GITHUB: "https://github.com/YOUR_USERNAME", // Your GitHub
  LINKEDIN: "https://linkedin.com/in/YOUR_PROFILE", // Your LinkedIn
  WHATSAPP: "https://wa.me/254725501428",   // Your WhatsApp
  CV: "cv/Brian-Resume.pdf"                 // Your CV path
};
```

Then push the updated `scripts.js` to GitHub:
```bash
git add scripts.js
git commit -m "Update contact information"
git push
```

---

## Troubleshooting

### "Build failed" on Netlify
- Check `netlify.toml` exists in root
- Ensure all file paths are correct
- Try redeploying from Netlify dashboard

### Forms not working
- Ensure form name is `contact` in `index.html`
- Form must have `data-netlify="true"` attribute
- Deploy to Netlify (GitHub Pages doesn't support forms)

### Images not loading
- Check media file paths in `projects.json`
- Ensure images exist in `media/` directory
- Verify file names match exactly (case-sensitive)

### Site not accessible
- Wait 2-3 minutes for initial deployment
- Check Netlify/Vercel deploy logs
- Verify GitHub repository is public

---

## Domain & Email

### Custom Domain Setup:
1. Buy domain from Namecheap, GoDaddy, Google Domains, etc.
2. In Netlify: Site settings → Domain management → Add custom domain
3. Update DNS records with provider (Netlify provides instructions)

### Custom Email Address:
1. Set up email forwarding through your domain registrar
2. Forward to your personal email (e.g., contact@yourdomain.com → brianayieke@gmail.com)
3. Update `CONFIG.EMAIL` in `scripts.js`

---

## Support & Resources

- **Netlify Docs:** https://docs.netlify.com
- **Vercel Docs:** https://vercel.com/docs
- **GitHub Pages:** https://pages.github.com
- **Netlify Forms:** https://docs.netlify.com/forms/overview

---

## Next Steps

1. ✅ Choose deployment platform (Netlify recommended)
2. ✅ Create GitHub account if needed
3. ✅ Follow deployment steps above
4. ✅ Update `scripts.js` configuration
5. ✅ Test all features on live site
6. ✅ Share your portfolio URL!

---

**Congratulations on your new portfolio! 🎉**

Questions? Check README.md or DEPLOYMENT_GUIDE.md for more info.

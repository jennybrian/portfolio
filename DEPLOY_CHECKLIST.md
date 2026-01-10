# 🚀 DEPLOYMENT CHECKLIST

Copy this checklist and follow each step to deploy your portfolio.

## Pre-Deployment ✅

- [ ] Your portfolio is running locally: `http://localhost:8000`
- [ ] Name "Brian Omondi Ayieke" appears under profile photo
- [ ] Job title displays below your name
- [ ] All 7 projects show with cover images
- [ ] Contact form is visible
- [ ] Social links (GitHub, LinkedIn, WhatsApp) are present

## Configuration ✅

Before deployment, update `scripts.js` (lines 1-10):

- [ ] Update EMAIL: `"brianayieke@gmail.com"`
- [ ] Update GITHUB: Your GitHub profile URL
- [ ] Update LINKEDIN: Your LinkedIn profile URL
- [ ] Update WHATSAPP: Already set to `+254725501428`
- [ ] Update CV path: Point to your CV file location

## GitHub Setup ✅

- [ ] Create GitHub account at https://github.com
- [ ] Create new repository: `portfolio`
- [ ] Make repository **PUBLIC** (important!)
- [ ] Run Git initialization:
  ```bash
  cd "path/to/portfolio-site"
  git init
  git add .
  git commit -m "Initial portfolio commit"
  git branch -M main
  git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
  git push -u origin main
  ```
- [ ] Repository is visible at: `https://github.com/YOUR_USERNAME/portfolio`

## Netlify Deployment ✅

- [ ] Create Netlify account at https://netlify.com
- [ ] Sign up with GitHub (recommended)
- [ ] Click "New site from Git"
- [ ] Select GitHub repository: `YOUR_USERNAME/portfolio`
- [ ] Build settings:
  - Build command: **(leave empty)**
  - Publish directory: `.` (dot/root)
  - Click "Deploy site"
- [ ] Wait for deployment to complete (2-3 minutes)
- [ ] Get your site URL: `https://xxxxx.netlify.app`
- [ ] Test the live site

## Verification ✅

Test everything on your live Netlify site:

- [ ] Hero section displays correctly
- [ ] Profile photo shows
- [ ] Name and job title visible under photo
- [ ] Navigation menu works (About, Projects, Gallery, Contact)
- [ ] All 7 projects display with images
- [ ] Click "View Details" on a project → detail page loads
- [ ] Gallery images expand when clicked
- [ ] Lightbox close button (red X) works
- [ ] Contact form can be filled and submitted
- [ ] Form displays "Message sent" confirmation
- [ ] Check Netlify Forms dashboard for submission
- [ ] Social links open correctly:
  - [ ] GitHub link works
  - [ ] LinkedIn link works
  - [ ] WhatsApp link opens WhatsApp
- [ ] Site looks good on mobile
- [ ] All buttons have hover effects

## Netlify Forms Setup ✅

- [ ] Go to your Netlify site dashboard
- [ ] Click "Forms" in the left menu
- [ ] Should see your "contact" form
- [ ] Click the form name
- [ ] Add notification email: `brianayieke@gmail.com`
- [ ] Click "Save" or "Add email address"
- [ ] Test form submission again
- [ ] Check your email for notification

## Optional: Custom Domain ✅

If you have a custom domain:

- [ ] Buy domain (Namecheap, GoDaddy, etc.)
- [ ] In Netlify: Site settings → Domain management
- [ ] Click "Add custom domain"
- [ ] Enter your domain
- [ ] Follow DNS configuration steps
- [ ] Update `README.md` with your custom URL

## Optional: GitHub Auto-Deploy ✅

For automatic deployment when you push code:

- [ ] Go to GitHub repo settings
- [ ] Skip this (Netlify handles it automatically)
- [ ] Future commits will auto-deploy

## Final Steps ✅

- [ ] Share your portfolio URL:
  - [ ] Email to connections
  - [ ] Add to LinkedIn profile
  - [ ] Add to GitHub profile
  - [ ] Share on social media

- [ ] Get feedback on your portfolio
- [ ] Make any updates to projects
- [ ] Push updates to GitHub (auto-deploys)

## Troubleshooting ✅

If something doesn't work:

- [ ] Check Netlify deploy logs for errors
- [ ] Verify all image paths in `projects.json`
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Test locally again: `python -m http.server 8000`
- [ ] Check browser console for JavaScript errors (F12)

## Success! 🎉

Your portfolio is live and ready to impress!

**Your Portfolio URL:** `https://YOUR_SITE_NAME.netlify.app`

---

## Quick Reference

| Task | Command |
|------|---------|
| Start local server | `python -m http.server 8000` |
| Update code | Edit files → `git add .` → `git commit -m "message"` → `git push` |
| Check forms | Go to Netlify dashboard → Forms → Your form |
| Redeploy manually | In Netlify: Site settings → Deploys → Trigger deploy |
| View logs | In Netlify: Deploys → Click latest → View build log |

---

**Questions?** Check:
- `QUICK_START.md` - Step by step guide
- `DEPLOYMENT_GUIDE.md` - Detailed instructions
- `README.md` - General information

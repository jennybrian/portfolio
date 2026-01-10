@echo off
REM Quick Setup Script for Brian Omondi Ayieke Portfolio (Windows)

echo 🚀 Portfolio Setup Script
echo ========================
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed. Please install Git first from https://git-scm.com
    pause
    exit /b 1
)

echo ✅ Git is installed
echo.

REM Check if git repository exists
if not exist ".git" (
    echo 📝 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial portfolio commit"
    echo ✅ Git repository initialized
) else (
    echo ✅ Git repository already initialized
)

echo.
echo 📋 Next Steps:
echo ==============
echo.
echo 1. Create a GitHub repository:
echo    - Go to https://github.com/new
echo    - Name: 'portfolio' or 'brian-portfolio'
echo    - Click 'Create repository'
echo.
echo 2. Push to GitHub:
echo    git branch -M main
echo    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
echo    git push -u origin main
echo.
echo 3. Deploy to Netlify:
echo    - Go to https://netlify.com
echo    - Click 'New site from Git'
echo    - Select your portfolio repository
echo    - Accept defaults and click 'Deploy site'
echo.
echo 4. Configure in scripts.js:
echo    - Update EMAIL, GITHUB, LINKEDIN, WHATSAPP, CV
echo    - Redeploy to Netlify
echo.
echo For detailed instructions, see: DEPLOYMENT_GUIDE.md
echo.
echo Happy deploying! 🎉
echo.
pause

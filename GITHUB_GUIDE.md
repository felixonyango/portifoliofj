
# 🚀 GitHub Upload & Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click **New Repository** (+ icon → "New repository")
3. Repository name: `felix-juma-portfolio`
4. Description: `Professional portfolio website for Felix Juma - Software Developer`
5. Make it **Public** (or Private if you prefer)
6. **DO NOT** initialize with README (we already have one)
7. Click **Create repository**

## Step 2: Upload Your Code

### Option A: Command Line (Recommended)

Open terminal in your project folder:

```bash
# Navigate to project folder
cd felix-portfolio

# Initialize Git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website ready for deployment"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/felix-juma-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: GitHub Desktop

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Click "Add Existing Repository"
3. Select your `felix-portfolio` folder
4. Commit with message: "Initial commit"
5. Click "Publish repository"
6. Enter repository name: `felix-juma-portfolio`
7. Click "Publish Repository"

### Option C: Direct Upload (Easiest)

1. On your new GitHub repo page, click **"uploading an existing file"**
2. Drag and drop all files from `felix-portfolio` folder
3. Commit message: "Initial commit"
4. Click **Commit changes**

## Step 3: Add Environment Variables (Secrets)

For EmailJS to work, add these secrets:

1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add these secrets one by one:

| Secret Name | Value |
|-------------|-------|
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |

## Step 4: Connect to Vercel (Auto-Deploy)

### Method 1: Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New Project**
3. Import from GitHub → Select `felix-juma-portfolio`
4. Configure Project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variables:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
6. Click **Deploy**

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up "felix-juma-portfolio"? [Y/n] → Y
# - Which scope? [your-username] → Enter
# - Link to existing project? [y/N] → N
# - What's your project name? [felix-juma-portfolio] → Enter
```

## Step 5: Verify Deployment

1. Vercel will give you a URL like: `https://felix-juma-portfolio.vercel.app`
2. Test the contact form
3. Check all sections load correctly
4. Test on mobile device

## 🔄 Automatic Updates

Once connected, every time you push to GitHub:
```bash
git add .
git commit -m "Update: description of changes"
git push
```

Vercel will automatically rebuild and deploy! 🎉

## 📋 Pre-Deployment Checklist

- [ ] GitHub repository created
- [ ] All files uploaded to GitHub
- [ ] EmailJS account created
- [ ] Email service configured (Gmail/Outlook)
- [ ] Email template created with variables
- [ ] Environment variables added to Vercel
- [ ] Contact form tested
- [ ] Mobile responsiveness verified

## 🆘 Troubleshooting

### Build Fails on Vercel
1. Check **Build Logs** in Vercel dashboard
2. Ensure `vite.config.js` is present
3. Verify `package.json` has correct build script

### Contact Form Not Working
1. Check browser console for errors
2. Verify EmailJS keys are correct
3. Check spam folder for test emails
4. Ensure EmailJS template variables match

### Images Not Loading
1. Check image paths (use relative paths)
2. Ensure images are in `public` folder
3. Verify case sensitivity in filenames

## 📞 Need Help?

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Vercel Docs**: https://vercel.com/docs
- **React Docs**: https://react.dev

---

**Your portfolio will be live at:**
`https://felix-juma-portfolio.vercel.app` 🚀

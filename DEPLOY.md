# 🚀 DEPLOYMENT TO VERCEL - QUICK STEPS

## STEP 1: Create GitHub Repo

1. Go to github.com
2. Click "New repository"
3. Name: `awais-portfolio`
4. Description: "My professional portfolio"
5. Public repo
6. Create repository

## STEP 2: Push Code to GitHub

```bash
cd awais-portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/awais-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## STEP 3: Setup Email (Resend)

1. Go to https://resend.com
2. Sign up (free)
3. Go to API Keys
4. Copy your API key
5. Save it somewhere safe

---

## STEP 4: Deploy to Vercel

1. Go to vercel.com
2. Click "New Project"
3. Click "Import Git Repository"
4. Select your `awais-portfolio` repo
5. Click Import
6. Add Environment Variables:
   - Name: `RESEND_API_KEY`
   - Value: [paste your Resend API key from Step 3]
7. Click Deploy ✅

**DONE!** Your portfolio is live with working email.

---

## STEP 5: Test Email

Go to your portfolio → Contact section → Fill form → Send

Check your inbox at `awaiss.dev@gmail.com` 📧

---

## UPDATE YOUR INFO

Before Step 1, edit `/app/page.jsx`:

- Line ~10: Change `awaiss.dev@gmail.com` to your email
- Line ~10: Change `+92 307 9838110` to your phone  
- Line ~10: Change `github.com/awaiss` to your GitHub
- LinkedIn already uses your real URL

---

## FILE STRUCTURE

```
awais-portfolio/
├── app/
│   ├── layout.jsx
│   ├── page.jsx          ← YOUR PORTFOLIO
│   ├── api/
│   │   └── contact/
│   │       └── route.js  ← EMAIL HANDLER
│   └── styles/
│       ├── globals.css
│       └── home.css
├── package.json
├── next.config.js
├── .gitignore
├── .env.example
└── README.md
```

---

## WHAT HAPPENS WHEN SOMEONE SUBMITS FORM

1. User fills contact form
2. Clicks "Send Message"
3. Email sent via Resend API
4. You receive email in awaiss.dev@gmail.com
5. Success message shows to user

---

## TROUBLESHOOTING

**Email not working?**
- Check your Resend API key is correct
- Verify it's in Vercel environment variables
- Redeploy Vercel after adding key

**Site not loading?**
- Make sure all files are pushed to GitHub
- Check for build errors in Vercel dashboard

**Need to update something?**
- Edit files locally
- `git add . && git commit -m "message" && git push`
- Vercel auto-redeploys

---

Ready? Let's go! 🎉

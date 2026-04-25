# Muhammad Awais — Portfolio

Professional portfolio built with **Next.js 14** + **React 18** with working email contact form.

## ✨ Features

- 🎨 Modern dark/light theme toggle
- 📧 Working contact form (emails to your inbox)
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast & optimized (Next.js)
- 🔗 LinkedIn button integrated
- 📄 PDF resume download
- 🎬 Smooth animations
- 🌙 Auto light/dark mode detection

## 🚀 Quick Deploy

1. **Create GitHub Repo** → Push this code
2. **Get Resend API Key** → https://resend.com (free)
3. **Deploy to Vercel** → Connect GitHub repo
4. **Add Environment Variable** → `RESEND_API_KEY`

See [DEPLOY.md](./DEPLOY.md) for detailed steps.

## 🛠️ Tech Stack

- Next.js 14 (App Router)
- React 18
- Resend (Email API)
- CSS (no frameworks)
- Responsive design

## 📁 Project Structure

```
app/
  ├── page.jsx           # Main portfolio
  ├── layout.jsx         # Root layout
  ├── api/
  │   └── contact/route.js  # Email API
  └── styles/
      ├── globals.css
      └── home.css
```

## 🎯 Contact Form Flow

1. User fills form
2. Submits via API
3. Resend sends email
4. Arrives in your inbox

No backend server needed!

## 🔧 Customization

Edit `/app/page.jsx`:
- Email: `awaiss.dev@gmail.com`
- Phone: `+92 307 9838110`
- GitHub: `github.com/awaiss`
- LinkedIn: Already set to your real URL

## 📊 Sections

- Hero (intro + CTA)
- Education (degrees)
- Projects (with live links)
- Skills (categorized)
- Hire (services)
- Contact (form + socials)
- Footer

## 🌐 Environment Variables

```
RESEND_API_KEY=re_your_api_key_here
```

Get free key from https://resend.com

## 💻 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 🚀 Production Build

```bash
npm run build
npm start
```

## 📖 Full Deployment Guide

See [DEPLOY.md](./DEPLOY.md) for step-by-step Vercel deployment.

## 📄 License

Free to use & modify.

---

Built with ❤️ by Muhammad Awais.

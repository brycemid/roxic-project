# ROXIC — Website

Static site for ROXIC (intro, hero, shop, reviews, about). Works on desktop and mobile.

## Go live on his GoDaddy domain + let him edit

**1. GitHub (so you both can edit)**  
- Create a repo at [github.com](https://github.com/), upload this folder (index.html, styles.css, script.js, hero-figure.png).  
- Repo → Settings → Collaborators → Add your friend (Write access). He can edit files on GitHub or clone the repo and push.

**2. Netlify (hosting)**  
- [netlify.com](https://www.netlify.com/) → Sign up with GitHub → Add new site → Import the repo. Publish directory: `./`. Deploy. Site is live at something.netlify.app.

**3. His GoDaddy domain**  
- Netlify → Site → Domain management → Add custom domain → enter his domain. Netlify shows DNS records.  
- GoDaddy → My Products → his domain → DNS: add A record `@` → Netlify's IP; CNAME `www` → your-site.netlify.app. Save. After DNS propagates, his domain shows the site.

**Friend edits:** On GitHub, open a file → Edit (pencil) → Commit. Netlify auto-redeploys in ~1 min.

## Run locally

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Contents

- index.html — Header, hero, shop, reviews, about
- styles.css — Light theme, layout, intro animations
- script.js — Intro, mobile menu, cart, policies
- hero-figure.png — Hero image

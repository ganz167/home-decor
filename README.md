# 🪴 Nestled — Budget Home Decor Blog

A fast, Pinterest-optimized affiliate blog built with Astro, Tailwind CSS, and MDX. Deploy to Netlify in one click.

---

## 🚀 One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_GITHUB_USERNAME/nestled)

Or clone and deploy manually (see below).

---

## ✅ Features

| Feature | Status |
|---|---|
| 90+ Lighthouse score | ✅ |
| Pinterest 2:3 image ratio | ✅ |
| Pin button on every image | ✅ |
| Tag archive pages `/blog/tag/budget` | ✅ |
| Paginated blog index | ✅ |
| Client-side search (Fuse.js) | ✅ |
| Amazon/Wayfair/Target affiliate links | ✅ |
| Product schema (rich results) | ✅ |
| Auto-generated OG images | ✅ |
| RSS feed `/rss.xml` | ✅ |
| Sitemap + robots.txt | ✅ |
| ConvertKit OR MailerLite email capture | ✅ |
| Netlify Forms (contact page) | ✅ |
| `npm run new-post` CLI scaffolder | ✅ |
| Open Graph + Twitter cards | ✅ |
| BlogPosting + Product JSON-LD schema | ✅ |

---

## 🛠 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:4321
```

---

## ✍️ Writing a New Post

```bash
npm run new-post
```

Follow the prompts. Your new post scaffolds to `src/content/blog/your-slug.mdx` with `draft: true`.

**Set `draft: false` when ready to publish.**

### Adding affiliate links in posts

```mdx
import AmazonLink from '../../components/AmazonLink.astro';

<!-- Amazon -->
<AmazonLink id="B0XXXXXXXXX" label="Chunky Knit Throw" price="$22.99" img="/images/products/throw.jpg" />

<!-- Wayfair -->
<AmazonLink id="ANY_ID" label="Linen Duvet Cover" price="$49.99" store="wayfair" />

<!-- Target -->
<AmazonLink id="ANY_ID" label="Threshold Throw" price="$25.00" store="target" />
```

**⚠️ Replace `YOURTAG-20` in `src/components/AmazonLink.astro` with your actual Amazon Associates tag.**

### Adding Pinterest-optimized images in posts

```mdx
import PinImage from '../../components/PinImage.astro';

<PinImage
  src="/images/posts/my-shelf.jpg"
  alt="Boho shelf styling"
  caption="IKEA shelf styled for under $30 — save this!"
/>
```

Images should be **1000×1500px** (2:3 ratio) for best Pinterest performance.

---

## 📧 Email Setup

### MailerLite (default)
1. Create a form in MailerLite dashboard
2. Open `src/components/EmailSignup.astro`
3. Set `PROVIDER = 'mailerlite'`
4. Fill in `ML_ACCOUNT` and `ML_FORM` from your MailerLite embed code

### ConvertKit
1. Create a form in ConvertKit
2. Open `src/components/EmailSignup.astro`
3. Set `PROVIDER = 'convertkit'`
4. Set `CK_ACTION` to your form's action URL (e.g. `https://app.convertkit.com/forms/12345/subscriptions`)

---

## 🌐 Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site (first time)
netlify init

# Deploy
netlify deploy --prod
```

Or connect your GitHub repo in the Netlify dashboard — it will auto-build on every push.

**Build settings:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20

---

## ⚙️ Configuration Checklist

Before going live:

- [ ] Change `site` in `astro.config.mjs` to your domain
- [ ] Replace `YOURTAG-20` in `AmazonLink.astro` with your Amazon Associates tag
- [ ] Configure email provider in `EmailSignup.astro`
- [ ] Add your real About photo to `public/images/about-photo.jpg`
- [ ] Add product images to `public/images/products/`
- [ ] Add post hero images to `public/images/posts/` (1000×1500 recommended)
- [ ] Set `draft: false` on posts you want published

---

## 📁 File Structure

```
nestled/
├── src/
│   ├── components/
│   │   ├── AmazonLink.astro      ← Affiliate link component + Product schema
│   │   ├── EmailSignup.astro     ← MailerLite / ConvertKit form
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Pagination.astro
│   │   ├── PinImage.astro        ← Pinterest-optimized image with Pin button
│   │   └── PostCard.astro
│   ├── content/
│   │   ├── config.ts             ← Content collection schema
│   │   └── blog/                 ← Your .mdx blog posts
│   ├── layouts/
│   │   ├── Base.astro            ← SEO, OG, schema
│   │   └── BlogPost.astro        ← Post layout with related posts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── search.astro          ← Fuse.js client search
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── start-here.astro
│   │   ├── affiliate-disclosure.astro
│   │   ├── privacy-policy.astro
│   │   ├── 404.astro
│   │   ├── rss.xml.js
│   │   ├── og/[slug].png.js      ← Auto OG image generator
│   │   └── blog/
│   │       ├── [...page].astro   ← Paginated blog index
│   │       ├── [slug].astro      ← Individual posts
│   │       └── tag/[tag].astro   ← Tag archives
│   └── styles/global.css
├── scripts/
│   └── new-post.mjs              ← CLI scaffolder
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── package.json
```

---

## 🌿 Brand Colors

| Name    | Hex       | Use |
|---------|-----------|-----|
| Cream   | `#FAF7F2` | Background |
| Sage    | `#7D9B76` | Primary accent, CTA buttons |
| Warm    | `#C9A97A` | Affiliate buttons |
| Clay    | `#C4735A` | Alerts, highlights |
| Charcoal| `#2C2C2C` | Body text |

---

## 📌 Pinterest Tips

1. All featured images are already 2:3 ratio (1000×1500px recommended)
2. Pin button appears on hover on every image and post card
3. OG images auto-generate per post at `/og/[slug].png`
4. Clean URLs with no dates: `/blog/7-decor-finds-under-25`

---

Made with 🪴 by Nestled

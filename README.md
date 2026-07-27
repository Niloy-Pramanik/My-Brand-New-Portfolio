# Niloy Pramanik's Portfolio Website - Setup Guide

## Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Project Structure](#project-structure)
5. [Development](#development)
6. [Deployment](#deployment)
7. [Customization](#customization)
8. [Troubleshooting](#troubleshooting)

---

## Overview

**Modern portfolio website** for a Full-Stack Developer & AI Engineer with:
- Animated hero section with split-color name display
- Premium pill badges for section headers ("My Expertise", "Award Winning")
- Seamless section transitions with gradient fade and ambient glow effects
- About section with flip cards and statistics
- Project showcase with GitHub links
- Skills, research, and contact sections with advanced typography
- Fully responsive contact form with Formspree email integration (50 submissions/month free)
- Smooth scroll animations with GSAP & Framer Motion
- Full dark mode support
- Optimized typography with justified text alignment and constrained line width

**Tech Stack:** Next.js 16.2.1 | React 19.2.4 | TypeScript 5 | Tailwind CSS 4 | Framer Motion 12.38.0 | Formspree (Email Backend)

---

## Prerequisites

| Requirement | Version | Check |
|-------------|---------|-------|
| Node.js | v18+ (v20 recommended) | `node --version` |
| npm | v8+ | `npm --version` |
| Git | Latest | `git --version` |

**VS Code Extensions:**
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin
- Prettier - Code Formatter

---

## Installation

**Step 1: Clone & Install**
```bash
git clone https://github.com/Niloy-Pramanik/My-Portfolio-Website.git
cd My-Portfolio-Website
npm install
```

**Step 2: Verify Setup**
```bash
node --version          # v18+
npm --version           # v8+
npm list next react     # Verify key packages
```

**Step 3: Start Development**
```bash
npm run dev
# Open http://localhost:3000
```

---

## Project Structure

```
my-portfolio-website/
├── public/                        # Static assets (images, CV, icons)
│   ├── CV_Niloy_Pramanik.pdf
│   ├── images/
│   └── *.PNG, *.jpg, *.svg
│
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout + global styles
│   │   ├── page.tsx               # Home page (all sections)
│   │   └── globals.css            # Tailwind directives
│   │
│   ├── components/
│   │   ├── HeroSection.tsx        # Hero + animations
│   │   ├── AboutSection.tsx       # About + flip cards
│   │   ├── ProjectsSection.tsx    # Projects showcase
│   │   ├── SkillsSection.tsx      # Technical skills
│   │   ├── ResearchSection.tsx    # Research areas
│   │   ├── ContactSection.tsx     # Contact info
│   │   ├── ScrollReveal.tsx       # GSAP animations
│   │   ├── Header.tsx, Footer.tsx
│   │   └── [Other components]
│   │
│   ├── constants/
│   │   └── navigation.ts
│   │
│   └── providers/
│       └── ThemeProvider.tsx
│
├── Configuration
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.mjs
│   └── eslint.config.mjs
│
└── Documentation
    ├── STEP_BY_STEP_README.md     # This file
    ├── DESIGN_SUMMARY.md          # Design details
    └── CUSTOMIZATION_GUIDE.md
```

**Key Files:**
- `src/app/page.tsx` - Main homepage (combines all sections)
- `src/components/HeroSection.tsx` - Hero section with CTA buttons and typography refinements
- `src/components/ContactSection.tsx` - Contact form with Formspree integration
- `src/components/SkillsSection.tsx` - Technical skills with premium pill badge
- `src/components/ProjectsSection.tsx` - Award-winning projects showcase with pill badge
- `src/components/ExploreMore.tsx` - Section transition with ambient glow effect
- `tailwind.config.js` - Color & theme customization

---

## Development

**Latest Features & Recent Updates:**

**✨ Form Submission (Formspree Integration)**
- Fully functional contact form with email backend
- Free plan: 50 submissions/month
- Endpoint: `https://formspree.io/f/xpqoprwe`
- All fields validated (name, email, subject, message)
- Real-time feedback with status messages (success/error)
- Auto-reset after 5 seconds

**✨ Premium UI Polish**
- Pill badges on Skills section ("My Expertise") and Projects section ("Award Winning")
- Seamless section transitions with gradient fade (Hero) and ambient purple glow (ExploreMore)
- Advanced typography: Justified text with constrained line width (`max-w-lg`)

**✨ Responsive Button Layout**
- CTA buttons ("Download CV" & "Let's talk") remain side-by-side on all screen sizes
- Optimized spacing and alignment for mobile, tablet, and desktop

---

## Development

**Start Development Server:**
```bash
npm run dev
```
Browser opens at `http://localhost:3000`. Changes auto-refresh (HMR).

**Make Your First Change:**
Edit `src/components/HeroSection.tsx` - the file auto-updates in browser.

**Available Commands:**
| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server with HMR |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Check TypeScript errors |

---

## Deployment

**Build for Production:**
```bash
npm run build
npm run start
# Test at http://localhost:3000
```

**Pre-deployment Checklist:**
```bash
npx tsc --noEmit              # ✓ No TypeScript errors
npm run lint                  # ✓ No ESLint issues
npm run build                 # ✓ Build succeeds
```

**Deploy to Vercel (Recommended):**
```bash
npm i -g vercel
vercel --prod
```

Or connect GitHub repo to Vercel Dashboard for auto-deployment on push.

---

## Customization

**Quick Customization Guide:**

**Update Project Links:**
Edit `src/components/ProjectsSection.tsx`:
```tsx
const projects = [
  {
    title: "HireMe",
    link: "https://github.com/Niloy-Pramanik/HireMe.git",  // Change this
    // ...
  }
]
```

**Change Section Headlines:**
Edit any section component (e.g., `AboutSection.tsx`):
```tsx
<h2 className="text-4xl md:text-5xl font-bold">
  New Headline Here
</h2>
```

**Update Colors:**
Edit `tailwind.config.js`:
```js
theme: {
  colors: {
    purple: {
      500: '#a855f7',  // Change this hex
      600: '#9333ea',  // Change this hex
    }
  }
}
```

**Add New Project:**
Add to projects array in `ProjectsSection.tsx`:
```tsx
{
  title: "New Project",
  description: "Description",
  link: "https://github.com/repo",
  technologies: ["Next.js", "React"],
}
```

**For detailed customization guide, see DESIGN_SUMMARY.md**

---

## Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001        # Use port 3001
# Or kill process on 3000
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

### Module Not Found Errors
```bash
rm -rf node_modules package-lock.json
npm install
rm -rf .next && npm run dev
```

### TypeScript/Build Errors
```bash
npx tsc --noEmit              # Check errors
npm run lint -- --fix         # Auto-fix issues
rm -rf .next && npm run build # Rebuild
```

### Tailwind Classes Not Applying
```bash
# Verify globals.css has Tailwind directives
grep -i "tailwind" src/app/globals.css

# Clear cache and restart
rm -rf node_modules/.cache
npm run dev
```

### Animations Laggy/Stuttering
```bash
# Test production build (faster)
npm run build && npm run start

# Check browser performance (F12 → Performance tab)
# Reduce animation complexity in components
```

### Hot Module Reload Not Working
```bash
# Stop dev server (Ctrl+C)
rm -rf .next
npm run dev
```

### Debug Mode
```bash
DEBUG=* npm run dev           # Full debugging
DEBUG=next npm run dev        # Next.js debugging
```

---

## Quick Reference

**Essential Commands:**
```bash
npm run dev              # Development server
npm run build           # Production build
npm run start           # Start production
npm run lint            # Lint code
npx tsc --noEmit        # Check TypeScript
```

**Git Workflow:**
```bash
git add .
git commit -m "feat: your feature"
git push origin main
```

**Search & Debug:**
```bash
grep -r "term" src/     # Search code
git log --oneline       # See commits
rm -rf .next            # Clear Next.js cache
rm -rf node_modules     # Clear dependencies
```

---

## Resources

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs
- **Framer Motion:** https://www.framer.com/motion

**Related Documentation:**
- `DESIGN_SUMMARY.md` - Design system & component details
- `CUSTOMIZATION_GUIDE.md` - Advanced customization
- `PROJECT_OVERVIEW.md` - Project architecture

---

## Summary

1. ✅ Install: `npm install`
2. ✅ Develop: `npm run dev`
3. ✅ Customize: Edit components in `src/`
4. ✅ Build: `npm run build`
5. ✅ Deploy: `vercel --prod`

**Recently Implemented:**
- ✅ Contact form with Formspree email backend
- ✅ Premium pill badges for section headers
- ✅ Seamless section transitions with gradient fade & ambient glow
- ✅ Advanced typography refinements (justified text, constrained width)
- ✅ Responsive button layout (side-by-side on all screen sizes)

**For detailed customization, see DESIGN_SUMMARY.md**

**Last Updated:** March 29, 2026  
**Portfolio:** Niloy Pramanik | Full-Stack Developer & AI Engineer  
**GitHub:** https://github.com/Niloy-Pramanik

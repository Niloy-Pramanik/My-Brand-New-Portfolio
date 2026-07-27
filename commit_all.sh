#!/bin/bash
rm -rf .git
git init
git remote add origin https://github.com/Niloy-Pramanik/My-Brand-New-Portfolio.git
git branch -M main

git add .gitignore
git commit -m "chore: add gitignore configuration"

find . -type f ! -path "./.git/*" ! -path "./node_modules/*" ! -path "./.next/*" ! -name ".DS_Store" ! -name ".gitignore" ! -name "commit_all.sh" | while read file; do
  clean_name="${file#./}"
  filename=$(basename "$file")
  
  case "$clean_name" in
    package.json) msg="chore: add package.json with dependencies" ;;
    package-lock.json) msg="chore: add package-lock.json for deterministic installs" ;;
    README.md) msg="docs: add project README" ;;
    tailwind.config.ts) msg="chore: configure Tailwind CSS" ;;
    tsconfig.json) msg="chore: add TypeScript configuration" ;;
    next.config.ts) msg="chore: add Next.js configuration" ;;
    src/app/globals.css) msg="style: add global CSS and Tailwind directives" ;;
    src/app/layout.tsx) msg="feat: add root layout with fonts and metadata" ;;
    src/app/page.tsx) msg="feat: add main landing page" ;;
    src/lib/data.ts) msg="feat: add portfolio data structure and content" ;;
    src/lib/animations.ts) msg="feat: add framer-motion animation variants" ;;
    src/types/index.ts) msg="feat: define TypeScript interfaces for portfolio data" ;;
    src/components/home/*) msg="feat: add ${filename%.*} component for home page" ;;
    src/components/shared/*) msg="feat: add ${filename%.*} shared UI component" ;;
    src/components/site/*) msg="feat: add ${filename%.*} layout component" ;;
    src/app/*/page.tsx) 
      dir=$(dirname "$clean_name")
      route=$(basename "$dir")
      msg="feat: add $route page" 
      ;;
    public/*.png|public/*.jpg|public/*.JPG|public/*.svg) msg="asset: add $filename image to public directory" ;;
    public/*.pdf) msg="asset: add $filename document to public directory" ;;
    *) msg="feat: add $filename" ;;
  esac
  
  git add "$file"
  git commit -m "$msg"
done

git push -u origin main --force

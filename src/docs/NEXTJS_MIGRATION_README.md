# Panama Travel - Next.js 15+ Migration Guide

This document outlines the complete migration from React + Vite to Next.js 15+ with App Router for the Panama Travel website (https://panamatravel.co.uk).

## 🚀 Migration Overview

### What's Been Converted

✅ **Framework Migration**
- Migrated from React + Vite to Next.js 15+ with App Router
- Converted all pages to the new `/src/app` structure
- Maintained all existing routes and functionality
- Upgraded to React 19 and latest ecosystem packages

✅ **Pages Converted**
- `/` - Homepage (with API data fetching)
- `/about-us` - About Us page
- `/contact-us` - Contact page with form
- `/blogs` - Blog listing page (client-side)
- `/blog/[slug]` - Individual blog pages (SSG)
- `/destination/[countryId]` - Country destination pages
- `/privacy-policy` - Privacy Policy
- `/terms-and-conditions` - Terms & Conditions
- `/cookie-policy` - Cookie Policy
- `/sitemap` - Sitemap page

✅ **SEO & Performance**
- Added metadata exports for all pages
- Implemented dynamic metadata for blog posts
- Created sitemap.js and robots.js for SEO
- Configured for both static export and SSR

✅ **Styling & Components**
- Maintained all Tailwind CSS styling
- Kept all React components intact
- Preserved animations and interactions
- Updated Tailwind config for Next.js

## 📁 New Project Structure

```
src/
├── app/
│   ├── layout.js                 # Root layout with global components
│   ├── page.js                   # Homepage
│   ├── not-found.js             # 404 page
│   ├── sitemap.js               # Dynamic sitemap generation
│   ├── robots.js                # Robots.txt generation
│   ├── about-us/
│   │   └── page.js
│   ├── contact-us/
│   │   └── page.js
│   ├── blogs/
│   │   └── page.js
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.js
│   ├── destination/
│   │   └── [countryId]/
│   │       └── page.js
│   ├── privacy-policy/
│   │   └── page.js
│   ├── terms-and-conditions/
│   │   └── page.js
│   ├── cookie-policy/
│   │   └── page.js
│   └── sitemap/
│       └── page.js
├── components/                   # All existing components (unchanged)
├── data/                        # Data files (unchanged)
├── hooks/                       # Custom hooks (unchanged)
├── utils/                       # Utility functions (unchanged)
└── index.css                    # Global styles (unchanged)
```

## 📦 Latest Package Versions

### **Core Framework**
- **Next.js**: `^15.1.3` (Latest stable with App Router improvements)
- **React**: `^19.0.0` (Latest with new features and performance improvements)
- **React DOM**: `^19.0.0`

### **Key Dependencies Updated**
- **Swiper**: `^11.1.15` (Latest with improved React integration)
- **Framer Motion**: `^11.15.0` (Latest with React 19 compatibility)
- **Tailwind CSS**: `^3.4.17` (Latest stable)
- **ESLint**: `^9.17.0` (Latest with flat config support)
- **Web Vitals**: `^4.2.4` (Latest performance metrics)

### **Benefits of Latest Versions**
- ✅ **Better Performance**: React 19 compiler optimizations
- ✅ **Improved DX**: Better error messages and debugging
- ✅ **Enhanced SEO**: Next.js 15 metadata improvements
- ✅ **Modern Features**: Latest React concurrent features
- ✅ **Security**: Latest security patches and updates

## 🛠 Setup Instructions

### 1. Install Dependencies

Replace your current `package.json` with the new Next.js version:

```bash
# Remove old dependencies
rm -rf node_modules package-lock.json

# Copy the new package.json
cp package-nextjs.json package.json

# Install new dependencies
npm install
```

### 2. Update Configuration Files

Replace these configuration files:

```bash
# Tailwind config
cp tailwind-nextjs.config.js tailwind.config.js

# PostCSS config
cp postcss-nextjs.config.js postcss.config.js

# ESLint config
cp .eslintrc-nextjs.json .eslintrc.json
```

### 3. Update Next.js Config

The `next.config.js` is already created with static export configuration for GoDaddy hosting.

## 🚀 Development & Deployment

### Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:3000
```

### Static Export (for GoDaddy Shared Hosting)

```bash
# Build and export static files
npm run build

# The static files will be in the 'out' directory
# Upload the contents of 'out' directory to your hosting
```

### SSR Deployment (for Node.js hosting)

To enable SSR, modify `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove or comment out the output: 'export' line
  // output: 'export',
  trailingSlash: true,
  images: {
    // Remove unoptimized: true for SSR
    // unoptimized: true,
  },
}

export default nextConfig
```

Then deploy normally:

```bash
npm run build
npm start
```

## 🔄 Key Changes Made

### 1. API Data Fetching

**Before (React + Vite):**
```javascript
// Custom hook with useEffect
const { data, loading, error } = useHomepageData()
```

**After (Next.js):**
```javascript
// Server-side data fetching
async function getHomepageData() {
  const res = await fetch('https://admin.panamatravel.co.uk/api/homepage', {
    next: { revalidate: 3600 }
  })
  return res.json()
}
```

### 2. Routing

**Before (React Router):**
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom'
```

**After (Next.js App Router):**
```
File-based routing in /src/app directory
```

### 3. Metadata & SEO

**Before:**
```html
<!-- Static HTML meta tags -->
<title>Panama Travel - Home</title>
```

**After:**
```javascript
export const metadata = {
  title: 'Panama Travel - Home',
  description: '...',
  openGraph: { ... }
}
```

### 4. Client Components

Components using hooks or browser APIs are marked with `'use client'`:

```javascript
'use client'

import { useState, useEffect } from 'react'
// Component code...
```

## 🎯 Features Maintained

- ✅ All animations (AOS, Framer Motion)
- ✅ Swiper sliders
- ✅ Form submissions
- ✅ API integrations
- ✅ Responsive design
- ✅ Tailwind CSS styling
- ✅ All existing components
- ✅ WhatsApp widget
- ✅ Google Reviews integration
- ✅ Blog functionality
- ✅ Country destination pages

## 🔧 Troubleshooting

### Common Issues

1. **Hydration Errors**: Make sure client-only code is in components marked with `'use client'`

2. **Import Errors**: Update import paths if needed:
   ```javascript
   // Old
   import { Link } from 'react-router-dom'
   
   // New
   import Link from 'next/link'
   ```

3. **Static Export Issues**: Ensure no server-side only features are used when `output: 'export'` is enabled

### Performance Optimization

- Images are automatically optimized in SSR mode
- Static generation provides excellent performance
- API routes can be added for server-side functionality

## 📈 SEO Improvements

- Dynamic metadata generation
- Automatic sitemap generation
- Robots.txt configuration
- Open Graph tags
- Twitter Card support
- Structured data ready

## 🚀 Next Steps

1. **Test all functionality** in development mode
2. **Update any remaining React Router links** to Next.js Link components
3. **Add any missing metadata** for better SEO
4. **Consider adding API routes** for form submissions
5. **Implement ISR** (Incremental Static Regeneration) for dynamic content
6. **Add loading states** and error boundaries as needed

## 📞 Support

For any issues during migration or deployment, the codebase maintains the same structure and functionality as the original Vite version, just adapted for Next.js App Router.

The migration preserves all existing functionality while adding the benefits of Next.js for better SEO, performance, and deployment flexibility.
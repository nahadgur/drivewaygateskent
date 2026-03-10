# Driveway Gates Surrey — Logo Assets

## File Deployment Guide

### Next.js / Vercel (App Router)

Place these files in your `/public` folder:

```
/public/favicon.ico           ← root favicon (auto-detected by browsers)
/public/favicon-16x16.png
/public/favicon-32x32.png
/public/apple-touch-icon.png  ← iOS home screen icon
/public/icon-192x192.png      ← Android / PWA
/public/icon-512x512.png      ← Android / PWA splash
/public/logo.png              ← used in <img> tags / navbar
```

### In your layout.tsx metadata:

```ts
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}
```

### In your navbar:

```tsx
<Image src="/logo.png" alt="Driveway Gates Surrey" width={60} height={60} />
```

## File Reference

| File | Size | Use |
|------|------|-----|
| favicon.ico | 16/32/48px multi | Browser tab |
| favicon-16x16.png | 16×16 | Browser tab fallback |
| favicon-32x32.png | 32×32 | Browser tab HD |
| apple-touch-icon.png | 180×180 | iOS bookmark |
| icon-192x192.png | 192×192 | Android / PWA |
| icon-512x512.png | 512×512 | Android splash / PWA |
| logo-60px.png | 60×60 | Navbar (1x) |
| logo-120px.png | 120×120 | Navbar (2x retina) |
| logo-240px.png | 240×240 | Large display |
| logo.png | 400×400 | General use |
| logo-original.png | Original | Master copy |

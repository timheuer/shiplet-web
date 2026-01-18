# Shiplet Website - Copilot Instructions

## Project Overview

This is the marketing website for **Shiplet**, an iOS package tracking app. The site is a static HTML/CSS/JS landing page hosted on GitHub Pages at `shiplet.app`.

## Tech Stack

- **HTML5** - Single page with semantic markup
- **Tailwind CSS** - Via CDN with inline config
- **Custom CSS** - Design system in `css/custom.css`
- **Vanilla JavaScript** - Minimal interactions in `js/main.js`
- **No build step** - Static files served directly

## Project Structure

```
shiplet-web/
├── index.html          # Main landing page
├── css/
│   └── custom.css      # Design system & custom components
├── js/
│   └── main.js         # Mobile menu, scroll animations
├── images/
│   ├── app-icon.png    # App icon
│   ├── screenshot.png  # App screenshot for mockup
│   ├── download-app-store.svg      # Official Apple App Store badge
│   ├── download-testflight.svg     # Custom TestFlight beta badge
│   ├── testflight-color.svg        # TestFlight icon (color)
│   └── testflight-monochrome.svg   # TestFlight icon (mono)
├── privacy/
│   └── index.html      # Privacy policy page
├── CNAME               # Custom domain config
└── README.md
```

## Design System

### Colors (CSS Variables)

The design system is defined in `css/custom.css` and mirrors the iOS app's color palette:

```css
--primary: #5C6B7A;        /* Slate-blue from app icon */
--accent: #66B3B3;         /* Teal accent (statusAccent) */
--accent-mint: #90D4A3;    /* Green dot from icon */
--destructive: #D97373;    /* Muted coral for errors */
```

### Status Colors (80% opacity)

- Delivered: `rgba(52, 199, 89, 0.8)` - systemGreen
- In Transit: `rgba(0, 122, 255, 0.8)` - systemBlue  
- Pending: `#8E8E93` - systemGray
- Issue: `#FF9500` - systemOrange

### Tailwind Config

Custom colors are also defined in the inline Tailwind config in `index.html`:

```js
colors: {
    primary: { DEFAULT: '#5C6B7A', dark: '#4A5568', light: '#6B7A8A' },
    accent: { DEFAULT: '#66B3B3', mint: '#90D4A3' },
    destructive: '#D97373',
}
```

## Key Components

### Download Badges

- **App Store Badge**: Use official Apple SVG at `images/download-app-store.svg`
- **TestFlight Badge**: Custom blue badge at `images/download-testflight.svg` with orange "BETA" indicator
- TestFlight badge only appears on main page hero/CTA sections, NOT in navigation menus
- TestFlight link: `https://testflight.apple.com/join/25FgUc5F`

### iPhone Mockup

The `.iphone-frame` class creates a realistic iPhone frame with:
- Dynamic Island notch
- Side buttons (power, volume)
- Proper border radius matching iPhone design

### Status Badges

Use `.status-badge` with modifiers:
- `.status-badge--delivered` - Green
- `.status-badge--transit` - Blue
- `.status-badge--pending` - Gray

### Cards

`.shiplet-card` provides the standard card styling matching iOS app's `shipletCard()` modifier.

## Important Conventions

1. **Dark Mode**: Automatically supported via `prefers-color-scheme: dark`
2. **Responsive**: Mobile-first with breakpoints at `md:` (768px) and `lg:` (1024px)
3. **Animations**: Scroll-triggered animations use `.scroll-animate` class
4. **Accessibility**: All interactive elements have proper ARIA labels and focus styles

## Carrier Support Display

The "Works with" section shows: FedEx, USPS, UPS, Amazon +more

## Contact Information

- Email: help@shiplet.app
- Domain: shiplet.app

## Do NOT Change

- **App Store badge** (`download-app-store.svg`) - This is the official Apple asset
- **TestFlight link** - Keep as `https://testflight.apple.com/join/25FgUc5F`
- **Color system** - Must match iOS app colors

## Common Tasks

### Adding a new feature card

Add to the `.grid` in the Features section:
```html
<div class="shiplet-card scroll-animate feature-card">
    <div class="feature-icon mb-4">
        <svg>...</svg>
    </div>
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Title</h3>
    <p class="text-gray-600 dark:text-gray-300 text-sm">Description</p>
</div>
```

### Updating screenshots

Replace `images/screenshot.png` with a new screenshot. The iPhone mockup will automatically display it.

### Testing locally

```bash
# Simple Python server
python3 -m http.server 8080

# Then open http://localhost:8080
```

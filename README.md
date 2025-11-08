# TechSpeed Design System - Vite + React + Tailwind

A modern, responsive website built with Vite, React, Tailwind CSS, and shadcn/ui, following the TechSpeed Design System specifications.

## Features

- **Design System Integration**: All colors, typography, and motion tokens from `designSystem.json`
- **Responsive Layout**: 12-column grid, 1280px max width, 24px gutters
- **Typography**: Space Grotesk for headings, Inter for body text
- **Motion**: Scroll reveals, hover effects, glitch animations, and parallax
- **Accessibility**: Focus rings, reduced motion support, 44px min tap targets

## Components

- **NavBar**: Sticky navigation with blur effect on scroll
- **Hero**: Full-screen hero with glitch text animation and isometric blocks
- **Features**: Grid of cards with hover tilt and stagger animations
- **Testimonial**: Split section with floating image frame
- **CTABanner**: Call-to-action with animated arrow
- **Footer**: Multi-column footer with large logo mark

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Design System

All design tokens are defined in CSS variables on `:root`:
- Colors: `--bg`, `--primary`, `--accent`, `--highlight`, `--text`
- Motion: `--duration-*`, `--ease-*`
- Shadows: `--shadow-card`, `--shadow-hover`, `--shadow-nav`

## Tech Stack

- Vite 7.x
- React 19.x
- Tailwind CSS (with @tailwindcss/postcss)
- shadcn/ui utilities
- Google Fonts (Space Grotesk, Inter)

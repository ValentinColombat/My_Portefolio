# Portfolio - Valentin Colombat

Professional portfolio website showcasing web development skills, projects, and experience. Built with modern technologies and optimized for performance and user experience.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Animation System](#animation-system)
- [Responsive Design](#responsive-design)
- [Contact Integration](#contact-integration)

## Overview

This portfolio is a modern, fully responsive single-page application designed to present professional experience, technical skills, and project work. The application emphasizes smooth animations, optimal mobile experience, and clean architecture.

## Tech Stack

### Core Technologies
- **React 19.1.1** - UI component library
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.1.7** - Fast build tool and development server
- **React Router DOM 7.9.3** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Lucide React 0.544.0** - Icon library
- **DaisyUI 5.1.24** - Component library for Tailwind

### Communication
- **EmailJS 4.4.1** - Email service integration for contact form

### Development Tools
- **ESLint 9.36.0** - Code linting
- **TypeScript ESLint 8.44.0** - TypeScript-specific linting rules

## Features

### 1. Scroll-Based Animation System

Implementation of a sophisticated section-based animation system using the Intersection Observer API.

**Custom Hook: `useIntersectionObserver`**
```typescript
// Located in: src/hooks/useIntersectionObserver.ts
- Detects when elements enter viewport
- Configurable threshold and rootMargin
- Optional triggerOnce mode for single animations
- Returns ref and visibility state
```

**Animation Classes:**
- `slide-in-left` - Elements slide from left with fade-in
- `slide-in-right` - Elements slide from right with fade-in
- `slide-in-bottom` - Elements slide from bottom with fade-in
- `fade-in` - Pure opacity transition
- `scale-up-fade` - Scale and opacity transformation
- Stagger delays (`stagger-1` through `stagger-9`) for cascading effects

**Sections with Animations:**
- About: Multi-directional animations (image from left, text from right)
- Experiences: Staggered skill icons with bounce effect
- Contact: Convergent animations (left and right simultaneously)
- Footer: Bottom slide-in entrance
- Projects: Title, subtitle, and grid with staggered cards

### 2. Smooth Navigation System

**Implementation: `src/utils/smoothNavigation.ts`**

Prevents white page flashes during navigation by:
- Preloading CSS before navigation
- Implementing fade-out transition (200ms)
- Smooth scrolling to top
- Fade-in transition after page load
- Singleton pattern for consistent behavior

Automatically intercepts all internal link clicks and applies smooth transitions.

### 3. Responsive Mobile Optimization

**Typography Scaling:**
- Adaptive font sizes using Tailwind responsive utilities
- Mobile: `text-sm`, Desktop: `text-base`
- Titles scale from `text-lg` to `text-2xl` across breakpoints

**Content Adaptation:**
- Conditional paragraph visibility on mobile (`hidden sm:block`)
- Experiences section reduces from 4 to 2 paragraphs on mobile
- Navbar displays "Valentin C." on mobile, full name on desktop

**Spacing - Optimization:**
- Mobile: `py-12`, `gap-4`, `space-y-4`
- Desktop: `py-20`, `gap-8`, `space-y-8`
- Reduces vertical space consumption on small screens

**Responsive Images:**
- Different hero images for mobile and desktop
- Mobile: Optimized vertical composition
- Desktop: Full landscape composition

**Breakpoints:**
- `sm`: 640px (small devices)
- `md`: 768px (tablets)
- `lg`: 1024px (laptops)
- `xl`: 1280px (desktops)

### 4. Contact Form Integration

**Service: `src/services/contactService.ts`**

EmailJS integration for serverless email handling:
- Form validation
- Submission state management
- Success/error feedback
- No backend required

**Configuration: `src/config/emailjs.ts`**
- Service ID, Template ID, Public Key storage
- Environment-ready setup

### 5. Modern UI Components

**Design System:**
- Glassmorphism effects (`backdrop-blur-sm`)
- Gradient borders and accents
- Floating geometric elements
- Animated backgrounds with grid patterns
- Hover states with shadow and glow effects

**Custom Components:**
- `Title` - Consistent section headers
- `Navbar` - Sticky navigation with scroll effects
- `Footer` - Social links and contact information
- Project cards with overlay interactions
- Skill badge system with images

### 6. Code Quality & Refactoring

**Data-Driven Architecture:**

The codebase follows modern React best practices with a strong emphasis on maintainability and DRY (Don't Repeat Yourself) principles.

**Key Implementations:**

1. **Array-Based Rendering**
   ```typescript
   // Example: Navigation items
   const navItems = [
     { href: "#Home", label: "Accueil" },
     { href: "#About", label: "À propos" }
   ];
   
   {navItems.map((item) => (
     <a key={item.href} href={item.href}>{item.label}</a>
   ))}
   ```

2. **Reusable CSS Constants**
   ```typescript
   // Centralized styling for form inputs
   const INPUT_CLASSES = "w-full px-4 py-3 bg-white/5 border...";
   ```

3. **Geometric Shapes Generation System**
   - **File:** `src/utils/geometricShapes.ts`
   - **Algorithm:** Seeded pseudo-random generation (Mulberry32)
   - **Benefits:**
     - Reproducible results with fixed seed
     - Reduced code from 150+ lines to ~20 lines
     - Easy to adjust shape count and randomness
     - Parametric control over colors, sizes, positions
   
   ```typescript
   // Generate 50 shapes with seed 41 for consistency
   const shapes = generateGeometricShapes(50, 41);
   ```

4. **Component Refactoring Results**
   - **Navbar:** 56 lines → 42 lines (-25%)
   - **Home:** 230 lines → 100 lines (-56%)
   - **Contact:** 288 lines → 273 lines (-5%)
   - **Footer:** 49 lines → 43 lines (-12%)
   - **Total reduction:** 27% less code, improved maintainability

**Code Principles Applied:**
- ✅ DRY (Don't Repeat Yourself)
- ✅ Single Source of Truth for data
- ✅ Separation of concerns (data vs. presentation)
- ✅ Accessibility improvements (aria-labels)
- ✅ YAGNI (You Aren't Gonna Need It) - avoiding premature optimization

## Project Structure

```
src/
├── assets/              # Static assets
│   ├── companies/       # Company logos
│   ├── projects/        # Project screenshots
│   └── techno/          # Technology icons
├── components/          # React components
│   ├── About.tsx        # About section with expertise
│   ├── Contact.tsx      # Contact form
│   ├── ContactsAdmin.tsx # Admin contact view
│   ├── Experiences.tsx  # Skills and experience
│   ├── Footer.tsx       # Site footer
│   ├── Home.tsx         # Hero section
│   ├── Navbar.tsx       # Navigation bar
│   ├── Projects.tsx     # Project showcase
│   └── Title.tsx        # Reusable title component
├── config/              # Configuration files
│   └── emailjs.ts       # EmailJS configuration
├── hooks/               # Custom React hooks
│   └── useIntersectionObserver.ts
├── services/            # API services
│   └── contactService.ts
├── styles/              # Global styles
│   └── animations.css   # Animation definitions
├── utils/               # Utility functions
│   ├── geometricShapes.ts  # Geometric shapes generator with seeded random
│   └── smoothNavigation.ts # Smooth page transitions
├── App.tsx              # Root component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind
```

## Installation

```bash
# Clone the repository
git clone https://github.com/ValentinColombat/My_Portefolio.git

# Navigate to project directory
cd My_Portefolio

# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev

# Development server runs on http://localhost:5173
```

**Hot Module Replacement (HMR):**
- Instant updates without full page reload
- Preserves component state during development
- Fast feedback loop for styling and logic changes

## Build & Deployment

```bash
# Type-check and build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

**Build Output:**
- Optimized bundle in `dist/` directory
- Minified and tree-shaken JavaScript
- Compressed CSS with purged unused classes
- Optimized asset loading

**Deployment:**
- Configured for Netlify via `netlify.toml`
- Redirects handled in `public/_redirects`
- SPA routing support with fallback to index.html

## Animation System

### Implementation Details

**CSS Transitions:**
- Duration: 1.2-1.4s for smooth, professional feel
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` for natural motion
- Respects `prefers-reduced-motion` accessibility setting

**JavaScript Detection:**
- Intersection Observer with configurable thresholds
- Lazy animation triggering improves initial load performance
- Optional single-fire mode to prevent re-triggering

**Performance:**
- GPU-accelerated transforms (translateX, translateY, scale)
- Opacity transitions
- No layout thrashing
- Minimal JavaScript footprint

### Adding New Animations

```typescript
// 1. Import the hook
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// 2. Create observer instance
const { elementRef, isVisible } = useIntersectionObserver({ 
  threshold: 0.3,
  triggerOnce: true 
});

// 3. Apply to element
<div 
  ref={elementRef}
  className={`slide-in-bottom ${isVisible ? 'visible' : ''}`}
>
  Content
</div>
```

## Responsive Design

### Mobile-First Approach

All components start with mobile styling and scale up using Tailwind breakpoints.

**Typography:**
```jsx
className="text-sm sm:text-base md:text-lg lg:text-xl"
```

**Spacing:**
```jsx
className="py-12 md:py-20 lg:py-32"
```

**Layout:**
```jsx
className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
```

**Visibility:**
```jsx
className="hidden sm:block"          // Desktop only
className="sm:hidden"                 // Mobile only
```

### Testing Responsive Design

- Chrome DevTools responsive mode
- Real device testing recommended
- Breakpoint testing: 320px, 640px, 768px, 1024px, 1280px

## Contact Integration

### EmailJS Setup

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service (Gmail, Outlook, etc.)
3. Create email template
4. Update `src/config/emailjs.ts` with credentials:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'your_service_id',
  templateId: 'your_template_id',
  publicKey: 'your_public_key'
};
```

### Environment Variables (Optional)

```bash
# .env.local
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Required APIs:**
- Intersection Observer
- CSS Grid
- CSS Custom Properties
- ES6+ JavaScript

## Performance Considerations

- Lazy-loaded animations reduce initial render cost
- Optimized images with appropriate formats
- Tree-shaking eliminates unused code
- CSS purging removes unused Tailwind classes
- Vite's code-splitting for optimal bundle size

## Recent Updates

### October 2025 - Code Refactoring & Optimization

**Comprehensive codebase audit and refactoring:**

#### New Features
- ✨ **Geometric Shapes Generator** (`geometricShapes.ts`)
  - Seeded pseudo-random generation for reproducible designs
  - 5 shape types: circles, squares, triangles, hexagons, particles
  - Parametric control over animations, colors, and positions
  - Reduced Home component from 230 to 100 lines (-56%)

#### Component Optimizations
- 🔧 **Navbar** - Refactored with `navItems` array and centralized CSS classes
- 🔧 **Home** - Data-driven energy bars and statistics
- 🔧 **Contact** - Reusable `INPUT_CLASSES` constant and `contactMethods` array
- 🔧 **Footer** - Social links with improved accessibility (aria-labels)

#### Documentation
- 📚 Complete README with comprehensive project documentation
- 📚 Animation system detailed explanation
- 📚 Responsive design guidelines
- 📚 Code architecture and refactoring principles

#### Code Quality Improvements
- ✅ 27% overall code reduction (623 → 458 lines)
- ✅ DRY principles applied throughout
- ✅ Improved maintainability with data-driven components
- ✅ Enhanced accessibility with semantic HTML and ARIA labels
- ✅ Better separation of concerns (data/logic/presentation)

**Impact:**
- Easier maintenance and future updates
- More consistent codebase
- Better developer experience
- Improved code readability

## Contact

**Valentin Colombat**
- Portfolio: [Portfolio](https://valentincolombat.netlify.app)
- GitHub: [@ValentinColombat](https://github.com/ValentinColombat)
- Email: valentincolombat@gmail.com

---

Built with attention to detail, performance, and user experience.

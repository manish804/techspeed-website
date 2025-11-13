## Scope
- Implement smooth, professional animations across all pages using only CSS transitions/animations and Intersection Observer.
- Reuse existing motion variables (`--duration-*`, `--ease-*`) and keyframes from `src/index.css`.
- Leverage the existing `useScrollAnimation`, `useStaggeredAnimation`, `useParallax`, and `useRipple` hooks in `src/hooks/`.

## Foundation
- Confirm global utilities already present in `src/index.css`:
  - Scroll reveal utilities: `.scroll-animate`, `.scroll-animate-left/right/scale` with `.visible` state.
  - Page transitions: `.page-enter`, `.page-enter-active`, `.page-exit-active` using CSS variables.
  - Hover/magnetic/ripple: `.btn-enhanced`, `.magnetic-button`, `@keyframes ripple`.
  - Backgrounds and micro-interactions: animated gradients, floating shapes, skeletons, glassmorphism, dot/grid patterns.
- Keep all motion strictly on `transform` and `opacity`; honor `prefers-reduced-motion`.

## Page Transitions
- Keep router transitions centralized in `src/App.jsx` (`AnimatedRoutes`) using `.page-enter/-active` and `.page-exit-active` classes.
- Wrap each page root container with transition classes as needed to ensure the subtle load fade + slide up.

## Scroll Animations & Stagger
- Pattern applied consistently:
  - Section containers: `const [ref, visible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true })` and `<section ref={ref} className={\`scroll-animate ${visible ? 'visible' : ''}\`}>`.
  - Lists/grids: `const { getItemRef, getItemStyle } = useStaggeredAnimation(100–140)` and apply per item.
  - Parallax accents: `const offset = useParallax(0.1–0.2)` and use `translateY(offset * factor)` on decorative background elements.

## Interactive Elements
- Buttons: unify `className="magnetic-button btn-enhanced ripple-effect"`; attach `useRipple()` for click waves.
- Nav links: retain underline animation via existing group-hover patterns in `NavBar.jsx`.
- Cards: add `card-elevated card-hover-lift rounded-transition` for depth and smooth radii.
- Accordions: use existing `.accordion-content` open/close keyframes.

## Micro-Interactions
- Loading skeletons: use `.skeleton` and `.skeleton-dark` in content placeholders where data would load (blog/posts, resources).
- Number counters: continue Intersection Observer-triggered count-up in statistic sections.
- Typing effect: keep typewriter-style headline in hero where applicable.
- Smooth anchor links: rely on `html { scroll-behavior: smooth }`.

## Background Effects
- Animated gradients: add `.animated-gradient` and `.animated-gradient-purple` to hero/major sections.
- Floating geometric shapes and dot/grid patterns: apply sparingly for premium feel.
- Optional blob morph: use `.animate-blob-morph` on subtle hero decor.

## Files To Update (progressively)
- `src/pages/WorkforcePage.jsx`: add section scroll reveals, staggered feature/benefit lists, CTA ripple/magnetic, optional parallax accent.
- `src/pages/ResourcesPage.jsx`: reveal sections, stagger resource cards, skeleton placeholders for content blocks, CTA interactions.
- `src/pages/SuccessStoriesPage.jsx`: reveal case cards, staggered grids, card hover lift/elevation, gradient overlays on imagery.
- `src/pages/BlogPage.jsx` & `src/pages/BlogPostPage.jsx`: add scroll reveals, stagger post lists, skeletons for loading areas, underline animations on links.
- `src/pages/CareersPage.jsx`: reveal sections, stagger job cards, CTA ripple/magnetic.
- `src/pages/PrivacyPage.jsx` & `src/pages/DisclaimerPage.jsx`: minimal page transition and subtle scroll reveals for headings.
- Minor refinements to existing pages to ensure consistent motion utilities and durations.

## Durations & Easing
- UI elements: 200–600ms, primarily `var(--duration-sm|md|lg)` with `var(--ease-standard|decelerate|accelerate)`.
- Stagger intervals: 80–140ms per item depending on density.

## Verification
- Manual route navigation to validate page transitions.
- Scroll through each page to confirm stagger timing, parallax smoothness, and reduced-motion behavior.
- Check button hover/click interactions (magnetic + ripple) for responsiveness and accessibility.

## Deliverables
- Consistent scroll animations across all major sections.
- Smooth page transitions and subtle page load animation.
- Interactive elements upgraded (hover, magnetic, ripple, underline).
- Micro-interactions (skeletons, accordions, counters, typing) applied where appropriate.
- Background effects used tastefully to elevate the visual design.

Please confirm and I will apply these changes across the remaining pages (Workforce, Resources, Success Stories, Blog, Blog Post, Careers, Privacy, Disclaimer) to complete the premium motion experience.
# AGENTS.md — Kuber Roofing Solutions

## Project Overview

Kuber Roofing Solutions is a modern, responsive, SEO-focused business website for a roofing solutions company.

The website showcases roofing products, applications, completed projects, and provides clear ways for potential customers to request quotations or contact the business.

This is primarily a marketing and lead-generation website, not an e-commerce application.

---

## Tech Stack

Use:

- Next.js with App Router
- React
- TypeScript
- Tailwind CSS
- React Compiler
- Lucide React for icons
- Next.js Image component for images
- Next.js Metadata API for SEO

Do not introduce additional libraries unless they provide a clear benefit.

---

## Architecture

Use the `src/` directory.

Primary structure:

src/
├── app/
├── components/
│   ├── layout/
│   ├── home/
│   └── ui/
├── data/
├── lib/
└── types/

Keep page-specific components separate from reusable UI components.

Example:

components/home/Hero.tsx
components/home/FeaturedProducts.tsx

Reusable components should go under:

components/ui/

Shared layout components should go under:

components/layout/

---

## Homepage Structure

The homepage should contain:

1. Header
2. Hero
3. Trust / Benefits Strip
4. Featured Products
5. Why Kuber
6. Applications
7. Quote CTA
8. Footer

Do not add additional homepage sections unless explicitly requested.

Keep the homepage concise and conversion-focused.

---

## Design System

Follow the approved Google Stitch designs as the primary visual reference.

Maintain consistency across:

- Colors
- Typography
- Spacing
- Border radius
- Buttons
- Cards
- Shadows
- Navigation
- Section widths

Do not independently redesign approved Stitch layouts.

If implementation details differ from the Stitch output, preserve the visual intent while using clean React and Tailwind patterns.

---

## Visual Direction

The website should feel:

- Premium
- Professional
- Industrial
- Modern
- Reliable
- Spacious

Avoid:

- Generic construction-template appearance
- Excessive gradients
- Excessive animations
- Glassmorphism unless explicitly required
- Excessive shadows
- Decorative clutter
- Cartoon illustrations
- Unnecessary UI elements

Use roofing and architectural photography as the primary visual language.

---

## Responsive Design

All pages must work properly on:

- Mobile
- Tablet
- Laptop
- Large desktop

Use mobile-first responsive design.

Avoid fixed widths that cause horizontal scrolling.

Navigation must collapse appropriately on smaller screens.

Buttons and interactive elements must remain touch-friendly.

---

## Components

Prefer small, focused components.

Do not create unnecessary abstractions.

Create reusable components when the same visual or functional pattern appears multiple times.

Examples:

Button
SectionHeading
ProductCard
ApplicationCard

Do not duplicate identical UI across pages.

---

## Images

Use `next/image` whenever appropriate.

Store local images under:

public/images/

Suggested organization:

public/images/home/
public/images/products/
public/images/applications/
public/images/projects/

Always provide meaningful `alt` text.

Avoid unnecessary image loading.

Use responsive image sizing and appropriate `sizes`.

Prioritize page performance and prevent layout shifts.

---

## SEO

SEO is a high priority.

Every public page must have appropriate metadata.

Use:

- Unique page titles
- Meta descriptions
- Canonical URLs when appropriate
- Open Graph metadata
- Semantic HTML
- Correct heading hierarchy

Use only one primary H1 per page.

Product pages should target relevant roofing-product search intent naturally.

Do not keyword-stuff content.

Where appropriate, support structured data using JSON-LD.

The website should eventually support:

- sitemap.xml
- robots.txt

---

## Accessibility

Use semantic HTML.

Use:

header
nav
main
section
article
footer

where appropriate.

All meaningful images require descriptive alt text.

Interactive elements must be keyboard accessible.

Maintain sufficient text/background contrast.

Form inputs must have proper labels.

Do not rely solely on color to communicate meaning.

---

## Performance

Performance is important.

Prefer Server Components unless client-side functionality is actually required.

Do not add `"use client"` unnecessarily.

Avoid large client-side dependencies.

Use dynamic loading only where it provides a meaningful benefit.

Optimize images.

Avoid unnecessary JavaScript.

---

## Animations

Animations should be subtle and purposeful.

Prefer lightweight CSS/Tailwind transitions for:

- Hover states
- Buttons
- Cards
- Navigation

Do not introduce an animation library solely for simple effects.

Respect `prefers-reduced-motion`.

---

## Forms

The website is initially frontend-focused.

Do not introduce a database or separate backend unless explicitly requested.

Quote/contact forms should be designed so they can later connect to:

- WhatsApp
- Email
- Next.js Server Actions
- External CRM/API

Keep enquiry forms short.

---

## Product Pages

The website is not an e-commerce store.

Do not add:

- Add to Cart
- Checkout
- Quantity selectors
- Product prices
- Buy Now
- Customer accounts

Product pages exist to explain the product and generate enquiries.

---

## Content Integrity

Never invent:

- Certifications
- Customer names
- Customer testimonials
- Project numbers
- Years of experience
- Technical specifications
- Warranty periods
- Business statistics

Use placeholders when real business information has not been provided.

---

## Code Quality

Use TypeScript properly.

Avoid `any` unless absolutely necessary.

Prefer clear naming over clever abstractions.

Keep components readable.

Remove unused imports and dead code.

Do not leave commented-out experimental code.

Do not hardcode repeated business/product data inside multiple components.

Move reusable content into data/config files where appropriate.

---

## Validation

Before considering a development task complete, run:

```bash
npm run lint
npm run build

## Codex Implementation Workflow

Before writing code:

1. Read this AGENTS.md completely.
2. Inspect the existing project structure and relevant components.
3. Understand existing design patterns before creating new ones.
4. Reuse existing components where practical.
5. Do not install packages unless required.

When implementing a Stitch design:

1. Treat the provided Stitch design/screenshot as the visual source of truth.
2. Match layout, spacing, typography, sizing and visual hierarchy closely.
3. Do not add sections or UI elements that are not present in the reference.
4. Break the page into appropriate React components.
5. Make the implementation responsive rather than matching only the provided viewport.
6. Use `next/image` for website imagery where appropriate.
7. Prefer Server Components.
8. Add `"use client"` only when actual client-side interactivity requires it.

After implementation:

1. Review the changed files.
2. Check mobile and desktop behavior.
3. Run `npm run lint`.
4. Run `npm run build`.
5. Fix errors introduced by the changes.
6. Report the files changed and any assumptions made.
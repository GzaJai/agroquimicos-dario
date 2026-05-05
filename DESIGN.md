---
name: Agro-Precision Narrative
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#3e4a3f'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6e7a6e'
  outline-variant: '#bdcabc'
  surface-tint: '#006d37'
  primary: '#006a36'
  on-primary: '#ffffff'
  primary-container: '#008645'
  on-primary-container: '#f6fff4'
  inverse-primary: '#69dd8e'
  secondary: '#2e6388'
  on-secondary: '#ffffff'
  secondary-container: '#a3d4ff'
  on-secondary-container: '#265c82'
  tertiary: '#006671'
  on-tertiary: '#ffffff'
  tertiary-container: '#00818e'
  on-tertiary-container: '#f7feff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#86faa8'
  primary-fixed-dim: '#69dd8e'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005228'
  secondary-fixed: '#cbe6ff'
  secondary-fixed-dim: '#9accf7'
  on-secondary-fixed: '#001e31'
  on-secondary-fixed-variant: '#0c4b6f'
  tertiary-fixed: '#95f1ff'
  tertiary-fixed-dim: '#6bd6e5'
  on-tertiary-fixed: '#001f24'
  on-tertiary-fixed-variant: '#004f57'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: workSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: workSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: workSans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: workSans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: workSans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The brand personality of this design system is rooted in the intersection of traditional agricultural expertise and modern chemical precision. It is designed to evoke feelings of reliability, structural integrity, and environmental stewardship. The target audience includes large-scale agricultural producers and agronomists who value efficiency and proven results.

The chosen design style is **Corporate / Modern** with a focus on high-clarity information density. It utilizes a structured grid, purposeful whitespace, and a refined color application to ensure the user feels they are interacting with a sophisticated, established enterprise. The aesthetic avoids unnecessary decoration, favoring functional clarity and a clean, "scientific" air.

## Colors

The palette is anchored by **Growth Green** (#22A058), representing vitality and the core of the agricultural business. **Deep Slate Blue** (#35698F) provides a foundation of corporate trust and technical authority, while **Agro-Cyan** (#40B0BF) acts as a bridge between the natural and the chemical sectors.

**Harvest Gold** (#FFEA64) is used sparingly as a high-visibility accent for critical calls to action or status indicators. The neutral background remains a crisp, clean white to ensure maximum readability and a professional, laboratory-clean atmosphere.

## Typography

This design system uses a dual-font strategy to balance modernity with utility. **Manrope** is selected for headlines; its geometric yet warm structure provides a contemporary, high-tech feel that commands attention. For body text and functional UI labels, **Work Sans** is employed for its exceptional legibility and professional, grounded character.

Hierarchy is established through significant weight shifts—using bold headers to anchor sections and medium-weight labels to guide the eye through data-heavy chemical specifications.

## Layout & Spacing

The design system utilizes a **Fixed Grid** model for desktop experiences to maintain a sense of established structure and order. A 12-column grid is the standard, with generous 24px gutters to allow technical information to "breathe."

The spacing rhythm is based on an 8px scale. Vertical rhythm is strictly enforced to ensure that product lists and technical data sheets remain scannable and organized. Content should be centered in the viewport with maximum container widths to prevent line lengths from becoming unreadable on wide displays.

## Elevation & Depth

To maintain a professional and trustworthy feel, depth is conveyed through **Tonal Layers** and **Ambient Shadows**. Surfaces are primarily flat, but key interactive elements and containers utilize very soft, diffused shadows with a slight secondary color tint (#35698F at 5% opacity) to ground them in the layout.

- **Level 0 (Base):** Neutral background for the page.
- **Level 1 (Cards):** Surface color with a 1px border (#E9ECEF) and a subtle 4px blur shadow.
- **Level 2 (Dropdowns/Modals):** Higher elevation with an 8px blur shadow to indicate immediate interaction priority.

## Shapes

The shape language reflects a balance between the organic nature of agriculture and the precision of chemical engineering. A **Rounded** (Level 2) approach is applied to most components. This ensures the interface feels approachable and modern, while the 0.5rem base radius is conservative enough to maintain a professional, corporate tone.

Interactive components like buttons and input fields utilize this standard radius, while larger containers like cards may transition to the `rounded-lg` (1rem) variant to soften the overall page structure.

## Components

### Buttons
Primary buttons use the Primary Green with white text and a subtle 2px bottom-shadow to create a tactile, "pressable" feel. Secondary buttons use the Slate Blue outline style for less aggressive actions.

### Input Fields
Inputs are defined by a light gray background and a 1px border that shifts to Slate Blue on focus. Labels are always positioned above the field in `label-bold` for maximum clarity during data entry.

### Cards
Cards are the primary container for product listings and safety data. They feature a white background, the standard 0.5rem corner radius, and a subtle border. Header sections within cards may use a light Slate Blue tint to separate metadata from the primary content.

### Chips & Tags
Used for chemical categories (e.g., Herbicide, Fungicide). These use a semi-transparent fill of the category's assigned color with high-contrast dark text to ensure they are readable at a glance without overpowering the layout.

### Data Tables
Tables are essential for chemical compositions. They use a "Zebra-stripe" pattern with the neutral background color and sharp, 1px horizontal dividers to maintain alignment across complex rows.

### Status Indicators
Small circular indicators for stock levels or regulatory approvals, utilizing the primary green for "In Stock" and the Harvest Gold for "Limited Availability."
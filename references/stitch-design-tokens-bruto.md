---
name: Enamel & Blade
colors:
  surface: '#001428'
  surface-dim: '#001428'
  surface-bright: '#263b51'
  surface-container-lowest: '#000f20'
  surface-container-low: '#061d32'
  surface-container: '#0a2136'
  surface-container-high: '#162b41'
  surface-container-highest: '#22364d'
  on-surface: '#d1e4ff'
  on-surface-variant: '#e2beba'
  inverse-surface: '#d1e4ff'
  inverse-on-surface: '#1d3248'
  outline: '#a98985'
  outline-variant: '#5a413d'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690004'
  primary-container: '#c0342b'
  on-primary-container: '#ffe2de'
  inverse-primary: '#b22a23'
  secondary: '#ccc6b7'
  on-secondary: '#333026'
  secondary-container: '#4a473b'
  on-secondary-container: '#bbb5a6'
  tertiary: '#fabc3e'
  on-tertiary: '#422d00'
  tertiary-container: '#896100'
  on-tertiary-container: '#ffe5bc'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#900d0e'
  secondary-fixed: '#e9e2d2'
  secondary-fixed-dim: '#ccc6b7'
  on-secondary-fixed: '#1e1c12'
  on-secondary-fixed-variant: '#4a473b'
  tertiary-fixed: '#ffdea8'
  tertiary-fixed-dim: '#fabc3e'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4200'
  background: '#001428'
  on-background: '#d1e4ff'
  surface-variant: '#22364d'
typography:
  display-lg:
    fontFamily: Bevan
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: 0.02em
  display-lg-mobile:
    fontFamily: Bevan
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Bevan
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Bevan
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Bevan
    fontSize: 22px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  headline-sm:
    fontFamily: Bevan
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.02em
  price-display:
    fontFamily: Bevan
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Libre Franklin
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 22px
    letterSpacing: 0.04em
  body-lg:
    fontFamily: Libre Franklin
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Libre Franklin
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-lg:
    fontFamily: Libre Franklin
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Libre Franklin
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-xxs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2.5rem
---

## Brand & Style

This design system draws direct inspiration from the vernacular graphic heritage of Brazilian neighborhood barbershops (*barbearias de bairro*) and traditional hand-painted tin and enamel trade signs (*placas esmaltadas*). It rejects sterile modern minimalism, faux-luxury gold foil, neon barbershop tropes, and digital sheen in favor of grounded, physical craft, typographic conviction, and tactile permanence.

The visual style is characterized by:
- **Signboard Structure:** Compartmentalized modules, banded headers, inset borders, and painted placards evoking physical tin signage.
- **Handcrafted Tactility:** Solid, opaque pigmentation with zero gradients, translucent glass, or faux blurs. Visual weight mimics physical paint applied over metal or treated wood.
- **Pragmatic Utility:** Clean line rules, punchy price callouts, stamped badges, and clear tabular service menus that communicate honest service and mastery of the trade.
- **Atmospheric Warmth:** An earthy interplay between deep weather-resistant navy tones and warm calcified cream, punctuated by decisive signal red and occasional painted yellow marks.

## Colors

The color palette is modeled after high-durability industrial enamel paints historically applied to metal trade placards. Surfaces rely on deep, solid values without digital transparency.

### Palette Roles
- **Base Canvas (`#14293F` - Dark Enamel Navy):** The structural ground plane. Deep, stoic, and non-reflective.
- **Surface Layer (`#21384F` - Surface Navy):** Secondary containers, menu plates, and structural cards.
- **Warm Cream (`#EDE6D6`):** The primary light field, mimicking aged off-white signage paint and parchment ticket paper. Used for high-contrast placards, banners, primary text against navy, or background fields on inverse cards.
- **Ink Black (`#1A1714`):** Used strictly for high-contrast text and graphic borders when resting on Warm Cream surfaces.
- **Bold Action Red (`#C0342B`):** Dedicated to primary action triggers, status indicators (e.g., active chair, urgent notice), and classic barbershop striping accents.
- **Mustard Yellow (`#E0A526`):** Used sparingly as an accent for price ribbons, certification seals, star ratings, and hand-painted graphic ornaments.

### Color Rules
- Gradients, drop-shadow tints, and frosted overlays are strictly forbidden.
- When nesting containers, depth is achieved by alternating between Dark Enamel Navy, Surface Navy, and Warm Cream with solid stroke outlines.

## Typography

The typographic hierarchy pairs the bold, unapologetic slab serif strokes of **Bevan** with the rational, mid-century commercial durability of **Libre Franklin**.

### Hierarchy & Treatment
- **Display & Signage Headlines (Bevan):** Used for marquee titles, hero banners, price listings, section signboards, and numbered steps. Always rendered in normal weight with natural slab contrast. When used in headers, uppercase transformation is permitted to mirror classic tin signboards.
- **Body & Operational Text (Libre Franklin):** Carries all descriptive notes, service descriptions, form inputs, time slots, and body copy. Highly legible at small sizes on solid backgrounds.
- **Badges, Tags, and Sub-labels (Libre Franklin 700):** Rendered with wide tracking (`0.06em` to `0.08em`) and predominantly uppercase styling to simulate stamped or stenciled trade markers.

## Layout & Spacing

Layouts follow a structured grid system evocative of partitioned commercial signboards, workshop tool racks, and printed daily ledgers.

### Grid & Breakpoints
- **Mobile (< 768px):** 4-column fluid layout with `1rem` margins and `1rem` gutters. Content stacks into sequential tactile panels with explicit dividing rules.
- **Tablet (768px – 1024px):** 8-column layout with `1.5rem` gutters. Accommodates dual-pane booking structures (e.g., service list adjacent to time-slot board).
- **Desktop (> 1024px):** 12-column fixed-max layout (capped at `1200px`) with `2.5rem` margins and `1.5rem` gutters. Layouts mimic physical signboard arrangements with clear column partitions.

### Spacing Principles
- Density is deliberate: spacing prioritizes rhythm and clear visual bounding boxes over excessive, drifting whitespace.
- Inter-card spacing is strictly uniform (`1rem` to `1.5rem`), reinforced by framed boundaries rather than open gaps.

## Elevation & Depth

This design system completely avoids soft, ambient, or multi-stop blurred shadows. Visual elevation is rendered purely through mechanical, physical cues:

### Tactile Signboard Construction
- **Layer 0 (Base):** Canvas `#14293F`.
- **Layer 1 (Placards & Panels):** Surface Navy (`#21384F`) or Warm Cream (`#EDE6D6`) panels framed by solid `2px` or `3px` contrasting borders (`#EDE6D6` or `#1A1714`).
- **Layer 2 (Interactive Elements & Overlays):** Modal placards, buttons, and flyouts use hard, unblurred directional drop-shadows (*cast shadows*):
  - **Standard Card Cast Shadow:** `3px 3px 0px #1A1714` or `3px 3px 0px rgba(0, 0, 0, 0.45)`.
  - **Interactive Pop Shadow:** `4px 4px 0px #1A1714`. On button press (`:active`), the element shifts `translate(2px, 2px)` with shadow reducing to `1px 1px 0px #1A1714`, providing immediate mechanical feedback.
- **Framed Insets:** Inner signboard panels frequently employ an inset double-border style (a solid `2px` outer line, followed by a `2px` interior gap and a `1px` inner hair-line) to mimic painted tin borders.

## Shapes

Shapes mirror cut sheet metal, heavy card stock, and painted wooden panels.

### Geometric Rules
- Corners feature slight softening (`0.25rem` / `4px`) mimicking the rounded safety stamp of enameled tin signs that prevents sharp sheet-metal edges.
- Over-rounded pills or circular chips are disallowed for primary actions. Badges and chips remain clipped rectangles with subtle `2px` or `4px` corner radii.
- Circular shapes are reserved strictly for barber pole medallions, barber avatars, and vintage quality stamp badges.

## Components

### Buttons
- **Primary Button:** Background in Bold Action Red (`#C0342B`), text in Warm Cream (`#EDE6D6`) in `Bevan` or `Libre Franklin 700`, uppercase, border `2px solid #EDE6D6`, box shadow `3px 3px 0px #1A1714`. Active state depresses downward by 2px with shadow collapsed.
- **Secondary Button:** Background in Surface Navy (`#21384F`), text in Warm Cream (`#EDE6D6`), border `2px solid #EDE6D6`, hard cast shadow `3px 3px 0px #14293F`.
- **Inverse Button (used on Cream placards):** Background in Ink Black (`#1A1714`), text in Warm Cream (`#EDE6D6`), hard shadow `3px 3px 0px #C0342B`.

### Service Cards & Placards
- Enclosed containers with a solid `2px solid #EDE6D6` or `2px solid #21384F` outline.
- Header bands can be inverse-filled: a solid banner carrying the category title in Bevan, separated from service items with a sharp horizontal line.
- Pricing sits aligned to the right, rendered prominently in Bevan (`price-display`), accentuated by an optional subtle Warm Mustard (`#E0A526`) underline or bracket.

### Chips & Badges
- Structured as stamped tin inspection tags: rectangular with `2px` radius, bounded by a `1.5px solid` outline.
- Selected state fills with Mustard Yellow (`#E0A526`) and Ink Black text (`#1A1714`), unselected rests on Surface Navy with Warm Cream text.

### Form Inputs
- Background: Surface Navy (`#21384F`) or Warm Cream (`#EDE6D6`) depending on container context.
- Heavy `2px solid` border. Focus state swaps border color to Bold Action Red (`#C0342B`) with a crisp `2px 2px 0px #C0342B` exterior offset shadow. No fuzzy focus rings.
- Labels sit above in `Libre Franklin 700`, tracked out, uppercase.

### Checkboxes & Radios
- Square (`checkbox`) and diamond or thick octagonal (`radio`) footprints with `2px solid` rims. Checked state fills completely with Bold Action Red (`#C0342B`) with an Ink Black or Warm Cream interior mechanical glyph.

### Barber Availability & Appointment Grid
- Time slots operate as punch-card tickets: framed blocks displaying start times in Bevan. Booked slots receive a diagonal hatch pattern or muted strike-through; open slots respond with physical depression on hover and tap.
---
name: buczakaf
description: Concert & documentary photography portfolio — a near-black gallery where the photographs carry all colour.
colors:
  warm-bone: "#f2ede4"
  pure-white: "#ffffff"
  stage-black: "#0b0b0b"
  stage-black-soft: "#141414"
  photo-bed: "#131313"
  warm-grey: "#9a938a"
  warm-grey-bright: "#cdc5b8"
  hairline: "rgba(255, 255, 255, 0.10)"
  hairline-strong: "rgba(255, 255, 255, 0.22)"
typography:
  display:
    fontFamily: "Anton, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 9vw, 7.2rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Anton, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4.4vw, 3.2rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.01em"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Space Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.74rem"
    fontWeight: 400
    letterSpacing: "0.07em"
rounded:
  none: "0px"
  circle: "50%"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "clamp(1.4rem, 3vw, 2.2rem)"
  hero: "clamp(2rem, 5vw, 3.4rem)"
components:
  button:
    textColor: "{colors.warm-bone}"
    rounded: "{rounded.none}"
    padding: "0.72rem 1.35rem"
    typography: "{typography.body}"
  button-primary:
    backgroundColor: "{colors.warm-bone}"
    textColor: "{colors.stage-black}"
    rounded: "{rounded.none}"
    padding: "0.72rem 1.35rem"
  nav-link:
    textColor: "{colors.warm-grey}"
    typography: "{typography.label}"
  filter-tab:
    textColor: "{colors.warm-grey}"
    typography: "{typography.body}"
    height: "44px"
  contact-card:
    textColor: "{colors.warm-bone}"
    rounded: "{rounded.none}"
    padding: "1.2rem 1.5rem"
  photo-frame:
    backgroundColor: "{colors.photo-bed}"
    rounded: "{rounded.none}"
---

# Design System: buczakaf

## Overview

**Creative North Star: "The Pit Gallery"**

This is a near-black gallery pushed toward the pit. The interface behaves like a well-hung darkroom wall: no chromatic brand colour, no decoration competing with the frames, and hairline structure instead of fills or shadows. The only saturated colour anywhere on the site belongs to the photographs, and the system is built so nothing else can steal it.

The voice is quiet and structural. Surfaces are flat at rest; separation is carried by 1px rules, generous negative space, and a single film-grain texture at 5% opacity — the one tactile surface in the whole system. Type does the personality work: Anton's heavy condensed caps for display, Archivo for reading, and Space Mono for the uppercase metadata that labels sections, events and labels. The result reads as an editorial contact sheet rather than a marketing storefront.

Density is comfortable and deliberately uneven: a full-bleed hero, a curated featured grid, and a longer archive that stays behind an explicit reveal. The mobile behaviour collapses cleanly to a single column and a hamburger menu rather than reflowing the desktop chrome.

**Key Characteristics:**
- Near-black ground (#0b0b0b) with no brand hue; photographs supply all colour.
- Two type families plus a mono label face; condensed uppercase for scale, mono for metadata.
- Hairline borders (1px) and zero corner radius by default — the system is square.
- Flat by default; the only shadow appears under a photo on hover.
- One texture: a fixed film grain at 5% opacity.
- Full-bleed hero, framed content at `min(1240px, calc(100% - 3rem))`.

## Colors

A two-note palette — warm bone on true black — with the photographs as the third and brightest colour.

### Primary
- **Warm Bone** (#f2ede4): The single light value. Body text, display headlines, primary-button fill, and the focus-visible ring (`--accent-strong` resolves to `#ffffff` only on the strongest state). It is warm, not white, so the near-black never reads as pure screen-negative.
- **Pure White** (#ffffff): Reserved for hover/active escalation of the bone accent (`--accent-strong`) and focus outlines. Never a resting surface colour.

### Neutral
- **True Black Stage** (#0b0b0b): The page ground and the colour of the fixed navbar scrim base. Defines the "gallery void".
- **Stage Black Soft** (#141414): Raised content surfaces — about copy blocks, about cards.
- **Photo Bed** (#131313): The backing colour behind every photograph, visible for the instant before an image paints and in the letterbox of any non-matching aspect ratio.
- **Warm Grey** (#9a938a): Secondary text — metadata, labels, muted links, captions, the lightbox counter. Carries hierarchy below warm bone without introducing a hue.
- **Warm Grey Bright** (#cdc5b8): The single step above warm grey, resolved as `--text-dim`. Used only for metadata that sits *on a photograph* — the hero meta line — where warm grey loses too much contrast against the image. Never a substitute for warm grey on a flat surface.

### Named Rules
**The Photograph-Only-Colour Rule.** No interface element ever introduces a hue. Colour enters the page exclusively through photographs; every non-photo pixel is black, bone, white or grey.

**The Hairline Rule.** Boundaries between surfaces are 1px lines at 6–22% white, never filled panels. Increase border opacity, not surface lightness, to raise emphasis.

## Typography

**Display Font:** Anton (with Archivo, system-ui fallback)
**Body Font:** Archivo (with system-ui, -apple-system, Segoe UI fallback)
**Label/Mono Font:** Space Mono (with ui-monospace, SFMono-Regular, Menlo fallback)

**Character:** A loud condensed display face bolted to a neutral grotesque and a typewriter mono. Anton gives the headlines the poster-like scale of a gig flyer; Archivo keeps long-form copy plain and legible; Space Mono makes every piece of metadata (event, date, counter, section index) read as a stamped archive label.

### Hierarchy
- **Display** (Anton, 400, `clamp(2.7rem, 9vw, 7.2rem)`, `line-height 0.9`, uppercase): The hero headline only. Set tight, `max-width 14ch`, and always uppercase.
- **Headline** (Anton, 400, `clamp(1.9rem, 4.4vw, 3.2rem)`, `line-height 0.95`, uppercase): Section titles and page headers (`gallery-header`, `section-title`, `contact-page-title`).
- **Title** (Archivo, 600, 1.05rem): In-page emphasis and the "Wydarzenia…" lead-ins.
- **Body** (Archivo, 400, 0.95–1.02rem, `line-height 1.65–1.8`): Reading copy; long paragraphs hold a ~60ch measure.
- **Label** (Space Mono, 400, 0.72–0.78rem, `letter-spacing 0.06–0.12em`, uppercase): Metadata, nav links, filter tabs, captions, counters, footer.

### Named Rules
**The Two-Register Rule.** Anton is for scale, never for reading; Space Mono is for labels, never for reading. Anything meant to be read at length is Archivo.

**The Uppercase-Meta Rule.** Supporting metadata is uppercase and letter-spaced (≥0.06em) in Space Mono. If it is not uppercase mono, it is not metadata.

## Layout

Content sits inside a single frame: `--frame: min(1240px, calc(100% - 3rem))`, tightened to `calc(100% - 2.25rem)` below 768px. The navbar is fixed at 74px (68px on mobile) with a 16px backdrop blur; pages without a full-bleed hero offset their first section by `74px + 3rem`.

- **Hero:** full-bleed `100svh`, image `object-fit: cover` at `object-position: 50% 42%` (desktop) / `54% 40%` (mobile), content bottom-aligned inside the frame over an eight-stop scrim that eases the photograph into `--bg` at 100%.
- **Featured / archive grids:** a flex row of equal-width columns with a uniform 10px gutter, switching to a single stacked column below 640px.
- **Artist sub-nav:** a wrapped row of mono links under 1025px; at ≥1025px it becomes a 150px sticky left rail (`top: 90px`) with a right hairline, and the gallery takes the remaining width — a deliberate asymmetric two-column read at desktop.
- **Rhythm:** section spacing uses `clamp()` steps (`--section` ≈ 1.4–2.2rem) and event blocks are separated by 3.5rem. Generous bottom padding (4rem) closes each page above the centered footer.

## Elevation & Depth

The system is **flat by default**. Depth is conveyed by tonal layering — `#0b0b0b` ground, `#141414` raised surfaces, `#131313` photo bed — and by blur rather than shadow: the fixed navbar (`blur(16px)`) and mobile menu (`blur(20px)`) sit on translucent black scrims, and the back-to-top / lightbox controls use an `rgba(20,20,20,0.90)` fill with `blur(6px)`. No surface carries a resting shadow.

### Shadow Vocabulary
- **Photo lift** (`box-shadow: 0 22px 48px rgba(0,0,0,0.42)`): The single shadow in the system. Appears only on `.photo:hover` / `:focus-within`, paired with a 1.025× image scale and a border shift to `--border-strong`.

### Named Rules
**The Flat-By-Default Rule.** Nothing casts a shadow at rest. The one shadow in the system is a *response to attention* on a photograph — never a resting decoration.

## Shapes

Square is the default: the project sets **no border radius** on any content surface, button, card or frame. Borders are 1px hairlines (`rgba(255,255,255,0.08–0.22)`); the strongest available border (`--border-strong` 0.22, `--border-hover` 0.36) is used to signal state, not shape.

The only rounded forms are circular controls where the function demands it: the hamburger toggle and back-to-top button (both `999px`), and the lightbox prev/next buttons (`50%`). All interactive targets hold a 44px minimum in at least one axis. The film-grain overlay (SVG fractal noise, `opacity: 0.05`, fixed, `z-index: -1`) is the sole recurring texture.

## Components

### Buttons
- **Shape:** square (0 radius), 1px border, `padding: 0.72rem 1.35rem`, 0.85rem Archivo 600.
- **Ghost (default):** transparent fill, `--border-strong` border, warm-bone text. Hover raises border to `--border-hover` and fills `--border-soft`.
- **Primary:** `--accent` (warm bone) fill, `--accent-ink` (stage black) text. Hover escalates the fill to pure white.
- **Focus:** every interactive element gets `outline: 2px solid #fff; outline-offset: 3px` on `:focus-visible`.
- **Motion:** 0.2s ease on background / border / color only.

### Filter Tabs
- **Style:** bare text buttons (`appearance: none`, no border), warm-grey at rest → warm bone on hover/active.
- **State:** the active tab reveals a 1px white underline drawn with a `scaleX(0 → 1)` transform from the left (0.25s), aligned under the text.
- **Group:** `role="group"` with `aria-pressed`, 44px minimum height, wrapped with a 1.5rem gap.

### Cards / Containers
- **Corner Style:** square (0 radius).
- **Background:** transparent at rest; `--fill-hover-soft` on hover for contact cards.
- **Border:** 1px hairline (`--border-soft` / `--border`), escalating to `--border-strong` on hover.
- **Shadow Strategy:** none — see Elevation & Depth.
- **Internal Padding:** 1.2rem–1.5rem for contact/about cards; 2rem for the about shell.

### Photo Frame
- **Style:** `--bg-photo` bed, 1px `--border-soft`, `cursor: zoom-in`, square corners.
- **Hover / Focus:** border → `--border-strong`, photo-lift shadow, image `scale(1.025)` on a 0.6s `cubic-bezier(0.22,0.61,0.36,1)`.
- **Focus:** `:focus-visible` gets the white ring; `:focus-within` mirrors hover so keyboard navigation reads identically.

### Navigation
- **Top bar:** fixed, 74px, 1px bottom hairline, `rgba(11,11,11,0.42)` scrim with 16px blur. Left cluster of uppercase mono links; the lowercase **buczakaf** wordmark is absolutely centered; right cluster holds the PL/EN switch and Instagram/Facebook icon links (21px stroke icons, `opacity 0.85 → 1` on hover).
- **Mobile (<768px):** grid `1fr auto 1fr`; nav links and inline language switch hide; a 44px circular hamburger toggles a blurred full-width panel that slides down from 84px. The panel re-includes the language switch and social icons.
- **Active state:** the current page is indicated by color escalation only (warm-grey → warm bone); there is no underline or marker.

### Lightbox
- **Surface:** `display: flex` overlay at `rgba(0,0,0,0.94)`, no radius; image capped at `92vw × 90vh`.
- **Controls:** mono counter top-left, mono status pill bottom-center (fades in while loading), 2rem close button top-right, circular prev/next at the vertical midpoint. All ≥44px.
- **Behavior:** keyboard (Esc / arrows), swipe, click-outside, focus trap and focus restore; motion flattens under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** keep the interface monochrome — black, warm bone, white and grey only; let photographs be the sole source of colour.
- **Do** separate surfaces with 1px hairlines and tonal steps (`#0b0b0b` → `#141414` → `#131313`) rather than fills or resting shadows.
- **Do** use Anton uppercase for display/headline scale and Space Mono uppercase for all metadata, with Archivo for anything read at length.
- **Do** hold a 44px minimum target on every control and a `:focus-visible` white outline at `offset: 3px`.
- **Do** mirror hover treatment on `:focus-within` so keyboard users get the same feedback as pointer users.

### Don't:
- **Don't** introduce a chromatic accent colour, tinted surface, or gradient wash — the only gradient in the system is the photographic hero scrim.
- **Don't** round corners on content surfaces, cards, buttons, or frames; radius is reserved for circular controls.
- **Don't** add a resting shadow to any surface; the photo-lift shadow is the only shadow and appears only on hover/focus.
- **Don't** use Anton or Space Mono for body-length reading.
- **Don't** invent labels, counters, testimonials, or captions that are not backed by real events and photographs (Product Principle #3).

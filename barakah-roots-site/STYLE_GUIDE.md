# Barakah Roots Style Guide

This document outlines the visual style guide for the Barakah Roots website.

## Colors

| Color Name      | Hex        | Usage                               |
| --------------- | ---------- | ----------------------------------- |
| Cream           | `#FFF7EC`  | Main background                     |
| Light Green     | `#9FD6A5`  | Primary buttons, accents            |
| Deep Olive      | `#3F7D4A`  | Primary dark, CTA hover             |
| Warm Sand       | `#F2E6D6`  | Muted surfaces, cards               |
| Barakah Text    | `#203122`  | Main text color                     |

## Typography

- **Headings:** Inter (or Poppins)
- **Accent / Display:** Merriweather
- **Body / UI:** Inter

### Font Weights

- **Normal:** 400
- **Medium:** 500
- **Semi-bold:** 600
- **Bold:** 700

## Spacing

The spacing is based on a 4px grid. Use multiples of 4 for margins, paddings, and other spacing.

- `p-1` = 4px
- `p-2` = 8px
- `p-4` = 16px
- `p-8` = 32px

## Motion & Animations

- **Durations:** 300–500ms for entry/exit, 180–250ms for hovers.
- **Easing:** `cubic-bezier(.22,.9,.33,1)` or use "easeOut".
- **Reduced Motion:** Respect `prefers-reduced-motion` by disabling or reducing animations for users who have this preference enabled.

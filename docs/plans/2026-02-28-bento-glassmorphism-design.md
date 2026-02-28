# Services Section: Bento Grid with Glassmorphism

## Summary

Redesign the 6-service cards section from a uniform 3x2 grid into an asymmetric bento grid layout with subtle glassmorphism effects.

## Layout

```
Desktop (3 columns):
┌──────────────┬────────┐
│ Allmennmedisin│  Lab   │
│  (2 cols)    │(1 col) │
├───────┬──────┼────────┤
│Kirurgi│Helse │Vaksine │
│(1col) │(1col)│ (1col) │
├───────┴──────┴────────┤
│  Spesialisthenvisning │
│      (3 cols)         │
└───────────────────────┘

Tablet (2 cols): reflow to 2-column grid, featured cards span 2
Mobile (1 col): all cards stack single column
```

## Glassmorphism

- Section background: subtle gradient wash + two decorative blobs (navy, copper) at low opacity
- Cards: `background: rgba(255,255,255,0.65)`, `backdrop-filter: blur(12px)`, `border: 1px solid rgba(255,255,255,0.5)`, `border-radius: 20px`, `box-shadow: 0 8px 32px rgba(12,35,64,0.06)`
- Hover: opacity to 0.85, deeper shadow, translateY(-3px), copper bottom bar

## Card Enhancements

- Featured card (Allmennmedisin): 56px icon, larger heading
- Wide card (Spesialisthenvisning): horizontal layout (icon + text side by side)
- Standard cards: 52px icons, vertical layout

## Files Changed

- `index.html` (CSS: `.services-grid`, `.service-card`, responsive breakpoints; HTML: card classes and grid structure)

## Constraints

- Preserve existing design tokens (navy/forest/copper, Cormorant Garamond + Outfit)
- Maintain WCAG AA text contrast (4.5:1 minimum)
- Support `prefers-reduced-motion`
- `-webkit-backdrop-filter` for Safari support

# Bento Grid Glassmorphism Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the 6-service cards from a uniform 3x2 grid into an asymmetric bento grid with subtle glassmorphism.

**Architecture:** Single-file edit (index.html). Replace existing `.services-grid` and `.service-card` CSS, add glassmorphism styles and decorative background, update HTML card structure with bento-specific classes. Responsive breakpoints updated for bento reflow.

**Tech Stack:** HTML, CSS (inline `<style>` in index.html), CSS Grid, backdrop-filter

---

### Task 1: Update section background for glassmorphism

**Files:**
- Modify: `index.html:473-475` (`.section--alt` CSS)

**Step 1: Add glassmorphism background styles**

Replace the `.section--alt` block (lines 473-475) and add decorative blob pseudo-elements. Insert new CSS right after the existing `.section--alt` rule:

```css
.section--alt {
    background: var(--white);
    position: relative;
    overflow: hidden;
}

/* Glassmorphism background blobs for services section */
#tjenester {
    background: linear-gradient(135deg, rgba(12,35,64,0.03), rgba(27,94,59,0.03));
}

#tjenester::before,
#tjenester::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
}

#tjenester::before {
    width: 400px;
    height: 400px;
    background: rgba(12, 35, 64, 0.06);
    top: -100px;
    left: -100px;
}

#tjenester::after {
    width: 350px;
    height: 350px;
    background: rgba(198, 125, 74, 0.06);
    bottom: -80px;
    right: -80px;
}

#tjenester > .container {
    position: relative;
    z-index: 1;
}
```

**Step 2: Verify visually**

Open `index.html` in browser, scroll to "Våre tjenester" section. Should see a subtle warm gradient background with faintly visible blurred blobs in the corners.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add glassmorphism background to services section"
```

---

### Task 2: Restyle service cards with glassmorphism

**Files:**
- Modify: `index.html:619-690` (`.services-grid`, `.service-card` and related CSS)

**Step 1: Replace the grid and card CSS**

Replace lines 619-690 with:

```css
.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    gap: 20px;
}

.service-card {
    padding: 36px 28px;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px rgba(12, 35, 64, 0.06);
    transition: all var(--transition);
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.service-card::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--copper);
    transform: scaleX(0);
    transition: transform var(--transition);
}

.service-card:hover {
    background: rgba(255, 255, 255, 0.85);
    border-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 12px 40px rgba(12, 35, 64, 0.1);
    transform: translateY(-3px);
}

.service-card:hover::after {
    transform: scaleX(1);
}

/* Bento card variants */
.service-card--featured {
    grid-column: span 2;
    padding: 44px 36px;
}

.service-card--wide {
    grid-column: span 3;
    display: flex;
    align-items: center;
    gap: 28px;
    padding: 36px 40px;
}

.service-card--wide .service-content {
    flex: 1;
}

.service-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 14px;
    margin-bottom: 20px;
    color: var(--white);
    flex-shrink: 0;
}

.service-card--featured .service-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
}

.service-card--wide .service-icon {
    margin-bottom: 0;
}

.service-icon--green { background: var(--forest); }
.service-icon--navy { background: var(--navy); }
.service-icon--copper { background: var(--copper); }

.service-icon svg {
    width: 24px;
    height: 24px;
}

.service-card--featured .service-icon svg {
    width: 26px;
    height: 26px;
}

.service-card h3 {
    font-family: var(--font-heading);
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--navy);
    margin-bottom: 8px;
}

.service-card--featured h3 {
    font-size: 1.5rem;
}

.service-card p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.65;
}
```

**Step 2: Verify visually**

Cards should now show frosted glass effect. The grid still works because we haven't changed HTML yet (featured/wide classes aren't applied). Cards should look like glass panels.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: glassmorphism card styles and bento variants"
```

---

### Task 3: Update HTML structure for bento layout

**Files:**
- Modify: `index.html:1316-1385` (services grid HTML)

**Step 1: Add bento classes to cards**

Replace the entire `<div class="services-grid">...</div>` block (lines 1316-1385) with:

```html
<div class="services-grid">
    <!-- Allmennmedisin — Featured (2 cols) -->
    <div class="service-card service-card--featured reveal reveal-delay-1">
        <div class="service-icon service-icon--navy">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
        </div>
        <h3>Allmennmedisin</h3>
        <p>Erfarne allmennleger med bred kompetanse innen generell medisin og forebyggende helsearbeid.</p>
    </div>

    <!-- Lab -->
    <div class="service-card reveal reveal-delay-2">
        <div class="service-icon service-icon--green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 3v7.5L4.2 18.4a1.5 1.5 0 001.3 2.1h13a1.5 1.5 0 001.3-2.1L15 10.5V3"/>
                <path d="M8 3h8M7 15h10"/>
            </svg>
        </div>
        <h3>Laboratorietjenester</h3>
        <p>Moderne laboratorium for blodprøver, urinprøver og andre diagnostiske undersøkelser.</p>
    </div>

    <!-- Småkirurgi -->
    <div class="service-card reveal reveal-delay-3">
        <div class="service-icon service-icon--copper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
            </svg>
        </div>
        <h3>Småkirurgiske inngrep</h3>
        <p>Vi utfører mindre kirurgiske prosedyrer som fjerning av føflekker, cyster og vorter.</p>
    </div>

    <!-- Helsesjekk -->
    <div class="service-card reveal reveal-delay-4">
        <div class="service-icon service-icon--green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
        </div>
        <h3>Helsesjekk</h3>
        <p>Grundig helsekontroll tilpasset din alder og risikoprofil for tidlig avdekking av sykdom.</p>
    </div>

    <!-- Vaksinasjon -->
    <div class="service-card reveal reveal-delay-5">
        <div class="service-icon service-icon--navy">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 12l2 2 4-4"/>
                <path d="M12 2a10 10 0 110 20 10 10 0 010-20z"/>
            </svg>
        </div>
        <h3>Vaksinasjon</h3>
        <p>Komplett vaksinasjonstilbud inkludert reisevaksiner, influensa og barnevaksinasjon.</p>
    </div>

    <!-- Spesialisthenvisning — Wide (3 cols) -->
    <div class="service-card service-card--wide reveal reveal-delay-6">
        <div class="service-icon service-icon--copper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
        </div>
        <div class="service-content">
            <h3>Spesialisthenvisning</h3>
            <p>Rask og effektiv henvisning til relevante spesialister når det er behov for videre utredning.</p>
        </div>
    </div>
</div>
```

**Step 2: Verify visually**

The bento grid should now show: Allmennmedisin spanning 2 columns (top-left), Lab standard (top-right), 3 equal cards in middle row, Spesialisthenvisning spanning full width at bottom with horizontal layout.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: update HTML structure for bento grid layout"
```

---

### Task 4: Update responsive breakpoints

**Files:**
- Modify: `index.html:1050-1053` (1024px breakpoint)
- Modify: `index.html:1127-1129` (768px breakpoint)

**Step 1: Update tablet breakpoint**

Replace the `.services-grid` rule inside `@media (max-width: 1024px)` (lines 1051-1053) with:

```css
.services-grid {
    grid-template-columns: repeat(2, 1fr);
}
.service-card--featured {
    grid-column: span 2;
}
.service-card--wide {
    grid-column: span 2;
}
```

**Step 2: Update mobile breakpoint**

Replace the `.services-grid` rule inside `@media (max-width: 768px)` (lines 1127-1129) with:

```css
.services-grid {
    grid-template-columns: 1fr;
}
.service-card--featured,
.service-card--wide {
    grid-column: span 1;
}
.service-card--wide {
    flex-direction: column;
    text-align: center;
}
.service-card--wide .service-icon {
    margin-bottom: 20px;
}
```

**Step 3: Verify at all breakpoints**

- Desktop (1440px+): 3-column bento
- Tablet (768-1024px): 2-column, featured and wide span 2
- Mobile (<768px): single column stack, wide card reverts to vertical

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: responsive breakpoints for bento grid"
```

---

### Task 5: Add reduced-motion support

**Files:**
- Modify: `index.html` (add near existing `@media (prefers-reduced-motion)` or after the responsive section)

**Step 1: Check if prefers-reduced-motion already exists**

Search for `prefers-reduced-motion` in the file. If it exists, add to it. If not, add a new block after the last responsive media query.

**Step 2: Add reduced-motion styles**

```css
@media (prefers-reduced-motion: reduce) {
    .service-card {
        transition: none;
    }
    .service-card::after {
        transition: none;
    }
    .service-card:hover {
        transform: none;
    }
    #tjenester::before,
    #tjenester::after {
        display: none;
    }
}
```

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add reduced-motion support for services section"
```

---

### Task 6: Final visual verification

**Step 1: Open in browser and verify**

- Glass cards have visible frosted effect against the gradient background
- Allmennmedisin spans 2 columns with larger icon
- Spesialisthenvisning spans 3 columns with horizontal layout
- Hover effects work (glass brightens, lifts, copper bar appears)
- Text is clearly readable (navy on glass)
- Resize to tablet and mobile -- layout reflows correctly
- No horizontal scrolling at any size

**Step 2: Final commit if any fixes needed**

# Informasjonsside Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a new `informasjon.html` page with patient information (vaccines, consultation types, useful links, blood tests) using the existing design system but with a cleaner, simpler layout.

**Architecture:** Standalone HTML page sharing design tokens, fonts, and nav/footer with index.html. Four category card sections with responsive grids. No glassmorphism — clean white cards with subtle shadows.

**Tech Stack:** HTML, CSS (inline `<style>`), vanilla JS (nav scroll + mobile menu only)

---

### Task 1: Create informasjon.html with base structure

**Files:**
- Create: `informasjon.html`

**Step 1: Create the file with head, design tokens, reset, nav CSS, and page-specific CSS**

Create `informasjon.html` with:
- Same `<head>` as index.html (charset, viewport, title "Informasjon — Brobekk Legekontor", favicon, font imports)
- Same design tokens (`:root` block copied from index.html lines 16-45)
- Same reset & base styles (lines 50-78)
- Same skip-link, container, nav, and nav-toggle styles (lines 80-243)
- Same footer styles (search index.html for `.footer` through end of footer styles)
- New page-specific CSS for:

```css
/* ======== PAGE HEADER ======== */
.page-header {
    background:
        radial-gradient(ellipse at 20% 80%, rgba(27, 94, 59, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(198, 125, 74, 0.08) 0%, transparent 50%),
        var(--navy);
    padding: 140px 0 80px;
    text-align: center;
    color: var(--white);
}

.page-header h1 {
    font-family: var(--font-heading);
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 600;
    margin-bottom: 12px;
}

.page-header p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
    max-width: 500px;
    margin: 0 auto;
}

/* ======== INFO SECTIONS ======== */
.info-section {
    padding: 64px 0;
}

.info-section:first-of-type {
    padding-top: 80px;
}

.info-section + .info-section {
    border-top: 1px solid var(--border);
}

.info-section-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
}

.info-section-icon {
    width: 48px;
    height: 48px;
    background: var(--copper-glow);
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.info-section-icon svg {
    width: 24px;
    height: 24px;
    color: var(--copper);
}

.info-section-header h2 {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--navy);
}

.info-section-intro {
    color: var(--text-secondary);
    margin-bottom: 24px;
    line-height: 1.7;
}

/* ======== LINK CARDS ======== */
.link-card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

@media (min-width: 640px) {
    .link-card-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.link-card {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px 24px;
    background: var(--white);
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border);
    transition: box-shadow var(--transition), transform var(--transition);
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}

.link-card:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
}

.link-card-icon {
    width: 40px;
    height: 40px;
    background: var(--copper-glow);
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.link-card-icon svg {
    width: 20px;
    height: 20px;
    color: var(--copper);
}

.link-card-content h3 {
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--navy);
    margin-bottom: 4px;
}

.link-card-content p {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.5;
}

.link-card .external-icon {
    width: 16px;
    height: 16px;
    color: var(--text-light);
    margin-left: auto;
    flex-shrink: 0;
    align-self: center;
}

/* ======== CONSULTATION CARDS ======== */
.consult-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 768px) {
    .consult-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.consult-card {
    background: var(--white);
    border-radius: var(--radius);
    padding: 28px 24px;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border);
}

.consult-card h3 {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--navy);
    margin-bottom: 12px;
}

.consult-card ul {
    list-style: none;
    padding: 0;
}

.consult-card li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
}

.consult-card li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--copper);
}

/* ======== BLOOD TEST CTA ======== */
.blood-test-card {
    background: var(--white);
    border-radius: var(--radius);
    padding: 32px;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border);
    max-width: 600px;
}

.blood-test-card p {
    color: var(--text-secondary);
    margin-bottom: 20px;
    line-height: 1.7;
}

.btn-info {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    background: var(--copper);
    color: var(--white);
    border-radius: var(--radius-sm);
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    transition: background var(--transition);
    cursor: pointer;
}

.btn-info:hover {
    background: var(--copper-dark);
}

.btn-info svg {
    width: 16px;
    height: 16px;
}

/* ======== SUBGROUP LABEL ======== */
.subgroup-label {
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-light);
    margin-top: 32px;
    margin-bottom: 16px;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 768px) {
    .page-header {
        padding: 120px 0 60px;
    }

    .info-section {
        padding: 48px 0;
    }

    .info-section-header h2 {
        font-size: 1.5rem;
    }

    .consult-grid {
        grid-template-columns: 1fr;
    }
}
```

**Step 2: Verify the file renders**

Open `informasjon.html` in the browser and verify:
- Nav renders at top (will be scrolled style since no hero)
- Background is cream
- No console errors

**Step 3: Commit**

```bash
git add informasjon.html
git commit -m "feat: create informasjon.html with base structure and styles"
```

---

### Task 2: Add page header and navigation HTML

**Files:**
- Modify: `informasjon.html`

**Step 1: Add the body HTML**

After `</style></head>`, add:

```html
<body>
    <a href="#main" class="skip-link">Hopp til innhold</a>

    <!-- ======== NAVIGATION ======== -->
    <nav class="nav nav--scrolled" id="nav" aria-label="Hovednavigasjon">
        <div class="container">
            <div class="nav-inner">
                <a href="index.html" class="nav-logo">
                    <img src="logo.png" alt="Brobekk Legekontor logo" class="nav-logo-mark">
                    <span>Brobekk Legekontor</span>
                </a>
                <div class="nav-links" id="navLinks">
                    <a href="index.html#hjem" class="nav-link">Hjem</a>
                    <a href="index.html#helsenorge" class="nav-link">Helsenorge</a>
                    <a href="index.html#tjenester" class="nav-link">Tjenester</a>
                    <a href="index.html#kontakt" class="nav-link">Kontakt</a>
                    <a href="informasjon.html" class="nav-link active">Informasjon</a>
                </div>
                <div class="nav-right">
                    <a href="tel:22123456" class="nav-phone" aria-label="Ring oss: 22 12 34 56">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                        <span>22 12 34 56</span>
                    </a>
                    <button class="nav-toggle" id="navToggle" aria-label="Meny" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- ======== PAGE HEADER ======== -->
    <header class="page-header">
        <div class="container">
            <h1>Informasjon</h1>
            <p>Nyttig informasjon for deg som pasient — vaksiner, konsultasjoner, lenker og mer.</p>
        </div>
    </header>
```

Note: Nav uses `nav--scrolled` class directly (no transparent hero to scroll from). All nav links point back to `index.html#section`.

**Step 2: Verify page header renders**

Open in browser. Verify:
- Navy header with white text
- Nav is visible with "Informasjon" marked active
- Logo links back to index.html

**Step 3: Commit**

```bash
git add informasjon.html
git commit -m "feat: add page header and navigation to informasjon.html"
```

---

### Task 3: Add Vaksiner section

**Files:**
- Modify: `informasjon.html`

**Step 1: Add the vaksiner section after the page header**

```html
    <main id="main">

        <!-- ======== VAKSINER ======== -->
        <section class="info-section">
            <div class="container">
                <div class="info-section-header">
                    <div class="info-section-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h2>Vaksiner</h2>
                </div>
                <p class="info-section-intro">Informasjon om vaksinasjon, inkludert sesongbaserte vaksiner, reisevaksiner og oversikt over dine registrerte vaksiner.</p>

                <div class="link-card-grid">
                    <a href="https://www.fhi.no/va/influensavaksine/" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>Influensavaksine</h3>
                            <p>Informasjon om årets influensavaksine fra Folkehelseinstituttet.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>

                    <a href="https://helsenorge.no/vaksiner/mine-vaksiner" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>Mine vaksiner</h3>
                            <p>Se oversikt over dine registrerte vaksinasjoner på Helsenorge.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>

                    <a href="https://www.fhi.no/sv/vaksine/reisevaksiner/" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>Reisevaksiner</h3>
                            <p>Oversikt over anbefalte vaksiner for ulike reisemål fra FHI.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>

                    <a href="https://www.helsenorge.no/vaksinasjon/vaksine-mot-smittsom-hjernehinnebetennelse/" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>Meningokokkvaksine for ungdom</h3>
                            <p>Vaksine mot smittsom hjernehinnebetennelse for ungdom 16–19 år.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                </div>
            </div>
        </section>
```

**Step 2: Verify section renders**

Open in browser. Verify:
- Section header with shield icon and "Vaksiner" heading
- 4 link cards in 2-column grid on desktop, 1-column on mobile
- Cards have hover lift effect
- External links open in new tab

**Step 3: Commit**

```bash
git add informasjon.html
git commit -m "feat: add vaksiner section with link cards"
```

---

### Task 4: Add Typer Konsultasjon section

**Files:**
- Modify: `informasjon.html`

**Step 1: Add the consultation section after vaksiner**

```html
        <!-- ======== TYPER KONSULTASJON ======== -->
        <section class="info-section">
            <div class="container">
                <div class="info-section-header">
                    <div class="info-section-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    </div>
                    <h2>Typer konsultasjon</h2>
                </div>
                <p class="info-section-intro">Vi tilbyr flere måter å kontakte legen din på. Velg den konsultasjonstypen som passer best for ditt behov.</p>

                <div class="consult-grid">
                    <div class="consult-card">
                        <h3>Fysisk oppmøte</h3>
                        <ul>
                            <li>Varighet ca. 15–20 minutter</li>
                            <li>Dekker 1–2 problemstillinger per time</li>
                            <li>Dobbelttime kan bestilles for utvidet tid</li>
                            <li>Småkirurgi krever dobbel time</li>
                        </ul>
                    </div>

                    <div class="consult-card">
                        <h3>E-konsultasjon</h3>
                        <ul>
                            <li>Skriftlig henvendelse via Helsenorge</li>
                            <li>Video- eller telefonbasert oppfølging</li>
                            <li>Betalingsoppfordring sendes via SMS etter samtale</li>
                        </ul>
                    </div>

                    <div class="consult-card">
                        <h3>Video- og telefon&shy;konsultasjon</h3>
                        <ul>
                            <li>Begrenset til maks 8 minutter</li>
                            <li>Kveldstakst påløper etter kl. 16:00</li>
                            <li>Sikre og konfidensielle samtaler</li>
                            <li>Betaling via SMS fra ConvenePay</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
```

**Step 2: Verify section renders**

Open in browser. Verify:
- Calendar icon with "Typer konsultasjon" heading
- 3 cards in a row on desktop
- Stacks to 1 column on mobile
- Copper bullet points on each list item

**Step 3: Commit**

```bash
git add informasjon.html
git commit -m "feat: add consultation types section"
```

---

### Task 5: Add Nyttige Lenker section

**Files:**
- Modify: `informasjon.html`

**Step 1: Add the useful links section**

```html
        <!-- ======== NYTTIGE LENKER ======== -->
        <section class="info-section">
            <div class="container">
                <div class="info-section-header">
                    <div class="info-section-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                    </div>
                    <h2>Nyttige lenker</h2>
                </div>
                <p class="info-section-intro">Viktige ressurser og nettsteder for pasientinformasjon, rettigheter og helsetjenester.</p>

                <div class="link-card-grid">
                    <a href="https://helsenorge.no/behandlere/bytte-av-fastlege" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>Bytte fastlege</h3>
                            <p>Informasjon om hvordan du bytter fastlege via Helsenorge.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>

                    <a href="https://www.helsenorge.no/pasientreiser" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>Pasientreiser</h3>
                            <p>Søk om dekning av reiseutgifter til og fra behandling.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>

                    <a href="https://www.nav.no/" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>NAV</h3>
                            <p>Arbeids- og velferdsetaten. Tlf: 55 55 33 33.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>

                    <a href="https://www.helfo.no/" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>Helfo</h3>
                            <p>Helseøkonomiforvaltningen — frikort, refusjoner og pasientrettigheter.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>

                    <a href="https://www.helsedirektoratet.no/" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>Helsedirektoratet</h3>
                            <p>Faglig rådgivning, retningslinjer og regelverk for helsetjenester.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>

                    <a href="https://www.fhi.no/" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>Folkehelseinstituttet (FHI)</h3>
                            <p>Smittevern, folkehelse, vaksinasjon og helsestatistikk.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                </div>

                <!-- Organisasjoner -->
                <h3 class="subgroup-label">Pasientorganisasjoner</h3>

                <div class="link-card-grid">
                    <a href="https://www.diabetes.no" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>Diabetesforbundet</h3>
                            <p>Informasjon og støtte for personer med diabetes.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>

                    <a href="https://www.naaf.no" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>Norges Astma- og Allergiforbund</h3>
                            <p>Ressurser for astma, allergi og overfølsomhet.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>

                    <a href="https://www.lhl.no" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>LHL — Hjerte- og lungesyke</h3>
                            <p>Landsforeningen for hjerte- og lungesyke.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>

                    <a href="https://www.helsebiblioteket.no/" target="_blank" rel="noopener noreferrer" class="link-card">
                        <div class="link-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                        </div>
                        <div class="link-card-content">
                            <h3>Helsebiblioteket</h3>
                            <p>Kvalitetssikret pasientinformasjon og medisinske oppslagsverk.</p>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                </div>
            </div>
        </section>
```

**Step 2: Verify section renders**

Verify:
- "Nyttige lenker" heading with book icon
- 6 institution cards in 2-column grid
- "Pasientorganisasjoner" subgroup label
- 4 organization cards below
- All cards hover correctly

**Step 3: Commit**

```bash
git add informasjon.html
git commit -m "feat: add useful links section with institution and organization cards"
```

---

### Task 6: Add Dine Blodprøver section and close main

**Files:**
- Modify: `informasjon.html`

**Step 1: Add blood test section**

```html
        <!-- ======== DINE BLODPRØVER ======== -->
        <section class="info-section">
            <div class="container">
                <div class="info-section-header">
                    <div class="info-section-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    </div>
                    <h2>Dine blodprøver</h2>
                </div>
                <p class="info-section-intro">Få tilgang til dine blodprøveresultater gjennom Fürst laboratorium sin pasientportal.</p>

                <div class="blood-test-card">
                    <p>Fürst Medisinsk Laboratorium tilbyr en nettbasert portal der du kan se resultatene av blodprøver og andre laboratorieanalyser. Logg inn med BankID for sikker tilgang til dine prøvesvar.</p>
                    <a href="https://www.furstpasient.no/" target="_blank" rel="noopener noreferrer" class="btn-info">
                        Gå til Fürst pasientportal
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                </div>
            </div>
        </section>

    </main>
```

**Step 2: Verify section renders**

Verify:
- "Dine blodprøver" heading with document icon
- White card with description text
- Copper CTA button with external link icon
- Button hover darkens to copper-dark

**Step 3: Commit**

```bash
git add informasjon.html
git commit -m "feat: add blood test section with CTA to Fürst portal"
```

---

### Task 7: Add footer and scripts

**Files:**
- Modify: `informasjon.html`

**Step 1: Add footer (identical to index.html but with updated links)**

```html
    <!-- ======== FOOTER ======== -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <div class="footer-brand-name">
                        <img src="logo.png" alt="Brobekk Legekontor logo" class="footer-brand-mark">
                        Brobekk Legekontor
                    </div>
                    <p>Din fastlege i Oslo. Vi tilbyr helsetjenester av høyeste kvalitet i trygge og moderne omgivelser.</p>
                </div>
                <div class="footer-col">
                    <h4>Hurtiglenker</h4>
                    <a href="index.html#hjem">Hjem</a>
                    <a href="index.html#helsenorge">Helsenorge</a>
                    <a href="index.html#tjenester">Tjenester</a>
                    <a href="index.html#kontakt">Kontakt</a>
                    <a href="informasjon.html">Informasjon</a>
                </div>
                <div class="footer-col">
                    <h4>Kontakt</h4>
                    <p>
                        Brobekkveien 42<br>
                        0598 Oslo<br><br>
                        Tlf: <a href="tel:22123456">22 12 34 56</a><br>
                        <a href="mailto:post@brobekklegekontor.no">post@brobekklegekontor.no</a>
                    </p>
                </div>
            </div>
            <div class="footer-bottom">
                <span>&copy; 2026 Brobekk Legekontor. Alle rettigheter reservert.</span>
                <a href="https://www.helsenorge.no" target="_blank" rel="noopener" class="footer-helsenorge">
                    Helsenorge.no &rarr;
                </a>
            </div>
        </div>
    </footer>
```

**Step 2: Add minimal script for mobile menu toggle**

```html
    <script>
        // ---- Mobile menu toggle ----
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');

        navToggle.addEventListener('click', () => {
            const isOpen = navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close mobile menu on link click
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    </script>
</body>
</html>
```

Note: No nav scroll effect needed (nav stays in scrolled state). No IntersectionObserver or scroll reveal needed.

**Step 3: Verify footer and mobile menu**

Verify:
- Footer renders with all links (including Informasjon)
- Mobile hamburger menu works
- All footer links point correctly to index.html#sections

**Step 4: Commit**

```bash
git add informasjon.html
git commit -m "feat: add footer and mobile menu script to informasjon.html"
```

---

### Task 8: Update index.html navigation and footer

**Files:**
- Modify: `index.html:1509-1513` (nav links)
- Modify: `index.html:1849-1854` (footer links)

**Step 1: Add Informasjon link to navigation**

In `index.html` line 1513, after the Kontakt nav link, add:

```html
                    <a href="informasjon.html" class="nav-link">Informasjon</a>
```

**Step 2: Add Informasjon link to footer**

In `index.html` line 1854, after the Kontakt footer link, add:

```html
                    <a href="informasjon.html">Informasjon</a>
```

**Step 3: Verify navigation works**

Open index.html in browser. Verify:
- "Informasjon" appears in nav bar
- Clicking it navigates to informasjon.html
- Mobile menu includes the new link

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add Informasjon link to navigation and footer"
```

---

### Task 9: Final cross-page verification

**Step 1: Test complete flow**

1. Open `index.html` → Click "Informasjon" in nav → Should go to `informasjon.html`
2. On `informasjon.html` → Click "Hjem" → Should go to `index.html#hjem`
3. Resize to mobile → Hamburger menu should work on both pages
4. All external links should open in new tabs
5. Check all 4 sections render correctly
6. Verify no console errors on either page

**Step 2: Test responsive at 375px, 768px, 1024px, 1440px**

Verify:
- 375px: Everything stacks, readable text, no horizontal scroll
- 768px: Link cards 2-col, consultation cards still 1-col
- 1024px+: Consultation cards 3-col, link cards 2-col

**Step 3: Commit any fixes if needed**

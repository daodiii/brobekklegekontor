# Kontakt Oss Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a dedicated kontakt.html page with contact info, Google Maps embed, directions to the clinic inside Linderud Senter, and a contact form — then remove the contact section from index.html.

**Architecture:** New standalone HTML page following the same inline-CSS pattern as informasjon.html. Reuses existing design tokens, nav, footer structure. Three-card layout for contact info, map, and directions. Contact form below.

**Tech Stack:** Vanilla HTML/CSS/JS, Google Maps iframe embed (no API key), existing design system.

---

### Task 1: Create kontakt.html with full page structure

**Files:**
- Create: `kontakt.html`

**Step 1: Create the complete kontakt.html page**

Create `kontakt.html` with:
- Same `<head>` as informasjon.html (design tokens, fonts, meta tags)
- Title: "Kontakt Oss — Brobekk Legekontor"
- Navigation (copied from informasjon.html, with Kontakt link marked `.active`)
- Page header (navy gradient, title "Kontakt Oss")
- All CSS needed: design tokens, base styles, nav, page-header, footer, focus, reduced-motion, responsive, PLUS new kontakt-specific styles for the three-card grid, map card, directions card, and contact form
- Three-card section:
  - Card 1: Contact info (navy bg) with address, phone, email, opening hours
  - Card 2: Google Maps iframe embed of Linderud Senter, wrapped in a clickable link to Google Maps directions
  - Card 3: Directions ("Finn veien") with kollektivtransport, bil, and inne-i-senteret sections
- Contact form section (moved from index.html, same fields and styling)
- Footer (identical to other pages, with kontakt.html link updated)
- JavaScript: nav toggle, contact form handler

**Address details to use:**
- Linderud Senter, Erich Mogensons vei 38, 3. etasje, 0594 Oslo
- Phone: 22 64 08 44
- Email: post@brobekklegekontor.no

**Opening hours:**
- Mandag–Tirsdag: 08:00–15:00
- Onsdag: 08:30–15:00
- Torsdag–Fredag: 08:00–15:00
- Lørdag–Søndag: Stengt

**Maps iframe src:** `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.5!2d10.8334!3d59.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e1c5c000001%3A0x1234567890!2sLinderud+Senter!5e0!3m2!1sen!2sno!4v1234567890`

Alternative simpler embed: `https://www.google.com/maps?q=Linderud+Senter,+Erich+Mogensøns+vei+38,+0594+Oslo&output=embed`

**Directions link (clicking map opens):** `https://www.google.com/maps/dir/?api=1&destination=Linderud+Senter,+Erich+Mogensøns+vei+38,+0594+Oslo`

**Directions content (Norwegian):**

Kollektivtransport:
- T-bane: Linje 4 eller 5 til Linderud stasjon (ca. 8 min gange til senteret)
- Buss: Linje 25, 26, 31 eller 60 til holdeplass Linderudsletta (ca. 2 min gange)

Med bil:
- Senteret ligger langs Trondheimsveien, ca. 4 km nord for Sinsenkrysset
- 370 parkeringsplasser inkludert parkeringshus

Inne i senteret:
- Ta heisen eller rulletrappen til 3. etasje
- Finn avdelingen merket "Service og kontorer"
- Brobekk Legekontor ligger i 3. etasje

**New CSS classes needed:**
- `.kontakt-grid` — 3-column grid (1fr 1fr 1fr), gap 24px, stacks on mobile
- `.kontakt-card` — base card styling (white bg, border, radius, equal height)
- `.kontakt-card--info` — navy bg variant (same as existing contact-info-card)
- `.kontakt-card--map` — overflow hidden, padding 0 for iframe
- `.kontakt-card--directions` — white bg with direction sections
- `.map-wrapper` — container for iframe + clickable overlay
- `.map-iframe` — full-width/height iframe with no border
- `.map-link` — overlay link with "Åpne i Google Maps" text
- `.directions-group` — heading + list for each transport mode
- `.directions-group h4` — small uppercase label
- `.directions-list` — styled list with copper bullet points
- `.form-section` — section wrapper for the contact form below the grid

**Step 2: Verify the page loads correctly**

Run the dev server and check kontakt.html renders properly.

**Step 3: Commit**

```bash
git add kontakt.html
git commit -m "feat: add dedicated kontakt page with map and directions"
```

---

### Task 2: Update index.html — remove contact section and update links

**Files:**
- Modify: `index.html`

**Step 1: Update navigation link**

Change line 1513:
```html
<!-- FROM -->
<a href="#kontakt" class="nav-link">Kontakt</a>
<!-- TO -->
<a href="kontakt.html" class="nav-link">Kontakt</a>
```

**Step 2: Remove the entire contact section**

Delete the `<!-- ======== CONTACT ======== -->` section (lines 1731-1836), which includes the contact grid, info card, and contact form.

**Step 3: Update footer link**

Change the footer "Kontakt" link:
```html
<!-- FROM -->
<a href="#kontakt">Kontakt</a>
<!-- TO -->
<a href="kontakt.html">Kontakt</a>
```

**Step 4: Remove contact form JS handler**

Delete the contact form event listener (lines 1954-1967):
```javascript
document.getElementById('contactForm').addEventListener('submit', ...);
```

**Step 5: Clean up contact CSS (optional)**

Remove contact-specific CSS that's no longer used on index.html:
- `.contact-grid` through `.form-note` (lines 971-1168)
- Contact responsive rules in `@media (max-width: 1024px)` and `@media (max-width: 768px)`

Note: The `.btn`, `.btn-dark` styles should be kept as they may be used elsewhere.

**Step 6: Verify index.html works correctly**

Check that:
- Navigation "Kontakt" link goes to kontakt.html
- Footer "Kontakt" link goes to kontakt.html
- No JS errors in console
- Page renders properly without the contact section

**Step 7: Commit**

```bash
git add index.html
git commit -m "refactor: remove contact section from homepage, link to dedicated page"
```

---

### Task 3: Update informasjon.html links

**Files:**
- Modify: `informasjon.html`

**Step 1: Update navigation link**

Change line 504:
```html
<!-- FROM -->
<a href="index.html#kontakt" class="nav-link">Kontakt</a>
<!-- TO -->
<a href="kontakt.html" class="nav-link">Kontakt</a>
```

**Step 2: Update footer link**

Change the footer "Kontakt" link:
```html
<!-- FROM -->
<a href="index.html#kontakt">Kontakt</a>
<!-- TO -->
<a href="kontakt.html">Kontakt</a>
```

**Step 3: Verify informasjon.html links work**

Check both nav and footer links navigate to kontakt.html.

**Step 4: Commit**

```bash
git add informasjon.html
git commit -m "fix: update kontakt links in informasjon page nav and footer"
```

---

### Task 4: Visual verification and polish

**Step 1: Test all three pages in browser**

Check the following across all pages:
- kontakt.html: page header, three cards, map iframe loads, map click opens Google Maps, directions readable, contact form works, form shows "Sendt!" feedback
- index.html: contact section gone, nav links to kontakt.html, footer links to kontakt.html
- informasjon.html: nav links to kontakt.html, footer links to kontakt.html

**Step 2: Test responsive at 375px and 768px**

- Three-card grid stacks to single column on mobile
- Map iframe scales properly
- Form inputs stack on mobile
- Nav hamburger menu works

**Step 3: Test accessibility**

- Tab through all interactive elements on kontakt.html
- Check focus rings visible
- Check alt text on map
- Check form labels

**Step 4: Fix any issues found**

**Step 5: Final commit if any fixes made**

```bash
git add -A
git commit -m "fix: polish kontakt page responsive and accessibility"
```

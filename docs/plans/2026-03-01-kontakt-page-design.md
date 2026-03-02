# Kontakt Oss Page — Design Document

**Date:** 2026-03-01
**Status:** Approved

## Overview

Create a dedicated `kontakt.html` page for Brobekk Legekontor that consolidates all contact information, includes an interactive Google Maps embed, and provides detailed directions to the clinic inside Linderud Senter.

## Key Facts

- **Address:** Erich Mogensons vei 38, 3. etasje, 0594 Oslo (Linderud Senter)
- **Phone:** 22 64 08 44
- **Email:** post@brobekklegekontor.no
- **Mall:** Linderud Senter (5 levels, clinic on 3rd floor)
- **Parking:** 370 spaces including parking garage
- **Public transport:** T-bane linje 4/5, buss 25/26/31/60

## Page Structure

### 1. Page Header
- Navy gradient (matching informasjon.html pattern)
- Title: "Kontakt Oss"
- Subtitle: "Vi er her for deg. Finn oss, ta kontakt, eller send oss en melding."

### 2. Three-Card Section (main content, cream background)

**Card 1: Kontaktinformasjon** (navy background, white text)
- Address with location icon
- Phone with tel: link
- Email with mailto: link
- Opening hours table

**Card 2: Kart** (Google Maps embed)
- Embedded Google Maps iframe showing Linderud Senter
- Clickable overlay/link to Google Maps directions
- Rounded corners matching site design

**Card 3: Finn veien** (white card, text content)
- Kollektivtransport section (T-bane + buss)
- Med bil section (parking info)
- Inne i senteret section (floor/unit directions)

### 3. Contact Form Section
- Moved from index.html
- Same fields: name, email, phone, subject, message
- Same styling and behavior
- "For akutte henvendelser" note preserved

### 4. Footer (identical to other pages)

## Changes to Existing Files

### index.html
1. Remove entire `#kontakt` section (lines 1731-1836)
2. Remove contact CSS styles (no longer needed on homepage)
3. Update nav link: `#kontakt` → `kontakt.html`
4. Update footer link: `#kontakt` → `kontakt.html`
5. Remove contact form JS handler

### informasjon.html
1. Update nav link: `index.html#kontakt` → `kontakt.html`
2. Update footer link: `index.html#kontakt` → `kontakt.html`

## Design System

Uses existing site design tokens:
- Colors: navy, copper, cream, forest palette
- Typography: Cormorant Garamond (headings) + Outfit (body)
- Shadows, radius, transitions from CSS custom properties
- Glassmorphism card styling
- Same responsive breakpoints (768px, 1024px)

## Map Implementation

- Google Maps iframe embed (free, no API key)
- Query: `Linderud+Senter,+Erich+Mogensøns+vei+38,+0594+Oslo`
- Clickable link wrapping map to Google Maps directions
- Directions URL: `https://www.google.com/maps/dir/?api=1&destination=Linderud+Senter+Erich+Mogensøns+vei+38+Oslo`

## Directions Content (Norwegian)

**Kollektivtransport:**
- T-bane: Linje 4 eller 5 til Linderud stasjon (ca. 8 min gange til senteret)
- Buss: Linje 25, 26, 31 eller 60 til holdeplass Linderudsletta (2 min gange)

**Med bil:**
- Senteret ligger langs Trondheimsveien, ca. 4 km nord for Sinsenkrysset
- 370 parkeringsplasser inkludert parkeringshus

**Inne i senteret:**
- Ta heisen eller rulletrappen til 3. etasje
- Finn avdelingen merket "Service og kontorer"
- Brobekk Legekontor ligger i 3. etasje

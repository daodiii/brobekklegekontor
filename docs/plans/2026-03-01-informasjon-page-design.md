# Design: Informasjonsside for Brobekk Legekontor

**Dato:** 2026-03-01
**Status:** Godkjent

## Oversikt

Ny separat side (`informasjon.html`) med nyttig pasientinformasjon. Innholdet er generelt (ikke Brobekk-spesifikt) og organisert i fire kategorikort man scroller nedover. Bruker samme farger/fonter som hovedsiden, men enklere layout uten glassmorphism.

## Innholdskategorier

### 1. Vaksiner
- Influensavaksine (lenke til FHI)
- Mine vaksiner (lenke til Helsenorge)
- Reisevaksiner (lenke til FHI)
- Meningokokkvaksine for ungdom 16-19 år (lenke til Helsenorge)

### 2. Typer konsultasjon
Tre underkort:
- **Fysisk oppmøte**: 15-20 min, 1-2 problemstillinger, dobbelttime for utvidet tid/småkirurgi
- **E-konsultasjon**: Video/telefon, betaling via SMS etter samtale
- **Videokonsultasjon/telefon**: Maks 8 min, kveldstakst etter kl. 16, ConvenePay-betaling

### 3. Nyttige lenker
Grid med kort for:
- Bytte fastlege (Helsenorge)
- Pasientreiser (Helsenorge)
- NAV (tlf: 55 55 33 33)
- Helfo
- Helsedirektoratet
- Folkehelseinstituttet (FHI)

Organisasjoner (undergruppe):
- Diabetesforbundet
- Norges Astma- og allergiforbund (NAAF)
- Landsforeningen for hjerte- og lungesyke (LHL)
- Helsebibliotekets pasientinformasjon

### 4. Dine blodprøver
- Forklaring om Fürst pasientportal
- CTA-knapp til furstpasient.no

## Visuell stil

- **Bakgrunn**: var(--cream) (#FAF8F5)
- **Kort**: Hvit bakgrunn, var(--shadow-md), var(--radius) hjørner
- **Ingen glassmorphism** — ren hvit + skygge for lesbarhet
- **Overskrifter**: Cormorant Garamond, var(--navy)
- **Brødtekst**: Outfit, var(--text) / var(--text-secondary)
- **Lenker**: var(--copper) med hover til var(--copper-dark)
- **Kategori-ikoner**: SVG (ingen emoji)

## Sidestruktur

```
Header (identisk nav som index.html + "Informasjon" lenke)
├── Sideoverskrift hero-banner
│   ├── "Informasjon" tittel
│   └── Intro: "Nyttig informasjon for deg som pasient"
├── Kategoriseksjon: Vaksiner
│   ├── SVG-ikon + overskrift
│   └── Lenkeliste med beskrivelser
├── Kategoriseksjon: Typer konsultasjon
│   ├── SVG-ikon + overskrift
│   └── 3 underkort (grid: 3col → 2+1 → 1col)
├── Kategoriseksjon: Nyttige lenker
│   ├── SVG-ikon + overskrift
│   ├── Institusjoner (2-kolonne grid)
│   └── Organisasjoner (undergruppe)
├── Kategoriseksjon: Dine blodprøver
│   ├── SVG-ikon + overskrift
│   └── Forklaring + CTA-knapp
└── Footer (identisk som index.html)
```

## Responsivt

| Breakpoint | Konsultasjonskort | Lenker-grid |
|-----------|-------------------|-------------|
| Desktop (1024px+) | 3 kolonner | 2 kolonner |
| Tablet (768px) | 2+1 | 2 kolonner |
| Mobil (<768px) | 1 kolonne | 1 kolonne |

## Navigasjonsendringer

- Legg til "Informasjon" i nav på **begge** index.html og informasjon.html
- index.html: `<a href="informasjon.html" class="nav-link">Informasjon</a>`
- informasjon.html: Nav-lenker peker til `index.html#hjem`, `index.html#helsenorge`, etc.

## Tekniske detaljer

- Ny fil: `informasjon.html` (standalone HTML med innebygd CSS som index.html)
- Deler design-tokens og font-imports med index.html
- Alle eksterne lenker åpnes i ny fane (`target="_blank" rel="noopener noreferrer"`)
- SVG-ikoner inline (ingen eksterne avhengigheter)
- Språk: Norsk (lang="no")

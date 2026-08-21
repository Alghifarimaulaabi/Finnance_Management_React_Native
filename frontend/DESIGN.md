---
name: Finly
description: Single-user IDR personal finance and cashflow management app for Android
colors:
  primary: "#255E53"
  primary-dark: "#173F37"
  primary-glow: "#3F8374"
  primary-soft: "#D7E8E1"
  income-bg: "#DFF8EB"
  income-text: "#157B58"
  expense-bg: "#FFE5E1"
  expense-text: "#D45B53"
  canvas: "#F7F8F5"
  surface: "#FFFFFF"
  surface-alt: "#E8ECE7"
  text-primary: "#17211D"
  text-secondary: "#78817D"
  border-subtle: "#EDF0ED"
typography:
  display:
    fontFamily: "system-ui, Roboto, sans-serif"
    fontSize: "31px"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-1px"
  headline:
    fontFamily: "system-ui, Roboto, sans-serif"
    fontSize: "25px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.6px"
  title:
    fontFamily: "system-ui, Roboto, sans-serif"
    fontSize: "19px"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.4px"
  body:
    fontFamily: "system-ui, Roboto, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "system-ui, Roboto, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.2px"
rounded:
  sm: "8px"
  md: "14px"
  lg: "18px"
  xl: "22px"
  card: "24px"
  hero: "28px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "18px"
  xl: "24px"
  2xl: "32px"
components:
  button-quick-action:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "14px 14px"
    size: "52px"
  card-hero:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.hero}"
    padding: "24px 24px"
  card-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.card}"
    padding: "18px 18px"
  segment-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "5px 9px"
---

# Design System: Finly

## Overview

**Creative North Star: "The Precision Vault"**

Finly is a structured, confident, and calming personal finance companion. It combines the architectural stability of a modern digital vault with the natural tranquility of botanical emerald and warm pearl tones. The interface emphasizes high-density financial clarity without visual noise: numbers are crisp and bold, data cards are tactile and rounded, and key positions stand out immediately.

Financial management requires emotional composure and rapid readability. The system delivers this by anchoring screens with a deep emerald Hero Balance Card, surrounded by clean white surface modules resting on a warm pearl canvas. Tonal highlights, soft radial glows, and precise semantic badges provide instant context on cash flow health.

**Key Characteristics:**
- **Calm Authority**: Deep botanical greens evoke wealth preservation and balance.
- **Architectural Scannability**: Strong typography weights (800 for numerical totals) paired with generous card paddings.
- **Tactile Squircles**: Continuous curvature across cards (24-28dp) and action buttons (16-18dp).
- **Proactive Semantic Signaling**: Clean contrast badges for income (+, mint) and expense (−, coral).

## Colors

The palette pairs a deep botanical emerald primary with high-contrast functional pastels and an organic pearl canvas.

### Primary
- **Botanical Emerald** (#255E53): The primary anchor of the app. Used for the Hero Balance Card background and prominent brand touchpoints.
- **Deep Emerald Shadow** (#173F37): Ambient drop-shadow tone for hero cards.
- **Emerald Glow** (#3F8374): Organic radial atmosphere within hero containers.
- **Sage Mint Soft** (#D7E8E1): Subtitle and eye-toggle icon color within the hero card.

### Secondary
- **Income Mint Surface** (#DFF8EB): Background for income badges, stat pills, and positive cash flow indicators.
- **Income Forest** (#157B58): Bold foreground text and arrows for income transactions and positive percentages.
- **Expense Coral Surface** (#FFE5E1): Background for expense stat pills and negative cash flow warnings.
- **Expense Terracotta** (#D45B53): Foreground text and arrows for expense amounts and over-budget warnings.

### Tertiary (Reserved Accents)
- **Indigo** (#546E9D), **Ochre** (#B06F5B), and **Violet** (#76669B) are reserved for future, explicitly specified actions.
- Do not use these colors to imply transfer, bill payment, recurring transactions, or other features outside the current scope.
- **Profile Warm Amber** (#DED2C3 / #765F4B): Avatar container and text styling.

### Neutral
- **Warm Pearl Canvas** (#F7F8F5): Background canvas for the entire screen, softer than pure sterile white.
- **Surface Pure White** (#FFFFFF): Background for cards, transaction lists, and elevated chart containers.
- **Charcoal Text Primary** (#17211D): Dominant headline and amount text color.
- **Slate Text Secondary** (#78817D): Subtitles, timestamps, categories, and inactive labels.
- **Subtle Divider** (#EDF0ED): Hairline borders between transaction rows and grid lines.

### Named Rules
**The Hero Balance Rule.** The deep botanical emerald (#255E53) with interior ambient glows is reserved exclusively for the Hero Balance Card and primary accent triggers. All secondary cards must remain crisp pure white (#FFFFFF) on the warm pearl canvas.

**The Semantic Inflow/Outflow Rule.** Mint green is strictly for income and positive budget delta; Coral red is strictly for expenses and limit warnings. Never use these semantic colors for decorative non-financial highlights.

## Typography

**Display Font:** System Sans / Roboto (`system-ui`, `Roboto`, sans-serif)
**Body Font:** System Sans / Roboto (`system-ui`, `Roboto`, sans-serif)
**Label Font:** System Sans / Roboto (`system-ui`, `Roboto`, sans-serif)

**Character:** Bold, modern, high-contrast sans-serif hierarchy with tight letter-spacing for large currency figures and clean medium weights for transaction metadata.

### Hierarchy
- **Display** (800, 31px, line-height 1.1, letterSpacing: -1px): Total balance and large KPI numbers.
- **Headline** (800, 25px, line-height 1.2, letterSpacing: -0.6px): Screen greetings and major surface headers.
- **Title** (800, 19px, line-height 1.3, letterSpacing: -0.4px): Section titles (e.g., "Arus kas", "Aksi cepat", "Transaksi terbaru").
- **Stat / Amount** (800, 17px, line-height 1.3, letterSpacing: -0.3px): Stat card amounts and individual transaction values.
- **Body** (500, 14px, line-height 1.5): Standard descriptions, user greetings, and transaction titles.
- **Label / Caption** (600/700, 10-12px, line-height 1.3): Metadata, dates, category tags, chart bar labels, and trend badges.

### Named Rules
**The Number Weight Rule.** All Rupiah amounts and numeric data points must use `fontWeight: "800"` with tight negative letter-spacing (`-0.3px` to `-1px`) to maintain clear financial prominence over descriptive text. Use the `Rp` prefix and do not show alternative currency symbols.

## Layout

- **Grid & Model**: Single-column vertical scroll layout optimized for compact and standard Android mobile viewports.
- **Content Margins**: `20dp` horizontal screen padding (`paddingHorizontal: 20`), `14dp` top content padding, `34dp` bottom content padding.
- **Vertical Spacing Rhythm**:
  - Section-to-section gap: `28dp` to `30dp`.
  - Header-to-content gap: `14dp` to `16dp`.
  - Intra-card element spacing: `8dp` to `12dp`.
- **Card Gaps**: `12dp` gap between multi-column stat cards in horizontal rows.

## Elevation & Depth

Finly uses layered organic depth. Rather than harsh material drop-shadows, surfaces use subtle, tinted ambient elevation paired with container clipping and radial highlight layers.

### Shadow Vocabulary
- **Hero Ambient Glow** (`shadowColor: "#173F37"`, `shadowOpacity: 0.23`, `shadowRadius: 20`, `shadowOffset: { width: 0, height: 12 }`, Android `elevation: 6`): Deep, warm elevation for the hero balance module.
- **Surface Elevation** (`shadowColor: "#77857D"`, `shadowOpacity: 0.08`, `shadowRadius: 15`, `shadowOffset: { width: 0, height: 6 }`, Android `elevation: 2`): Soft, diffuse shadow for white chart and stat cards.
- **Card Glow Insets**: Absolute positioned circular layers (`opacity: 0.72` and `opacity: 0.27`) providing internal depth to dark cards.

### Named Rules
**The Tinted Shadow Rule.** Shadows must never be pure `#000000`. Use deep forest `#173F37` for hero cards and muted slate `#77857D` for surface cards to preserve organic warmth.

## Shapes

- **Hero Card Corner**: `28dp` continuous border radius (`borderRadius: 28`).
- **Surface & Stat Cards**: `22dp` to `24dp` border radius (`borderRadius: 22` / `24`).
- **Quick Action Icons**: `18dp` squircle radius (`borderRadius: 18`) on `52×52dp` boxes.
- **Profile Avatar**: `16dp` radius (`borderRadius: 16`) on `45×45dp` boxes.
- **Transaction Icons**: `14dp` radius (`borderRadius: 14`) on `41×41dp` boxes.
- **Segmented Controls**: `10dp` container radius with `8dp` active pill radius.
- **Trend & Status Badges**: Full pill radius (`borderRadius: 20`).

## Components

### Hero Balance Card
- **Shape:** Rounded container (`borderRadius: 28`, `minHeight: 188dp`, `padding: 24dp`).
- **Background:** Botanical Emerald (`#255E53`) with dual organic radial glows (`#3F8374` and `#6BAC8B`).
- **Elements:** Balance label with visibility toggle (`◉` / `○`), 31px display balance, trend pill (`+8.4%`), and watermark logo.

### Stat Cards (Income / Expense)
- **Shape:** Rounded container (`borderRadius: 22`, `minHeight: 137dp`, `padding: 15dp`).
- **Variants:**
  - Income: Soft mint background (`#ECF8F2`), green arrow badge (`#DFF8EB` / `#157B58`).
  - Expense: Soft coral background (`#FFF3EF`), red arrow badge (`#FFE5E1` / `#D45B53`).
- **Typography:** 12px label, 17px bold value, 10px percentage change subtitle.

### Segmented Control Filter
- **Shape:** Pill container (`borderRadius: 10`, `backgroundColor: "#E8ECE7"`, `padding: 3dp`).
- **Segments:** Active segment has `#FFFFFF` background with subtle 4dp shadow (`elevation: 1`) and `#30463E` text; inactive has `#7A847F` text.

### Bar Chart Widget
- **Shape:** White surface card (`borderRadius: 24`, `padding: 18dp`, `elevation: 2`).
- **Elements:** Summary header with total and percentage badge; dashed horizontal grid lines (`#EDF0ED`); vertical bars with active column highlight (`#2F7868`) and tooltip pill (`Rp320k`).

### Quick Action Buttons
- **Shape:** `52×52dp` squircle button (`borderRadius: 18`) with centered 23px symbol.
- **Label:** 11px semibold text (`#56625C`) with 8dp top margin.
- **Touch Target:** Minimum `48×48dp` compliance with active press feedback.

### Transaction Row
- **Shape:** Full-width row within a rounded white card (`paddingVertical: 14dp`, hairline divider `#EDF0ED`).
- **Elements:** `41×41dp` icon squircle, Title (13px bold) + Category/Date subtitle (10px medium), right-aligned amount (12px bold, green for income, charcoal for expense).

## Do's and Don'ts

### Do:
- **Do** maintain a minimum 48×48 dp interactive touch target area for all buttons and toggles.
- **Do** format all monetary amounts as Rupiah with bold font weight (800) and the `Rp` prefix.
- **Do** use tinted ambient shadows (`#173F37` and `#77857D`) rather than raw black shadows.
- **Do** preserve the Warm Pearl (`#F7F8F5`) screen canvas to ensure cards stand out cleanly.
- **Do** provide accessibility labels on icon-only actions (balance visibility toggle, quick actions, profile avatar).

### Don't:
- **Don't** use raw black (`#000000`) for body text or shadows.
- **Don't** mix sharp angular corners (0-4dp) with Finly's tactile squircle aesthetic (14-28dp).
- **Don't** use income green for negative alerts or expense coral for positive affirmations.
- **Don't** clutter the hero card with secondary metrics; keep it dedicated to net balance and core trajectory.

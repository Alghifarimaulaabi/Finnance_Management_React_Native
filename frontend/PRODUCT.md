# Product

<!-- impeccable:product-schema 1 -->

## Platform

android

## Users
- One individual managing personal cash flow, multi-account balances, and expense budgets in Indonesia.

## Product Purpose
- An intuitive, reliable personal finance tracker and budgeting mobile application that helps users monitor balances across multiple wallets/accounts, track expenses and income in real-time, enforce category-based budgets, achieve savings goals, and gain actionable financial insights.

## Positioning
- A clean personal money companion for one private user, blending clear overview dashboards with frictionless transaction logging and proactive budget threshold alerts without financial clutter or invasive ads.

## Operating Context
- On-the-go mobile usage primarily on Android devices.
- High-frequency quick capture (logging daily expenses immediately post-purchase).
- Periodic deep reviews (weekly/monthly budget health checks, category breakdown audits, goal progression tracking).

## Capabilities and Constraints
- **Multi-Account / Wallets**: Support for cash, bank accounts, e-wallets, and custom accounts with independent balances.
- **Currency Scope**: All balances and transactions use Indonesian Rupiah (`IDR`) only. No currency selection, exchange rate, or conversion is supported.
- **Transaction Management**: Inflow/outflow tracking, categorisation, date, notes, and instant balance recalculation.
- **Budgeting Engine**: Monthly category budgets with configurable warning thresholds (e.g. 80% warning, 100% exceeded).
- **Financial Goals**: Savings goals with target amounts, current progress, and target dates.
- **Analytics & Reporting**: Income vs expense comparisons, periodic trend analysis (weekly, monthly, annual), and category breakdown.
- **Technical Stack**: React Native (v0.86) with Expo (v57), Expo Router, TypeScript, NativeWind / Tailwind CSS, Reanimated, and Express/PostgreSQL backend integration.

## Brand Commitments
- Name: Finly (Personal Finance Management).
- Voice & Tone: Calm, encouraging, precise, and empowering. Clean numbers, clear visual hierarchy, non-judgmental financial nudges.

## Evidence on Hand
- Dashboard prototype in `src/app/index.tsx` featuring a balance visibility toggle, quick-action visuals, weekly cashflow bar chart, and recent transaction list. Its financial values are still mock data until API integration is complete.
- Comprehensive functional specifications and architecture documentation in `docs/core/`.

## Product Principles
1. **Frictionless Entry**: Logging an expense or income must take seconds with minimal taps.
2. **Instant Clarity**: The home dashboard immediately communicates net financial position and actionable burn rate at a glance.
3. **Actionable Feedback**: Budget warnings and insights should inform behavior before overspending occurs, not just report historical damage.

## Product Boundaries
- The product is single-user: there is no login, authentication, user profile, or user-level data isolation.
- Transfer, bill payment, recurring transactions, and multi-currency are outside the current product scope unless requirements and API contracts are updated first.

## Accessibility & Inclusion
- High-contrast text readability, clear numerical typography, touch targets meeting Android Material accessibility minimums (48x48dp), and explicit screen reader labels for icon-only actions and balance visibility toggles.

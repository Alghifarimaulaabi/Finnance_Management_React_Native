# Finly Mobile App

Finly is a personal finance mobile app for one private user. It tracks accounts, income, expenses, budgets, financial goals, and analytics in **Indonesian Rupiah (IDR) only**.

## Current Status

The mobile app currently contains an Expo Router navigation shell and a dashboard UI prototype. The displayed financial values are mock data; API integration and the supporting backend endpoints are not complete yet.

See [the project documentation](../docs/README.md) for the product scope, requirements, API contract, and implementation phases.

## Run the Mobile App

```bash
cd frontend
npm install
npm run start
```

Use the Expo terminal to open the app on an Android device or emulator. The backend is not runnable yet because its Express application and API routes have not been implemented.

## Product Boundaries

* Single-user; no login, authentication, profile, or multi-user data isolation.
* IDR only; do not add currency selection, exchange rates, or conversion logic.
* Transfers, bill payments, and recurring transactions are not in the current scope.

## For Contributors and AI Agents

Read `../docs/README.md`, the relevant files under `../docs/core/`, and `AGENTS.md` before changing the frontend. Treat requirements and API documents as the target contract, and use `../docs/core/phases.md` plus the source code to determine what is already implemented.

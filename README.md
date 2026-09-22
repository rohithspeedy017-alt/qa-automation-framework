
![Playwright Tests](https://github.com/rohithspeedy017-alt/qa-automation-framework/actions/workflows/playwright.yml/badge.svg)

# Full-Stack Test Automation Framework for an E-commerce App

A test automation framework built with Playwright (JavaScript) that tests a live e-commerce
website across three layers: UI, API, and data consistency between them — with tests running
automatically in CI/CD on every push.

## Why this project

Most automation portfolios only test buttons on a screen. This project mirrors how testing
actually works on a real product team: verifying that what the backend sends and what the
user sees on screen actually agree, and catching regressions automatically before they reach
production — the same kind of data-integrity thinking I use testing enterprise HR/payroll
systems at ADP.

## What's tested

- **UI flows:** login (including negative/invalid login), product search, add to cart,
  cart → checkout journey
- **API tests:** direct REST API validation (status codes, response schema, field presence)
- **API + UI consistency test:** fetches live data from the API and verifies that same data
  is correctly rendered on the actual website — catching frontend/backend mismatches
- **Cross-browser:** every test runs on Chromium, Firefox, and WebKit automatically

## Tech stack

- Playwright (JavaScript) — UI and API automation
- GitHub Actions — CI/CD, running the full suite on every push
- Playwright HTML Reporter — test results and failure screenshots/traces

## How to run locally

\`\`\`bash
git clone https://github.com/rohithspeedy017-alt/qa-automation-framework.git
cd qa-automation-framework
npm install
npx playwright install
npx playwright test
npx playwright show-report
\`\`\`

## Project structure

\`\`\`
tests/
  login.spec.js          # Valid/invalid login flow
  search.spec.js         # Product search
  addToCart.spec.js      # Add to cart flow
  checkout.spec.js       # Cart → checkout journey
  api.spec.js            # Direct API tests
  apiUiCombo.spec.js     # API + UI data consistency test
.github/workflows/       # CI/CD pipeline definition
playwright.config.js     # Test runner configuration
\`\`\`

## What I'd add next

- Database-level assertions (SQL/MongoDB) for order data integrity
- Visual regression testing
- Test data generation with Faker for more realistic negative-path coverage
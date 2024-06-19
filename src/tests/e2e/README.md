# E2E Tests for ContactMonkey

Hello! We include end-to-end (E2E) tests to test overall functionality of the application. We use [Playwright](https://playwright.dev) to power these tests.

## Quickstart
```
# set E2E_USER_PASSWORD env var, which can be found in 1Password
pnpm i
cd apps/app-frontend
pnpm run e2e-install
pnpm run test:e2e
```

## Installation

Dependencies are included in the overall `app-frontend` dependencies, so to get all needed code libraries you should only need to run `pnpm i` or similar for this repo.

If you are working with E2E tests for the first time, you may need to install brower dependencies. You can do this by running

```
pnpm run e2e-install
```
from the `app/app-frontend` directory, or
```
pnpm run --filter app-frontend e2e-install
```
from the root of the `frontend` directory. Both of these commands essentially run
```
pnpm exec playwright install chrome
```
which you can also run in the `app-frontend` directory if you prefer.

## Running tests

To run all tests against staging environments, which is the default configuration, run
```
pnpm run tests:e2e
```
from the `app-frontend` directory, or
```
pnpm run --filter app-frontend tests:e2e
```
from the root directory.

To run all tests against a local development instance (likely deployed at `http://localhost:3000` or similar), run
```
pnpm run tests:e2e-local
```

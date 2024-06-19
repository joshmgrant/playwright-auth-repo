## Playwright Auth Issue Repo Repo

This is a repository for debugging an authenication issue in Playwright. The issue can be found [here](https://github.com/microsoft/playwright/issues/31347)

Yes, I wrote "repo repo"

## Getting Started

This project uses pnpm instead of npm for package management. Please try to use pnpm where possible. This repo also uses 

To install, run

```
pnpm i
```

To run current tests, run

```
pnpm run e2e-install # this calls playwright install
pnpm run test:e2e # this calls playwright test
```

## What I've tried:

- Using absolute paths to get to the `playright/.auth` directory in the code
- Deleting the `.json` files in `playright/.auth` which causes tests to fail hard

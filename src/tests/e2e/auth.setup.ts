import { test as setup } from '@playwright/test';
import { LoginPage } from './pages/login-page';

// TODO: replace with env vars
const gmailUser = 'joshua.grant@cmkygs.com'
const outlookUser = 'joshua.grant@contactmonkey.ca'
const password = process.env.E2E_USER_PASSWORD || ''

// following this approach for multiple user authenications
// https://playwright.dev/docs/auth#multiple-signed-in-roles
const outlookAuthFile = 'playwright/.auth/outlook.json';

setup('authenticate as Outlook user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  const loginPage = new LoginPage(page);
  loginPage.loginAs(outlookUser, password);
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.

  // TODO: replace with the correct URL from env variable
  await page.waitForURL('/stats/campaigns');
  // End of authentication steps.

  await page.context().storageState({ path: outlookAuthFile });
});

const gmailAuthFile = 'playwright/.auth/gmail.json';

setup('authenticate as GMail user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  const loginPage = new LoginPage(page);
  loginPage.loginAs(gmailUser, password);
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.

  // TODO: replace with the correct URL from env variable
  await page.waitForURL('/stats/campaigns');
  // End of authentication steps.

  await page.context().storageState({ path: gmailAuthFile });
});

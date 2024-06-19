import { test } from '@playwright/test';
import { EmailsPage } from './pages/emails-page';

test.describe('the GDS email page', () => {
  test.use({ storageState: 'playwright/.auth/gmail.json' })

  test('gmail dashboard sending', async ({ page }) => {
    const emails = new EmailsPage(page);
    await emails.goto();
    await emails.goToEmails();
    await emails.composeAndSendGDS();
    await emails.verifyCampaignIsCreatedGDS();
  });
});

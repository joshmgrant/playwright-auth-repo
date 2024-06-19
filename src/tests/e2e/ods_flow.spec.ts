import { test } from '@playwright/test';
import { EmailsPage } from './pages/emails-page';

// import { generateEmailSubject } from './faker_utils'

// TODO: consolidate data somewhere and generate unique values

test.describe('the ODS email page', () => {
  test.use({ storageState: 'playwright/.auth/outlook.json' })

  test('outlook dashboard sending', async ({ page }) => {
    const emails = new EmailsPage(page);
    await emails.goto();
    await emails.goToEmails();
    await emails.composeAndSendODS();
    await emails.verifyCampaignIsCreatedODS();
  });
});

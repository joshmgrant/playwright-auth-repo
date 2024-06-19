import { test } from '@playwright/test';
import { ContactsPage } from '../pages/contacts-page';

test.describe('API Integration sync', () => {
  test.use({ storageState: 'playwright/.auth/outlook.json' });

  test('that the API integration dialog appears', async ({ page }) => {
    const contacts = new ContactsPage(page);
    await contacts.goToSources();

    await contacts.goToAPISource();

    await contacts.verifyAPISourceDialogAppears();
  })
});

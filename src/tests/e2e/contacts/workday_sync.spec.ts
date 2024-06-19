import { test } from '@playwright/test';
import { ContactsPage } from '../pages/contacts-page';

test.describe('Workday sync', () => {
  test.use({ storageState: 'playwright/.auth/outlook.json' });

  test('that the Workday sync page appears', async ({ page }) => {
    const contacts = new ContactsPage(page);
    await contacts.goToSources();

    await contacts.goToWorkdaySource();

    await contacts.verifyWorkdaySyncAppears();
  })
});

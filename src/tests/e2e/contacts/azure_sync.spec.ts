import { test } from '@playwright/test';
import { ContactsPage } from '../pages/contacts-page';

test.describe('Azure sync', () => {
  test.use({ storageState: 'playwright/.auth/outlook.json' });

  test('that the Azure sync page appears', async ({ page }) => {
    const contacts = new ContactsPage(page);
    await contacts.goToSources();

    await contacts.goToAzureSource();

    await contacts.verifyPageIsOnAzureSyncPage();
  })

  test('that Azure sync succeeds', async ({ page }) => {
    const contacts = new ContactsPage(page);
    await contacts.goToSources();
    await contacts.goToAzureSource();

    await contacts.importAzureContacts()

    await contacts.verifySuccessfulAzureSyncMessage();
  })
});

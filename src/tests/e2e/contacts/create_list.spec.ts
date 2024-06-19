import { test } from '@playwright/test';
import { ContactsPage } from '../pages/contacts-page';

test.describe('creating a new contact list', () => {
  test.use({ storageState: 'playwright/.auth/gmail.json' });

  test('that a list can be created', async ({ page }) => {
    const contacts = new ContactsPage(page);
    await contacts.goto();

    const expectedName = await contacts.createNewContactList()

    await contacts.verifyContactListIsCreated(expectedName)
  });
});

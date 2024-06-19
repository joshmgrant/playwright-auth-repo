import { expect, test } from '@playwright/test';
import { ContactsPage } from '../pages/contacts-page';

test.describe('the contacts page', () => {
  test.use({ storageState: 'playwright/.auth/gmail.json' });

  test('that Contacts can be accessed', async ({ page }) => {
    const contacts = new ContactsPage(page);
    await contacts.goto();

    await expect(page).toHaveURL(/contacts/);
  });

  test('that Sources can be accessed', async ({ page }) => {
    const contacts = new ContactsPage(page);
    await contacts.goToSources();

    // using visible text to confirm that we are on the right page helps the recordings of test to be more readable
    await expect(page.getByText('Upload a CSV')).toBeVisible();
  });
});

import { type Locator, type Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class ContactsPage {
  readonly page: Page;
  readonly contactsLink: Locator;
  readonly sourcesLink: Locator;
  readonly directoryLink: Locator;
  constructor(page: Page) {
    this.page = page;
    this.directoryLink = page.locator('a', { hasText: /Directory/ });
    this.contactsLink = page.locator('a', { hasText: /Contacts/ });
    this.sourcesLink = page.locator('a', { hasText: /Sources/ });
  }

  async goto() {
    await this.page.goto('/stats/campaigns');
    await this.directoryLink.click();
    await this.contactsLink.click();
  }

  async goToSources() {
    await this.page.goto('/stats/campaigns');
    await this.directoryLink.click();
    await this.sourcesLink.click();
  }

  async createNewContactList(listName: string = '') {
    if (!listName) {
      listName = `Contact List ${faker.string.numeric(4)}`
    }

    await this.page.getByText('Save Filters as List').click()
    await this.page.getByPlaceholder('Type here').fill(listName)
    await this.page.getByRole('button', { name: 'Save' }).click()
    return listName
  }

  async goToAzureSource() {
    await this.page.getByRole('link', { name: 'Manage' }).click()
  }

  async goToWorkdaySource() {
    await this.page.getByTestId('addASourceWorkdayCard').getByRole('button').click()
  }

  async goToAPISource() {
    await this.page.getByTestId('addAnAPISourceCard').getByRole('button').click()
  }

  async importAzureContacts() {
    await this.page.getByText('Import Contacts').click()
  }

  async verifyPageIsOnAzureSyncPage() {
    await expect(this.page).toHaveURL(/new_azure/);
  }

  async verifySuccessfulAzureSyncMessage() {
    await expect(this.page.getByText('Your Azure sync will begin shortly.')).toBeVisible();
  }

  async verifyWorkdaySyncAppears() {
    await expect(this.page.getByText('Connect to Workday')).toBeVisible();
  }

  async verifyContactListIsCreated(expectedName: string) {
    await expect(this.page.getByText(expectedName)).toBeVisible()
  }

  async verifyAPISourceDialogAppears() {
    await expect(this.page.getByTestId('APIKeyDialog')).toBeVisible();
  }
}

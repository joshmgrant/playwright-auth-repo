import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { generateEmailSubject } from '../faker_utils'

export class EmailsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  goto = async () => {
    this.page.goto('/stats/campaigns')
    this.goToEmails()
  }

  goToEmails = async () => {
    await this.page.getByText('Emails').click();
  };

  composeAndSendGDS = async (user: string = '', toAddress: string = '', subjectLine: string = '') => {
    await this.page.getByTestId('ComposeSendButton').click();
    // TODO better locators on elements on Compose & Send page
    await this.page.getByTestId('fromEmailAddress').click()

    if (user === '') {
      await this.page.getByText(/cmkygs.com/).click()
    }
    else {
      await this.page.getByText(user).click()
    }

    await this.page.getByText('Select Type of Send To List').click()
    await this.page.getByText(/Individual Address/).click()
    await this.page.getByTestId('addAddressesButton').click()

    if (toAddress === '') {
      await this.page.getByTestId('newEmailAddressTextArea').fill('joshua.grant@contactmonkey.ca')
    }
    else {
      await this.page.getByTestId('newEmailAddressTextArea').fill(toAddress)
    }
    await this.page.getByTestId('addButton').click()
    await this.page.waitForTimeout(2000)

    if (subjectLine === '') {
      const subject = await generateEmailSubject('gmail')
      await this.page.locator('#name').fill(subject)
    }
    else {
      await this.page.locator('#name').fill(subjectLine)
    }

    // no tracking for faster email send
    await this.page.locator('#overall').click();
    const opensToggleOn = await this.page.getByTestId('opensToggle').getAttribute('aria-checked')
    if (opensToggleOn === 'false') {
      this.page.getByTestId('opensToggle').click();
    }

    const clicksToggleOn = await this.page.getByTestId('clicksToggle').getAttribute('aria-checked')
    if (clicksToggleOn === 'false') {
      this.page.getByTestId('clicksToggle').click();
    }

    await this.page.getByTestId('sampleTemplate').first().click();

    await this.page.getByTestId('sendButton').click();
  }

  composeAndSendODS = async (user: string = '', toAddress: string = '', subjectLine: string = '') => {
    await this.page.getByTestId('ComposeSendButton').click();
    // TODO better locators on elements on Compose & Send page
    await this.page.getByText('Please select').first().click()
    if (user === '') {
      await this.page.getByText(/joshua.grant@contactmonkey.ca/).click()
    }
    else {
      await this.page.getByText(user).click()
    }

    await this.page.getByTestId('sendToLists').click()

    if (toAddress === '') {
      await this.page.getByText(/ODS/).click()
    }
    else {
      await this.page.getByText(toAddress).click()
    }

    if (subjectLine === '') {
      await this.page.locator('input[data-testid="formSubject"]').fill('My test email')
    }
    else {
      await this.page.locator('input[data-testid="formSubject"]').fill(subjectLine)
    }

    await this.page.getByText('Choose from Library').click();
    await this.page.getByTestId('selectTemplateButton').first().click();

    await this.page.getByTestId('sendNowButton').click();
  }

  verifyCampaignIsCreatedGDS = async () => {
    await this.page.waitForURL(/templates/)
    // TODO: Use Gmail API to validate that campaign created email is sent
    await expect(this.page.getByText('Success, your email will now begin sending')).toBeVisible();
  }

  verifyCampaignIsCreatedODS = async () => {
    await this.page.waitForTimeout(2000)
    await this.page.waitForURL(/templates/)
    // TODO: Use Gmail API to validate that campaign created email is sent
    await expect(this.page.getByText('Your email will be sent shortly.')).toBeVisible();
  }

  verifyEmailIsSent = async () => {
    // TODO: Use gmail API to validate that emails were sent
    await expect(true).toBe(false)
  }
}

import type { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  loginAs = async (username: string, password: string) => {
    await this.page.goto('/users/sign_in?layout=desktop')
    await this.page.locator('#user_email').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.locator('#login_form_submit_button').click();
  }
}

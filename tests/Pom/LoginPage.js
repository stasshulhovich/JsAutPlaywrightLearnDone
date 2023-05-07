const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginInput = page.getByPlaceholder('E-Mail Address');
  }

  async fillLoginInput(email) {
    await this.loginInput.type(email);
    await this.page.waitForTimeout(3000);
  }
};

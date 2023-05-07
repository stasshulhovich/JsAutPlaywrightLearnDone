const { LoginPage } = require('../Pom/LoginPage');

exports.HomePage = class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async openLoginPage() {
    await this.page.hover("(//*[contains(text(),'My account')])[2]");
    await this.page.click('text=Login');
  }

  async openLoginPageAndReturnInstance() {
    await this.page.hover("(//*[contains(text(),'My account')])[2]");
    await this.page.click('text=Login');
    return new LoginPage(this.page);
  }
};

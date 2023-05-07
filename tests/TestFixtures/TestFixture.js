const base = require('@playwright/test');
const { LoginPage } = require('../Pom/LoginPage');
const { HomePage } = require('../Pom/HomePage');

exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

exports.expect = base.expect;

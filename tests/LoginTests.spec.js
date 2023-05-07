const { test } = require('../tests/TestFixtures/TestFixture');
const { HomePage } = require('../tests/Pom/HomePage');

test.describe('PLAYWRIGHT FIXTURES and page object package', async () => {
  // This approach shows how to use playwright fixtures
  test('Login test demo 01', async ({ page, baseURL, loginPage, homePage }) => {
    await page.goto(baseURL);
    await homePage.openLoginPage();
    await loginPage.fillLoginInput('alora@mail.ru');
  });

  // This is approach where classes are initialising in usual way via return new Object();
  test('Login test demo 02', async ({ page, baseURL }) => {
    await page.goto(baseURL);
    const homePage = new HomePage(page);
    const loginPage = await homePage.openLoginPageAndReturnInstance();
    await loginPage.fillLoginInput('alora@mail.ru');
  }); 

  // not to forget
  // await page.click('text=Login'); == await page.click('Login');
  // await page.waitForTimeout(5000);

  // ctrl + j = open terminal
  // config > report html or json {output file}
  // type vs fill (type is like append, typing 1 + 1 symbol, fill is cleared out and type super fast)
  // alert.acccept() or alert.message() or alert.defaulvalue(); - to work with native popups
  // dropdowns: page.SelectOption('#idElement',     { index: 5 })
  // or page.SelectOption('#idElement',     { value: "Tuesday" })
  // or page.SelectOption('#idElement',     { label: "Tuesday" })
  // multidropdown page.SelectOption('#idMultiDropDown',     [{ label: "Tuesday" }, {index: 5}])
  // not usual dropdown !!!!!!!!! super cool. page.locator("#idDropdDown").locator("li", { hasText: "India"}).click();
});

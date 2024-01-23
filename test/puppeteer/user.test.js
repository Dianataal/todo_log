const puppeteer = require('puppeteer');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

describe('User Interaction Tests', () => {
  test('Add User and Check Appearance', async () => {
    await page.goto('http://localhost:3000'); 


    await page.type('#username', 'TestUser');
    await page.type('#age', '25');

    await page.click('#Button_button__4f3Fv');

    await page.waitForTimeout(1000);

    const newUserElement = await page.$('.UsersList_users__uT+mY:contains("TestUser")');
    expect(newUserElement).not.toBeNull();
  }, 30000);
});

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

describe('Priority filter test', () => {
  test('Check if priority filter works', async () => {
    await page.goto('http://localhost:3000'); 


    await page.type('#priority', 'hard');

    const newUserElement = await page.$('.todos-list:contains("React")');
    expect(newUserElement).not.toBeNull();
  }, 30000);
});

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

describe('Todo Interaction Tests', () => {
  test('Add Todo and Check Appearance', async () => {
    await page.goto('http://localhost:3000'); 

    await page.type('#title', 'Making tests');
    await page.select('#priority', 'Medium');
    await page.type('#date', '12.12.2023');

    await page.click('#submit-todo');

    await page.waitForTimeout(1000);

    const newTodoElement = await page.$('.todos-list:contains("Making tests")');
    expect(newTodoElement).not.toBeNull();
  }, 30000);
});

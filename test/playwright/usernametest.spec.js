const { test, expect } = require('@playwright/test');

test('My App Test', async ({ page }) => {
  // Navigate to your app or interact with your app as needed
  await page.goto('http://localhost:3000');

  // Perform actions on your app
  await page.fill('input#username', 'diana');
  await page.fill('input#age', '27');
  await page.click('button.Button_button__4f3Fv[type="submit"]');

  // Wait for the user information to appear in the div
  await page.waitForSelector('.Card_card__lNgzw.UsersList_users__uT M Y li');

  // Extract the text content of the li element inside the specified div
  const userText = await page.$eval('.Card_card__lNgzw.UsersList_users__uT M Y li', (li) => li.textContent);

  // Perform assertions to verify the expected behavior
  // Check if the user information is displayed correctly
  await expect(userText).toContain('diana');
  await expect(userText).toContain('27 years old');
});


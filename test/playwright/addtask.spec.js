const { test, expect } = require('@playwright/test');

test('My App Test', async ({ page }) => {
  // Navigate to your app or interact with your app as needed
  await page.goto('http://localhost:3000');

  // Perform actions on your app
  await page.fill('input#title', 'playwright test');
  await page.selectOption('select#priorityDropdown', { label: 'High' });
  await page.fill('input#dateInput', '2023-01-20'); 

  // Click the "Add Task" button
  await page.click('button[type="submit"]#addTaskButton');
});


const { test, expect } = require('@playwright/test');

test('Filter by Priority Test', async ({ page }) => {
  // Navigate to your app or interact with your app as needed
  await page.goto('http://localhost:3000');

  // Select "low" from the priority filter dropdown
  await page.selectOption('select#priorityFilter', 'low');

  // Wait for the tasks to be filtered (you might need to add a wait logic here)

  // Perform assertions to verify the expected behavior
  const filteredTasks = await page.$$('.task'); // Replace '.task' with the actual selector for your task items
  await expect(filteredTasks.length).toBeGreaterThan(0);

  // Check if each task has the correct priority
  for (const task of filteredTasks) {
    const taskPriority = await task.$eval('.priority', (priority) => priority.textContent);
    await expect(taskPriority).toBe('low');
  }
});
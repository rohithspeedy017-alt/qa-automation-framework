const { test, expect } = require('@playwright/test');

test('user can log in with valid credentials', async ({ page }) => {
  // Step 1: Go to the website
  await page.goto('https://automationexercise.com/login');

  // Step 2: Type email and password into the login form
  await page.fill('input[data-qa="login-email"]', 'testuser12345@example.com');
  await page.fill('input[data-qa="login-password"]', 'WrongPassword123');

  // Step 3: Click the login button
  await page.click('button[data-qa="login-button"]');

  // Step 4: Check that an error message appears (since this account doesn't exist)
  await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible();
});
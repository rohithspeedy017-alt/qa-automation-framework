const { test, expect } = require('@playwright/test');

test('user can search for a product', async ({ page }) => {
  // Step 1: Go to the products page
  await page.goto('https://automationexercise.com/products');

  // Step 2: Type into the search box
  await page.fill('#search_product', 'Dress');

  // Step 3: Click the search icon/button
  await page.click('#submit_search');

  // Step 4: Check that search results heading appears
  await expect(page.locator('text=Searched Products')).toBeVisible();

  // Step 5: Check that at least one product card shows up
  await expect(page.locator('.product-image-wrapper')).not.toHaveCount(0);
});
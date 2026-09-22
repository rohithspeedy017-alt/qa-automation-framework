const { test, expect } = require('@playwright/test');

test('product from API matches what is shown on the website', async ({ page, request }) => {
  // Step 1: Ask the API for the list of products
  const response = await request.get('https://automationexercise.com/api/productsList');
  const body = await response.json();

  // Step 2: Pick the first product's name from the API response
  const firstProductName = body.products[0].name;

  // Step 3: Now open the actual website's products page
  await page.goto('https://automationexercise.com/products');

  // Step 4: Check that this exact product name appears somewhere on the real page
  await expect(page.locator(`text=${firstProductName}`).first()).toBeVisible();
});
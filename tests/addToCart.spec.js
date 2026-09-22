const { test, expect } = require('@playwright/test');

test('user can add a product to cart', async ({ page }) => {
  // Step 1: Go to the products page
  await page.goto('https://automationexercise.com/products');

  // Step 2: Hover over the first product to reveal the "Add to cart" button
  await page.locator('.product-image-wrapper').first().hover();

  // Step 3: Click "Add to cart" on the first product
  await page.locator('.product-image-wrapper').first().locator('text=Add to cart').first().click();

  // Step 4: A popup appears — click "Continue Shopping" to close it
  await page.click('text=Continue Shopping');

  // Step 5: Go to the cart page
  await page.click('a[href="/view_cart"]');

  // Step 6: Check that the cart page shows at least one product
  await expect(page.locator('#cart_info table tbody tr')).not.toHaveCount(0);
});

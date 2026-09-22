const { test, expect } = require('@playwright/test');

test('user can proceed from cart to checkout', async ({ page }) => {
  // Step 1: Go to products page
  await page.goto('https://automationexercise.com/products');

  // Step 2: Add the first product to cart
  await page.locator('.product-image-wrapper').first().hover();
  await page.locator('.product-image-wrapper').first().locator('text=Add to cart').first().click();
  await page.click('text=Continue Shopping');

  // Step 3: Go to the cart page
  await page.click('a[href="/view_cart"]');

  // Step 4: Confirm the product and its price are visible in the cart
  await expect(page.locator('#cart_info table tbody tr')).toHaveCount(1);
  await expect(page.locator('.cart_price')).toBeVisible();

  // Step 5: Click "Proceed To Checkout"
  await page.click('text=Proceed To Checkout');

  // Step 6: Since we're not logged in, the site shows a message asking us to log in/register
  await expect(page.getByRole('link', { name: 'Register / Login' })).toBeVisible();
});
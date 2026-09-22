const { test, expect } = require('@playwright/test');

test('API returns list of products', async ({ request }) => {
  // Step 1: Send a GET request directly to the products API endpoint
  const response = await request.get('https://automationexercise.com/api/productsList');

  // Step 2: Check that the server responded successfully (status code 200 means "OK")
  expect(response.status()).toBe(200);

  // Step 3: Read the actual data the server sent back
  const body = await response.json();

  // Step 4: Check that the response contains a list of products
  expect(body.products.length).toBeGreaterThan(0);

  // Step 5: Check that the first product has the fields we expect (like a real product should)
  expect(body.products[0]).toHaveProperty('id');
  expect(body.products[0]).toHaveProperty('name');
  expect(body.products[0]).toHaveProperty('price');
});
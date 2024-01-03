const { test, expect } = require("playwright/test");

test("valid login and search", async function ({ page }) {
  // Login
  await page.goto("https://swiftink-angular-git-staging-swiftink.vercel.app/login");

  await page.waitForSelector('input[placeholder="enter your email"]');
  await page.locator('input[placeholder="enter your email"]').fill('sulaiman.ghori@outlook.com');

  await page.waitForSelector('input[placeholder="enter your password"]');
  await page.locator('input[placeholder="enter your password"]').fill('EMsGtMrd2XaGHa');
  const initialUrl = page.url();
  await page.locator('text=Log in').click();

  await page.waitForTimeout(5000);
  await page.locator('input[class="bulk-select-checkbox"]').check();
  await page.waitForTimeout(5000);
  expect(await page.locator('input[class="bulk-select-checkbox"]')).toBeChecked();

  await page.locator('app-download-delete').getByText('delete_outline').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  // Adjust the selector based on your HTML structure
  //await page.waitForSelector('.Successfully.downloaded');
  await page.waitForSelector('.toast-success');
});

import { test } from 'playwright/test';
import LoginPages, { validCredentials } from '../Pages/LoginPages';

test('test', async ({ page }) => {
  const login = new LoginPages(page);
  await login.gotoLoginPage();
  await login.login(validCredentials.username, validCredentials.password);
  
  // You may not need this timeout, but it depends on your application behavior
  await page.waitForTimeout(5000);

  // Call the validateSuccessfulLogin method separately
  await login.validateSuccessfulLogin();
// const { test, expect } = require("playwright/test");

// test("valid login and search", async function ({ page }) {
//   // Login
//   await page.goto("https://swiftink-angular-git-staging-swiftink.vercel.app/login");

//   await page.waitForSelector('input[placeholder="enter your email"]');
//   await page.locator('input[placeholder="enter your email"]').fill('sulaiman.ghori@outlook.com');

//   await page.waitForSelector('input[placeholder="enter your password"]');
//   await page.locator('input[placeholder="enter your password"]').fill('EMsGtMrd2XaGHa');
//   const initialUrl = page.url();
//   await page.locator('text=Log in').click();

  await page.waitForTimeout(5000);
  await page.locator('input[class="bulk-select-checkbox"]').check();

  expect(await page.locator('input[class="bulk-select-checkbox"]')).toBeChecked();

  await page.waitForTimeout(5000);
  await page.locator(".bg-misc-BGblue > .relative ").click(); // dropdown
  await page.locator(".z-10>:nth-child(1)").click(); // MP3
  await page.locator(".bg-misc-BGblue > .relative ").click();
  await page.locator(".z-10>:nth-child(2)").click(); // TXT
  await page.locator(".bg-misc-BGblue > .relative ").click();
  await page.locator(".z-10>:nth-child(3)").click(); // SRT
  await page.locator(".bg-misc-BGblue > .relative ").click();
  await page.locator(".z-10>:nth-child(4)").click(); // VTT
  
  // Delete

  //await page.locator('app-download-delete').getByText('delete_outline').click();
  //await page.getByRole('button', { name: 'Delete' }).click();
  
  // Adjust the selector based on your HTML structure
  //await page.waitForSelector('.Successfully.downloaded');
  await page.waitForSelector('.toast-success');
});

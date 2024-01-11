
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
  // Wait for the page to load after login
  await page.waitForLoadState('domcontentloaded');

  // Input a search query into the search bar
  await page.waitForSelector('input[type="search"]');
  const searchQuery = "sample";
  await page.fill('input[type="search"]', searchQuery);
  await page.waitForTimeout(5000);
  // Trigger the search action (you might need to adjust the selector)
  //await page.press('input[type="search"]', 'Enter');

  // Wait for the search results to load with an increased timeout
  //console.log('Before waitForSelector');
 // await page.waitForSelector('.sample', { timeout: 10000 });
  //console.log('After waitForSelector');

  // Verify that the search results contain relevant information
  //const searchResults = await page.$$('.sample');
 // expect(searchResults.length).toBeGreaterThan(0);

  // Additional assertions or actions based on the search results
});

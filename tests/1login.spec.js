const { test, expect } = require("playwright/test");

test("valid login", async function ({ page }) {
  await page.goto("https://swiftink-angular-git-qa-swiftink.vercel.app/login");

  await page.waitForSelector('input[placeholder="enter your email"]');
  await page.locator('input[placeholder="enter your email"]').fill('noor.najeeb@enterprise64.com');
  await page.waitForSelector('input[placeholder="enter your password"]');
  await page.locator('input[placeholder="enter your password"]').fill('Admin$11');

  // Capture the URL before clicking login
  const initialUrl = page.url();

  await page.locator('text=Log in').click();

  // Wait for navigation to complete
  await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);
  const url = await page.url();
  console.log("Initial URL:", initialUrl);
  console.log("Current URL:", url);

  expect(url).toBe("https://swiftink-angular-git-qa-swiftink.vercel.app/dashboard/transcripts");
});

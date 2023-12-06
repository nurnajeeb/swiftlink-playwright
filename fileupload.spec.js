const { test, expect } = require("playwright/test");

test("valid login", async function ({ page }) {
  await page.goto("https://swiftink-angular-git-staging-swiftink.vercel.app/login");
  await page.waitForSelector('input[placeholder="enter your email"]');
  await page.locator('input[placeholder="enter your email"]').fill('sulaiman.ghori@outlook.com');
  await page.waitForSelector('input[placeholder="enter your password"]');
  await page.locator('input[placeholder="enter your password"]').fill('EMsGtMrd2XaGHa');
  await page.locator('text="Log in"').click();

  // Click on the "Upload file" element
  await page.click('text="Upload file"');

  // Wait for the page to be in the 'load' state
  await page.waitForLoadState('load');

  // Set input files directly
  await page.setInputFiles('input[type="file"]', ["C:\\Users\\NoorNajeeb\\Downloads\\Tu-Hai-Kahan(PaglaSongs) (1) (1).MP3"]);4
  await page.waitForTimeout(5000);
  
});

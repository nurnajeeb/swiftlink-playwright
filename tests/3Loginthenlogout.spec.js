const { test, expect } = require("playwright/test");

test("valid loginthenlogout", async function ({ page }) {
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
  const urlBeforeLogout = await page.url();
  console.log("Initial URL:", initialUrl);
  console.log("Current URL before logout:", urlBeforeLogout);

  expect(urlBeforeLogout).toBe("https://swiftink-angular-git-qa-swiftink.vercel.app/dashboard/transcripts");

  // Corrected selector and waiting strategy
  await page.waitForSelector('.group.hover\\:cursor-pointer');
  await page.click('.group.hover\\:cursor-pointer');

  // Use the response event to capture the URL after "Log out" click
  const [response] = await Promise.all([
    page.waitForResponse(response => response.url().includes('logout')), // Adjust the URL pattern accordingly
    page.locator('text=Log out').click(),
  ]);

  // Define textAfterLogout before using it
  const textAfterLogout = await page.url();
  console.log("Text content after logout:", textAfterLogout);
  expect(textAfterLogout).toBe("https://swiftink-angular-git-qa-swiftink.vercel.app/login");
});

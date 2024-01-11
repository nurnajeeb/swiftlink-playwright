// const { test, expect } = require("playwright/test");

// test("valid login", async function ({ page }) {
//   await page.goto("https://swiftink-angular-git-staging-swiftink.vercel.app/login");

//   await page.waitForSelector('input[placeholder="enter your email"]');
//   await page.locator('input[placeholder="enter your email"]').fill('noor.najeeb@enterprise64.com');
//   await page.waitForSelector('input[placeholder="enter your password"]');
//   await page.locator('input[placeholder="enter your password"]').fill('Admin$11');

//   // Capture the URL before clicking login
//   const initialUrl = page.url();

//   await page.locator('text=Log in').click();

//   // Wait for navigation to complete
//   await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
//   await page.waitForTimeout(5000);
//   const url = await page.url();
//   console.log("Initial URL:", initialUrl);
//   console.log("Current URL:", url);

//   expect(url).toBe("https://swiftink-angular-git-staging-swiftink.vercel.app/dashboard/transcripts");
// });

// import { test, expect} from 'playwright/test';
// import { LoginPages } from '../Pages/LoginPages';


// test ('test' , async({ page }) =>{
  
//   const login=new loginPage(page);
//   await login.gotoLoginPage();
//   await login.login('noor.najeeb@enterprise64.com','Admin$11')


// })

// Import the class without curly braces since it's the default export
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
});


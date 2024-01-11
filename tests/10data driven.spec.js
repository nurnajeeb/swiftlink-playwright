// const { test, expect } = require('playwright/test');
// const testdata= JSON.parse(JSON.stringify(require("../credentials.json")));
// test('login application', async ({ page }) => {
//   await page.goto('https://swiftink-angular-git-staging-swiftink.vercel.app/dashboard/transcripts');
//   await page.locator('input[placeholder="enter your email"]').fill(testdata[0].username); // Adjust index accordingly
//   await page.locator('input[placeholder="enter your password"]').fill(testdata[0].password); // Adjust index accordingly
//   page.locator('text=Log in').click(),
//   await page.waitForTimeout(5000);
// });
//---

// const { test, expect } = require('playwright/test');
// const testdata = JSON.parse(JSON.stringify(require("../credentials.json")));
// test.describe("data driven login test", function()
// {
//     for(const data of testdata)
//     {
//         test.describe(`login with users ${data.ID}`, function()

//        // testdata.forEach((data, index) => {
//             test(`Login application - Test Case ${index + 1}`, async ({ page }) => {
//               await page.goto('https://swiftink-angular-git-staging-swiftink.vercel.app/dashboard/transcripts');
//               await page.waitForTimeout(5000);
//               // Use the email and password from the current data set
//               await page.locator('input[placeholder="enter your email"]').fill(testdata.username);
//               await page.locator('input[placeholder="enter your password"]').fill(testdata.password);
//               await page.locator('text=Log in').click();
          
//               // Adjust the timeout as needed
//               await page.waitForTimeout(5000);
        
//             })
//             )}
// })

//--------
// testdata.forEach((data, index) => {
//   test(`Login application - Test Case ${index + 1}`, async ({ page }) => {
//     await page.goto('https://swiftink-angular-git-staging-swiftink.vercel.app/dashboard/transcripts');
//     await page.waitForTimeout(5000);
//     // Use the email and password from the current data set
//     await page.locator('input[placeholder="enter your email"]').fill(testdata.username);
//     await page.locator('input[placeholder="enter your password"]').fill(testdata.password);
//     await page.locator('text=Log in').click();

//     // Adjust the timeout as needed
//     await page.waitForTimeout(5000);

    // Add your expectations or additional test steps here
//   });
// });
// ---
// import { test, expect } from '@playwright/test';
// const credentials = require("../credentials.json");

// test.describe("data driven login test", function() {
//     for (const data of credentials) 
//     {
//       test.describe(`login with user ${data.id}`, function() 
//       {
//         test(`Login to application`, async ({ page }) => {
          
          
//             await page.goto('https://swiftink-angular-git-staging-swiftink.vercel.app/dashboard/transcripts');
//           await page.waitForTimeout(5000);
//           // Use the email and password from the current data set
//           await page.locator('input[placeholder="enter your email"]').fill(data.username);
//           await page.locator('input[placeholder="enter your password"]').fill(data.password);
//           await page.locator('text=Log in').click();
  
//           // Adjust the timeout as needed
//           await page.waitForTimeout(5000);
//           // Add your expectations or additional test steps here
//         });
//       });
//     }
//   });
import { test } from '@playwright/test';
const credentials = require("../credentials.json");

test.describe("Data-driven login test", () => {
  for (const data of credentials) {
    test.describe(`Login with user ${data.id}`, () => {
      test("Login to application", async ({ page }) => {
        await page.goto('https://swiftink-angular-git-staging-swiftink.vercel.app/dashboard/transcripts');
        await page.waitForTimeout(5000);
        // Use the email and password from the current data set
        await page.locator('input[placeholder="enter your email"]').fill(data.username);
        await page.locator('input[placeholder="enter your password"]').fill(data.password);
        await page.locator('text=Log in').click();
  
        // Adjust the timeout as needed
        await page.waitForTimeout(5000);
        // Add your expectations or additional test steps here
      });
    });
  }
});

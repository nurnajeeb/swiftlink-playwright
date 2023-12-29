// const { test, expect } = require("playwright/test");

// // Positive Test: Valid Login and Navigate to Dashboard
// test("valid login", async function ({ page }) {
//     await page.goto("https://swiftink-angular-git-qa-swiftink.vercel.app/login");
  
//     await page.waitForSelector('input[placeholder="enter your email"]');
//     await page.locator('input[placeholder="enter your email"]').fill('noor.najeeb@enterprise64.com');
//     await page.waitForSelector('input[placeholder="enter your password"]');
//     await page.locator('input[placeholder="enter your password"]').fill('Admin$11');
  
//     // Capture the URL before clicking login
//     const initialUrl = page.url();
  
//     await page.locator('text=Log in').click();
  
//     // Wait for navigation to complete
//     await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
//     await page.waitForTimeout(5000);
//     const url = await page.url();
//     console.log("Initial URL:", initialUrl);
//     console.log("Current URL:", url);
  
//     expect(url).toBe("https://swiftink-angular-git-qa-swiftink.vercel.app/dashboard/transcripts");
//   });
  

// // Negative Test: Invalid Login
// test("valid login", async function ({ page }) {
//     await page.goto("https://swiftink-angular-git-qa-swiftink.vercel.app/login");
  
//     await page.waitForSelector('input[placeholder="enter your email"]');
//     await page.locator('input[placeholder="enter your email"]').fill('noor.najeeb@enterprise64.com');
//     await page.waitForSelector('input[placeholder="enter your password"]');
//     await page.locator('input[placeholder="enter your password"]').fill('Admin$11');
  
//     // Capture the URL before clicking login
//     const initialUrl = page.url();
  
//     await page.locator('text=Log in').click();
  
//     // Wait for navigation to complete
//     await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
//     await page.waitForTimeout(5000);
//     const url = await page.url();
//     console.log("Initial URL:", initialUrl);
//     console.log("Current URL:", url);
  
//     expect(url).toBe("https://swiftink-angular-git-qa-swiftink.vercel.app/dashboard/transcripts");
//   });
  
//   // Negative Test: Invalid Login
//   test("invalid login", async function ({ page }) {
//     await page.goto("https://swiftink-angular-git-qa-swiftink.vercel.app/login");
  
//     await page.waitForSelector('input[placeholder="enter your email"]');
//     await page.locator('input[placeholder="enter your email"]').fill('invalid.email@example.com'); // Provide an invalid email
  
//     await page.waitForSelector('input[placeholder="enter your password"]');
//     await page.locator('input[placeholder="enter your password"]').fill('invalid-password'); // Provide an invalid password
  
//     // Capture the URL before clicking login
//     const initialUrl = page.url();
  
//     // Use page.click instead of page.waitForNavigation
//     await Promise.all([
//       page.waitForResponse(response => response.url().includes('login')), // Adjust the URL pattern accordingly
//       page.locator('text=Log in').click(),
//     ]);
  
//     // Verify the presence of the toaster with the message "Incorrect Username or Password"
//     try {
//       await page.waitForSelector('.toast-message', { timeout: 5000 }); // Increase the timeout if needed
//       const toasterMessage = await page.innerText('.toast-message'); // Replace with the actual selector of the toaster
//       expect(toasterMessage).toBe("Incorrect Username or Password");
//     } catch (error) {
//       // Handle the error if the toaster message is not found within the timeout
//       console.error("Toaster message not found within the timeout.");
//     }
  
//     const url = await page.url();
//     console.log("Initial URL:", initialUrl);
//     console.log("Current URL:", url);
  
//     // For negative testing, you might expect a different URL or some error message on the login page
//     expect(url).not.toBe("https://swiftink-angular-git-qa-swiftink.vercel.app/dashboard/transcripts");
//     // You can customize this expectation based on your application's behavior for invalid logins
//   });
  
//   // Negative Test: Invalid Email Format
//   test("invalid email format", async function ({ page }) {
//     await page.goto("https://swiftink-angular-git-qa-swiftink.vercel.app/login");
  
//     // Provide an invalid email format
//     await page.waitForSelector('input[placeholder="enter your email"]');
//     await page.locator('input[placeholder="enter your email"]').fill('invalid-email-format'); 
  
//     // Provide a valid password
//     await page.waitForSelector('input[placeholder="enter your password"]');
//     await page.locator('input[placeholder="enter your password"]').fill('valid-password');
  
//     // Capture the URL before clicking login
//     const initialUrl = page.url();
  
//     // Use page.click instead of page.waitForNavigation
//     await Promise.all([
//       page.waitForResponse(response => response.url().includes('login')), // Adjust the URL pattern accordingly
//       page.locator('text=Log in').click(),
//     ]);
  
//     // Verify the presence of the toaster with the message "Incorrect Username or Password"
//     try {
//       await page.waitForSelector('.toast-message', { timeout: 5000 }); // Increase the timeout if needed
//       const toasterMessage = await page.innerText('.toast-message'); // Replace with the actual selector of the toaster
//       expect(toasterMessage).toBe("Incorrect Username or Password");
//     } catch (error) {
//       // Handle the error if the toaster message is not found within the timeout
//       console.error("Toaster message not found within the timeout.");
//     }
  
//     const url = await page.url();
//     console.log("Initial URL:", initialUrl);
//     console.log("Current URL:", url);
  
//     // For negative testing, you might expect a different URL or some error message on the login page
//     expect(url).not.toBe("https://swiftink-angular-git-qa-swiftink.vercel.app/dashboard/transcripts");
//     // You can customize this expectation based on your application's behavior for invalid email format
//   });
  
//   // Negative Test for login
//   test("empty email and password", async function ({ page }) {
//     await page.goto("https://swiftink-angular-git-qa-swiftink.vercel.app/login");
  
//     // Provide an empty email and password
//     await page.waitForSelector('input[placeholder="enter your email"]');
//     await page.locator('input[placeholder="enter your email"]').fill(''); 
  
//     await page.waitForSelector('input[placeholder="enter your password"]');
//     await page.locator('input[placeholder="enter your password"]').fill('');
  
//     // Capture the URL before clicking login
//     const initialUrl = page.url();
  
//     // Use page.click instead of page.waitForNavigation
//     await Promise.all([
//       page.waitForResponse(response => response.url().includes('login')), // Adjust the URL pattern accordingly
//       page.locator('text=Log in').click(),
//     ]);
  
//     // Verify the presence of the toaster with the message "Incorrect Username or Password"
//     try {
//       await page.waitForSelector('.toast-message', { timeout: 5000 }); // Increase the timeout if needed
//       const toasterMessage = await page.innerText('.toast-message'); // Replace with the actual selector of the toaster
//       expect(toasterMessage).toBe("Incorrect Username or Password");
//     } catch (error) {
//       // Handle the error if the toaster message is not found within the timeout
//       console.error("Toaster message not found within the timeout.");
//     }
  
//     const url = await page.url();
//     console.log("Initial URL:", initialUrl);
//     console.log("Current URL:", url);
  
//     // For negative testing, you might expect a different URL or some error message on the login page
//     expect(url).not.toBe("https://swiftink-angular-git-qa-swiftink.vercel.app/dashboard/transcripts");
//     // You can customize this expectation based on your application's behavior for empty email and password
  
// });

// //Login then logout


// test("valid loginthenlogout", async function ({ page }) {
//   await page.goto("https://swiftink-angular-git-qa-swiftink.vercel.app/login");

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
//   const urlBeforeLogout = await page.url();
//   console.log("Initial URL:", initialUrl);
//   console.log("Current URL before logout:", urlBeforeLogout);

//   expect(urlBeforeLogout).toBe("https://swiftink-angular-git-qa-swiftink.vercel.app/dashboard/transcripts");

//   // Corrected selector and waiting strategy
//   await page.waitForSelector('.group.hover\\:cursor-pointer');
//   await page.click('.group.hover\\:cursor-pointer');

//   // Use the response event to capture the URL after "Log out" click
//   const [response] = await Promise.all([
//     page.waitForResponse(response => response.url().includes('logout')), // Adjust the URL pattern accordingly
//     page.locator('text=Log out').click(),
//   ]);

//   // Define textAfterLogout before using it
//   const textAfterLogout = await page.url();
//   console.log("Text content after logout:", textAfterLogout);
//   expect(textAfterLogout).toBe("https://swiftink-angular-git-qa-swiftink.vercel.app/login");
// });

// test("empty email and password", async function ({ page }) {
//   // ... your empty email and password code ...

//   // ... your negative assertions ...
// });

// // ... Add more negative test cases as needed ...

// // Additional Test: Valid Login, Logout, and Check Landing Page
// test("valid login, logout, and check landing page", async function ({ page }) {
//   // ... your valid login code ...

//   // ... your logout code ...

//   // ... your assertions for logout and landing page ...
// });

// // Additional Test: Valid Login, File Upload, and Check Success Message
// test("valid login, file upload, and check success message", async function ({ page }) {
//   // ... your valid login and file upload code ...

//   // ... your assertions for file upload success message ...
// });

// // Additional Test: Valid Login, Search, and Check Search Results
// test("valid login, search, and check search results", async function ({ page }) {
//   // ... your valid login and search code ...

//   // ... your assertions for search results ...
// });

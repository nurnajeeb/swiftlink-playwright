// // const { test, expect } = require("playwright/test");

// // test("valid login", async function ({ page }) {
// //   await page.goto("https://mail.google.com/mail/u/0/#inbox");

// //   await page.waitForTimeout(5000);
// //   await page.waitForSelector('id=identifierId');
// //  await page.locator('id=identifierId').fill('Noorep64@gmail.com');
// //  await page.getByRole('button', { name: 'Next' }).click();
// //  await page.waitForTimeout(50000);
// // //   await page.waitForSelector('input[placeholder="enter your password"]');
// // //   await page.locator('input[placeholder="enter your password"]').fill('Admin$11');

// // //   // Capture the URL before clicking login
// // //   const initialUrl = page.url();

// // //   await page.locator('text=Log in').click();

// // //   // Wait for navigation to complete
// // //   await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
// // //   await page.waitForTimeout(5000);
// // //   const url = await page.url();
// // //   console.log("Initial URL:", initialUrl);
// // //   console.log("Current URL:", url);

// // //   expect(url).toBe("https://swiftink-angular-git-qa-swiftink.vercel.app/dashboard/transcripts");
// // });
// const { test, expect, chromium } = require('@playwright/test');

// test('0CreateAccount', async ({ page }) => {
//     const browser = await chromium.launch({
//         headless: false,
//         args: ["--disable-dev-shm-usage"],
//     });

//     const context = await browser.newContext();

//     // Adjust the timeout based on your needs
//     await page.setDefaultTimeout(10000);

//     await page.goto("https://accounts.google.com/signin/v2/identifier?hl=en&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
//     await page.waitForTimeout(5000);

//     // Wait for the email input field and type the email
//     await page.waitForSelector('input[type="email"]');
//     await page.type('input[type="email"]', "Noorep64@gmail.com");

//     // Click the "Next" button after typing the email
//     await Promise.all([
//         page.waitForNavigation({ waitUntil: "domcontentloaded" }),
//         page.click("#identifierNext"),
//     ]);

//     // Wait for the password input field and type the password
//     await page.waitForSelector('input[type="password"]', { visible: true });
//     await page.type('input[type="password"]', "746348724277");

//     // Click the "Next" button after typing the password
//     await Promise.all([
//         page.waitForNavigation({ waitUntil: "domcontentloaded" }),
//         page.click("#passwordNext"),
//     ]);

//     // You are now logged in; you can perform additional actions if needed

//     // Close the browser
//     await browser.close();
// });
const { test, expect } = require('@playwright/test');

const emails = ['noore.p.64@gmail.com']; // Add more emails as needed

for (const email of emails) {
  test(`Signup with Email: ${email}`, async ({ page }) => {
    await page.goto('https://swiftink-angular-git-qa-swiftink.vercel.app/signup');
    
    await page.fill('[placeholder="enter your full name"]', 'noor');
    await page.fill('[placeholder="enter your email"]', email);
    await page.fill('[placeholder="your password"]', 'Admin$11');
    await page.click('button:has-text("Signup")');
    await page.waitForTimeout(5000);
    // Assuming the 'Error creating account' label is displayed in case of an error
    //const errorLabel = await page.$('[aria-label="Error creating account"]');
    
    //await page.getByLabel('Account Created').click();
    const toastMessage = await page.$('[id=toast-container]');
    // Validate if there was an error message
    //await expect(errorLabel).not.toBeNull();
  });
}

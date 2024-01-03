// const { test, expect } = require("playwright/test");

// class LoginPage {
//   constructor(page) {
//     this.page = page;
//     this.Username_Textbox = page.waitForSelector('input[placeholder="enter your email"]');
//     this.Password_Textbox = page.waitForSelector('input[placeholder="enter your password"]');
//     this.login_button = page.locator('text=Log in');
//   }

//   async login(username, password) {
//     await this.page.fill(this.Username_Textbox, username);
//     await this.page.fill(this.Password_Textbox, password);
//     await this.page.click(this.login_button);
//   }
// }

// test("valid login", async function ({ page }) {
//   const loginPage = new LoginPage(page);

//   // Navigate to the login page
//   await page.goto("https://swiftink-angular-git-qa-swiftink.vercel.app/login");

//   // Perform login using the LoginPage class
//   await loginPage.login('noor.najeeb@enterprise64.com', 'Admin$11');

//   // Capture the URL after clicking login
//   const finalUrl = page.url();

//   // Add your assertions based on the expected behavior after login
//   expect(finalUrl).not.toEqual(initialUrl); // Example assertion
// });

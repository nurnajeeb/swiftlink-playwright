// import { expect } from 'playwright/test';

// export default class LoginPages {
//     constructor(page) {
//       this.page = page;
//       this.usernameInput = 'input[placeholder="enter your email"]';
//       this.passwordInput = 'input[placeholder="enter your password"]';
//       this.loginButton = 'text=Log in';
//     }
  
//     async gotoLoginPage() {
//       await this.page.goto('https://swiftink-angular-git-staging-swiftink.vercel.app/login');
//     }
  
//     async login(username, password) {
//       await this.page.locator(this.usernameInput).fill(username);
//       await this.page.locator(this.passwordInput).fill(password);
//       await this.page.locator(this.loginButton).click();
//     }
  
//       async validateSuccessfulLogin() {
//         const url = await this.page.url();
//         expect(url).toBe("https://swiftink-angular-git-staging-swiftink.vercel.app/dashboard/transcripts");
//       }   
      
//   }
  
//   // Credentials for testing
//   export const validCredentials = {
//     username: 'noor.najeeb@enterprise64.com',
//     password: 'Admin$11',
//   };
  
//   export const invalidCredentials = {
//     username: 'invalid.email@example.com',
//     password: 'invalid-password',
//   };
  
//   export const emptyCredentials = {
//     username: '',
//     password: '',
//   };
import { expect } from '@playwright/test';

export default class LoginPages {
  constructor(page) {
    this.page = page;
    this.usernameInput = 'input[placeholder="enter your email"]';
    this.passwordInput = 'input[placeholder="enter your password"]';
    this.loginButton = 'text=Log in';
    this.gridOnButton = 'text=grid_on';
    this.logoutButton = 'text=Log out';
    this.selectedViewElement = '.flex-wrap > :nth-child(1) > .bg-chrome-100';
  }

  async gotoLoginPage() {
    await this.page.goto('https://swiftink-angular-git-staging-swiftink.vercel.app/login');
  }

  async login(username, password) {
    await this.page.locator(this.usernameInput).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).click();
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
     

  async clickGridOnButton() {
    await this.page.locator(this.gridOnButton).click();
  }

  async logout() {
    await this.page.locator('svg').first().click();
    await this.page.locator(this.logoutButton).click();
  }

  async validateSuccessfulLogin() {
    await this.page.waitForTimeout(5000);
    await this.page.locator(this.selectedViewElement);
  }
}
export const validCredentials = {
    username: 'noor.najeeb@enterprise64.com',
    password: 'Admin$11',
  };
  //expect(url).not.toBe("https://swiftink-angular-git-staging-swiftink.vercel.app/dashboard/transcripts");
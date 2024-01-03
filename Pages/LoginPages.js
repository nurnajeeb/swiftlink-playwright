// export.LoginPages = class LoginPages{
//     constructor(page) {
//         this.page = page;
//         this.loginLink = "";
//         this.usernameInput = 'input[placeholder="enter your email"]';
//         this.passwordInput = 'input[placeholder="enter your password"]';
//         this.loginButton = 'text=Log in';

//     }
//     async gotoLoginPage(){
//         await this.page.goto('https://swiftink-angular-git-staging-swiftink.vercel.app/login');
//     }
//     async login(username, password){

//         await this.page.locator(this.loginLink).click();
//         await this.page.locator(this.usernameInput).fill(username);
//         await this.page.locator(this.passwordInput).fill(password);
//         await this.page.locator(this.loginButton).click();
//     }

// }

export default class LoginPages {
    constructor(page) {
      this.page = page;
      this.usernameInput = 'input[placeholder="enter your email"]';
      this.passwordInput = 'input[placeholder="enter your password"]';
      this.loginButton = 'text=Log in';
    }
  
    async gotoLoginPage() {
      await this.page.goto('https://swiftink-angular-git-staging-swiftink.vercel.app/login');
    }
  
    async login(username, password) {
      await this.page.locator(this.usernameInput).fill(username);
      await this.page.locator(this.passwordInput).fill(password);
      await this.page.locator(this.loginButton).click();
    }
  }
  
  // Credentials for testing
  export const validCredentials = {
    username: 'noor.najeeb@enterprise64.com',
    password: 'Admin$11',
  };
  
  export const invalidCredentials = {
    username: 'invalid.email@example.com',
    password: 'invalid-password',
  };
  
  export const emptyCredentials = {
    username: '',
    password: '',
  };
  
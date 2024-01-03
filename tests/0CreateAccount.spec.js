const { test, expect } = require('@playwright/test');

const emails = ['noore.p.64@gmail.com']; // Add more emails as needed

for (const email of emails) {
  test(`Signup with Email: ${email}`, async ({ page }) => {
    await page.goto('https://swiftink-angular-git-staging-swiftink.vercel.app/signup');
    
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

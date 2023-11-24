const {test, expect} = require("playwright/test")
test ("valid login", async function ({page}){
    await page.goto("https://swiftink-angular-git-staging-swiftink.vercel.app/login")
    await page.waitForSelector('input[placeholder="enter your email"]')
    await page.locator('input[placeholder="enter your email"]').fill ('sulaiman.ghori@outlook.com')
    await page.waitForSelector('input[placeholder="enter your password"]')
    await page.locator('input[placeholder="enter your password"]').fill ('EMsGtMrd2XaGHa')
    await page.locator ('text="Log in"').click()


})
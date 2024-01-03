const { test, expect } = require("playwright/test");

test("valid login and file upload", async function ({ page }) {
    console.log("Navigating to the login page");
    await page.goto("https://swiftink-angular-git-staging-swiftink.vercel.app/login");

    // Wait for the login page to load
    await page.waitForLoadState('domcontentloaded');

    // Perform login steps
    await page.waitForSelector('input[placeholder="enter your email"]');
    await page.locator('input[placeholder="enter your email"]').fill('sulaiman.ghori@outlook.com');
    await page.waitForSelector('input[placeholder="enter your password"]');
    await page.locator('input[placeholder="enter your password"]').fill('EMsGtMrd2XaGHa');

    await page.locator('text="Log in"').click();

    // Wait for the page to load after login
    await page.waitForLoadState('domcontentloaded');

    console.log("Clicking on 'Upload file' element");
    await page.click('text="Upload file"', { timeout: 300000 });

    console.log("Waiting for the page to be in the 'domcontentloaded' state");
    await page.waitForLoadState('domcontentloaded');

    // Set multiple input files
    const filesToUpload = [
        "C:\\Users\\NoorNajeeb\\Downloads\\Tu-Hai-Kahan(PaglaSongs) (1) (1).mp3",
        "C:\\Users\\NoorNajeeb\\Downloads\\EXCITED To Join  (1) (1).mp4"
    ];

    console.log("Setting multiple input files");
    await page.setInputFiles('input[type="file"]', filesToUpload);

    // Wait for the toast message indicating a successful upload
    try {
        await page.waitForSelector('.toast-success', { timeout: 30000 });
        console.log("Toast message appeared");

        // Get the text content of the success message element
        const toastMessage = await page.$eval('.toast-success', (element) => element.textContent);

        // Verify the "Successfully uploaded" message for each file
        for (const file of filesToUpload) {
            const expectedMessage = `Successfully uploaded ${file.replace(/^.*[\\\/]/, '')}`;
            if (toastMessage.includes(expectedMessage)) {
                console.log(`Successfully uploaded: ${file}`);
            } else {
                console.error(`Verification failed for file: ${file}`);
            }
        }

        console.log("Test passed!");
    } catch (error) {
        console.error("Timeout waiting for the toast message");
        throw error; // Rethrow the error to mark the test as failed
    }
});

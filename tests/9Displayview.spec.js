import { test, expect } from '@playwright/test';

test('Test Login Flow and Select "grid_on" Button', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://swiftink-angular-git-staging-swiftink.vercel.app/login');

  // Log in
  await page.getByPlaceholder('enter your email').click();
  await page.getByPlaceholder('enter your email').fill('sulaiman.ghori@outlook.com');
  await page.getByPlaceholder('enter your password').click();
  await page.getByPlaceholder('enter your password').fill('EMsGtMrd2XaGHa');
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.waitForTimeout(5000);
  // Click on "grid_on" button
  await page.getByText('grid_on').click();

  // Log out
  await page.locator('svg').first().click();
  await page.getByText('Log out').click();

  // Log in again
  await page.getByPlaceholder('enter your email').click();
  await page.getByPlaceholder('enter your email').fill('sulaiman.ghori@outlook.com');
  await page.getByPlaceholder('enter your password').click();
  await page.getByPlaceholder('enter your password').fill('EMsGtMrd2XaGHa');
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.waitForTimeout(5000);
  await page.locator('.flex-wrap > :nth-child(1) > .bg-chrome-100');
  // Wait for the ".selected-view" element to be visible
  // await page.waitForFunction(() => {
  //   const element = document.querySelector('.selected-view');
  //   return element && window.getComputedStyle(element).visibility === 'visible';
  // });

  // // Verify that "grid_on" button is selected
  // const selectedViewElement = await page.$('.selected-view');
  // const isGridOnButtonSelected = selectedViewElement ? await selectedViewElement.textContent() : null;

  // // Expect the selected view to be 'grid_on'
  // expect(isGridOnButtonSelected).toBe('grid_on');
});

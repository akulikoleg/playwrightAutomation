import { test as setup, expect } from '@playwright/test';

const authFile = './.auth/userLocalCoding.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://coding.pasv.us/user/login');
  await page.locator('//input[@placeholder=\'Email\']').fill('oaculov@gmail.com');
  await page.locator('//input[@id=\'normal_login_password\']').fill('029721275hH');
  await page.locator('//button[@type=\'submit\']').click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.

  //await page.waitForURL('https://coding.pasv.us/profile/');

  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await page.screenshot({path: `screen/authenticatePASV.png`});
  // End of authentication steps.
  await expect(page.locator('//*[@class=\'ms-2 me-2\']')).toHaveText('OLEG ACULOV');


  await page.context().storageState({ path: authFile });


});

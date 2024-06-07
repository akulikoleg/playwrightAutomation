import { expect, test } from "@playwright/test"


test.describe("POPUP WINDOW ", () => {

  test('pop-up window accept test', async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.pause();
    page.on('dialog', dialog => dialog.accept());
    await page.locator('#confirmbtn').click();

  } )


  test('pop-up window dismiss test', async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.pause();
    page.on('dialog', dialog => dialog.dismiss());
    await page.locator('#confirmbtn').click();

  } )



})
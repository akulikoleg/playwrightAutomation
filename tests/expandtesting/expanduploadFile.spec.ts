import {expect, test as it} from '@playwright/test'


it('upload file more than 500kb', async ({page})=> {

  await page.goto('https://practice.expandtesting.com/upload#google_vignette');
  await page.setInputFiles('#fileInput' , './upload/file_example_501kB.png');
  await expect( page.locator("//*[@id=\'flash\']")).toContainText('File too large, please select a file less than 500KB');
  await expect( page.locator("//*[@id=\'flash\']")).toHaveCSS('background-color', 'rgb(248, 215, 218)');
 // await page.reload();
})

it('upload file less than 500kb', async ({page})=> {

  await page.goto('https://practice.expandtesting.com/upload#google_vignette');
  await page.setInputFiles('#fileInput' , './upload/file_example_315kB.jpeg');
  await page.getByTestId("file-submit").click();
  await expect( page.locator("//h1")).toContainText('File Uploaded!');
  await expect( page.locator("//*[@id=\"uploaded-files\"]")).toHaveCSS('background-color', 'rgb(207, 244, 252)');



})
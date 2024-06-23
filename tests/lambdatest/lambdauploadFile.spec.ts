import {expect, test as it} from "@playwright/test"

it("Lambdatest upload file png format", async ({page}) => {

  await page.goto('https://www.lambdatest.com/selenium-playground/upload-file-demo');
  await page.setInputFiles('//input[@id=\'file\']', './upload/3.png' );
  await expect(page.locator('//*[@id=\'error\']')).toContainText('File Successfully Uploaded');
  await expect(page.locator('//*[@id=\'error\']')).toHaveCSS("color", "rgb(0, 128, 0)");

})


it("Lambdatest upload file wrong format", async ({page}) => {

  await page.goto('https://www.lambdatest.com/selenium-playground/upload-file-demo');
  await page.setInputFiles('//input[@id=\'file\']', './upload/file_example_XLS_100.xls' );
  await expect(page.locator('//*[@id=\'error\']')).toContainText('File type should be pdf, png, jpeg or jpg');
  await expect(page.locator('//*[@id=\'error\']')).toHaveCSS("color", "rgb(255, 0, 0)");

})


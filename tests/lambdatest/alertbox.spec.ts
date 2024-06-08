import {test, expect} from '@playwright/test';

test.describe("Alertbox Homework", () => {

  test('Javascript alerts', async ({page})=> {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
    page.on('dialog', dialog => {
      dialog.accept();
      expect(dialog).toBeDefined();

    });
    await page.locator('//*[@class="btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900"]').click();


  })

   test('Confirm box', async ({page})=> {
     await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
     page.on('dialog', dialog => dialog.accept());
     await page.locator('//*[text()=\'Confirm box:\']/button').click();
     await expect(page.locator('//*[@id="confirm-demo"]')).toContainText('You pressed OK!');
   })

  test('Prompt box', async ({page})=> {
     await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
    const inputValue = 'James Jacobson';
     page.on('dialog', dialog => {
       if (dialog.type() === 'prompt') {


          dialog.accept(inputValue);
       } else {

          dialog.dismiss();
       }

     });
    await page.locator('//*[text()=\'Prompt box:\']/button').click();
    const inputName =await page.locator('#prompt-demo').allInnerTexts();
    const i1 = inputName[0].indexOf("'");
    const i2 = inputName[0].lastIndexOf("'");
    const name = inputName[0].substring(i1+1, i2);
    console.log(name);
    expect(name).toEqual(inputValue);

   })



})
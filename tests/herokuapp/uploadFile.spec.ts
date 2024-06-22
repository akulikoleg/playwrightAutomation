import { expect, test as it } from '@playwright/test'
import * as path from "path";

it('Upload file', async ({page})=> {

    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles(path.join('./upload', '1.png'));
    await page.click('#file-submit');

    await expect(page.locator('#uploaded-files')).toContainText('1.png');
    await expect(page.locator('//h3')).toHaveText('File Uploaded!');

})

it('Upload multiple file', async ({page})=> {

  await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
  await page.locator('//*[@type=\'file\']').setInputFiles([path.join('./upload', '1.png'), path.join('./upload', '2.PNG'), path.join('./upload', '3.png') ]);

  const name = await page.locator('//p[@class=\'name\']').allTextContents();
  console.log(name);
  expect(name).toEqual(['1.png', '2.PNG', '3.png']);

  // await expect(page.locator('//p[@class=\'name\']')).toContainText('1.png');
   await expect(page.locator('//p[@class=\'name\']').nth(1)).toHaveText('2.PNG');
  // await expect(page.locator('//p[@class=\'name\']')).toHaveText('3.png');

})
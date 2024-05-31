import {test, expect, Page} from '@playwright/test'

test.beforeEach( async ( {page}) => {
    await page.goto('https://coding.pasv.us/flash');

})

test('Navigate to Interview', async ({page, browserName}) => {

  await page.locator('//a[contains(@text, "/flash")]').click();
 // await expect(ref).toHaveText('Интервью');
  //page.waitForURL('https://coding.pasv.us/flash');
  await expect(page.locator('//a[@title=\'Non-technical Interview\']')).toHaveCSS('color', 'rgb(83, 81, 251)');
  await expect(page.locator('//h1')).toHaveText('Interview practice cards');
  await page.screenshot({path: `screenShots/${browserName}.png`});

})

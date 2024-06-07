import {test, expect} from '@playwright/test';

test.describe('IFRAME', () => {

    test('iframe test', async ({page}) => {

        await page.goto('https://www.lambdatest.com/selenium-playground/nested-frames/');
        const frameBottom = page.frameLocator('//*[@name="frame-bottom"]');
        const frameLeft = await frameBottom
          .frameLocator('//*[@name="frame-left"]')
          .locator('body')
          .textContent();


        const frameMiddle = await frameBottom
          .frameLocator('//*[@name="frame-middle"]')
          .locator('body')
          .textContent();

        const frameRight = await frameBottom
          .frameLocator('//*[@name="frame-right"]')
          .locator('body')
          .textContent();

        expect(frameLeft).toContain("Left");
        expect(frameMiddle).toContain("Middle");
        expect(frameRight).toContain("Right");

        console.log(frameLeft, 'Left frame');
        console.log(frameMiddle, 'Middle frame');
        console.log(frameRight, 'Right frame');

    })




})
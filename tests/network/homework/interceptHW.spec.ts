import {test} from '@playwright/test'


test.beforeEach(async ({ context }) => {
  // Block any css requests for each test in this file.
  await context.route(/.css$/, route => route.abort());
});

test('intercept LocalCoding', async ({page}) => {

  await page.route('**/*.{png,jpg,jpeg,svg}', request => {
       return request.request().resourceType() === 'image' ? request.abort() : request.continue();
  })


   await page.pause();
   await page.goto('https://coding.pasv.us/');
   await page.pause();

})

test('intercept apple.com', async ({page}) => {
  await page.route('**/*.{png,jpg,jpeg,svg}', (request) => {
    return request.request().resourceType() === 'image' ? request.abort() : request.continue();

  })
  await page.pause();
  await page.goto('https://www.apple.com/');
  await page.pause();

})

test('intercept studentunicorn', async ({page, context}) => {
  await context.route(/.css/, route => route.abort());

  await page.route('**/*.{png,jpg,jpeg,svg}', (request) => {
    return request.request().resourceType() === 'image' ? request.abort() : request.continue();

  })
  await page.pause();
  await page.goto('https://practice.sdetunicorns.com/shop/');
  await page.pause();

})
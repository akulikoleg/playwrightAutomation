import {test} from '@playwright/test'

test('request failed Localcoding', async ({page}) => {

  await page.route('**/*.{png,jpg,jpeg,svg}', request => {
    return request.request().resourceType() === 'image' ? request.abort() : request.continue();
  })

  page.on('requestfailed', request => {
    console.log(`Errorlink: ${request.url()}`);

  })


  await page.pause();
  await page.goto('https://coding.pasv.us/');
  await page.pause();

})

test('request failed Apple.com', async ({page}) => {

  await page.route('**/*.{png,jpg,jpeg,svg}', request => {
    return request.request().resourceType() === 'image' ? request.abort() : request.continue();
  })

  page.on('requestfailed', request => {
    console.log(`Errorlink: ${request.url()}`);

  })


  await page.pause();
  await page.goto('https://www.apple.com/');
  await page.pause();

})

test('request failed sdetunicorn.com', async ({page}) => {

  await page.route('**/*.{png,jpg,jpeg,svg}', request => {
    return request.request().resourceType() === 'image' ? request.abort() : request.continue();
  })

  page.on('requestfailed', request => {
    console.log(`Errorlink: ${request.url()}`);

  })


  await page.pause();
  await page.goto('https://practice.sdetunicorns.com/cart/');
  await page.pause();

})
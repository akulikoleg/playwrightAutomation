import {test} from '@playwright/test'

test('network events COdingpasv test', async ({page}) => {
  await page.route('**/*.{png,jpg,jpeg,svg}', request => {
    return request.request().resourceType() === 'image' ? request.abort() : request.continue();

  })


  page.on('pageerror', error => {
    console.log('page error: ' + error.message ) ;
    //console.log('page error: ' + error.message) ;

  })

  await page.pause();
  await page.goto('https://coding.pasv.us/');
  await page.pause();

})

test('network events Apple.com test', async ({page}) => {
  await page.route('**/*.{png,jpg,jpeg,svg}', request => {
    return request.request().resourceType() === 'image' ? request.abort() : request.continue();

  })


  page.on('pageerror', error => {
    console.log('page error: ' + error.message ) ;
    //console.log('page error: ' + error.message) ;

  })

  await page.pause();
  await page.goto('https://www.apple.com/');
  await page.pause();

})

test('Unicorn practice', async ({page}) => {
  await page.route('**/*.{png,jpg,jpeg,svg}', request => {
    return request.request().resourceType() === 'image' ? request.abort() : request.continue();

  })


  page.on('pageerror', error => {
    console.log('page error: ' + error.message ) ;
    //console.log('page error: ' + error.message) ;

  })

  await page.pause();
  await page.goto('https://practice.sdetunicorns.com/cart/');
  await page.pause();

})
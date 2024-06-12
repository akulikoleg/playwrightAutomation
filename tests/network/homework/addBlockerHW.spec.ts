import {test} from '@playwright/test'

test('add blocker LocalCoding', async ({page}) => {

  const addBlocker = [

    'https://www.googletagmanager.com',
    'https://mc.yandex.ru',
    'https://server-prod.pasv.us',
    'https://code.jivosite.com',
    'https://node-sber1-az3-20.jivosite.com',
    'https://mc.yandex.com',
    'https://code.jivo.ru',
    'https://course-qa-basics.s3.us-west-1.amazonaws.com',
    'https://telemetry.jivosite.com',
    'https://www.google-analytics.com'

  ];

  await page.route('**/*', route => {

    const url = route.request().url();
     addBlocker.some( link => url.startsWith(link))  ? route.abort() : route.continue();

  })

  await page.pause();
  await page.goto('https://coding.pasv.us/');
  await page.pause();


})

test('add blocker apple.com', async ({page}) => {

  const addBlocker = [
    'https://securemetrics.apple.com',


  ];

  await page.route('**/*', route => {

    const url = route.request().url();
    addBlocker.some( link => url.startsWith(link))  ? route.abort() : route.continue();

  })

  await page.pause();
  await page.goto('https://www.apple.com/');
  await page.pause();


})

test('add blocker sdet Unicorn', async ({page}) => {

  const addBlocker = [

    'https://i0.wp.com',
    'https://fonts.googleapis.com',
    'https://stats.wp.com',
    'https://fonts.gstatic.com',
    'https://pixel.wp.com',
    'https://zakrademos.com',

  ];

  await page.route('**/*', route => {

    const url = route.request().url();
    addBlocker.some( link => url.startsWith(link))  ? route.abort() : route.continue();

  })

  await page.pause();
  await page.goto('https://practice.sdetunicorns.com/cart/');
  await page.pause();


})
import {expect, test, test as it} from '@playwright/test'


test.beforeEach('add blocker expandtesting', async ({page}) => {

  const addBlocker = [

    'https://cdn.jsdelivr.net',
    //'https://code.jquery.com',
    'https://www.googletagmanager.com',
    'https://pagead2.googlesyndication.com',
    'chrome-extension://hdokiejnpimakedhajhdlcegeplioahd',
    'chrome-extension://lhdoppojpmngadmnindnejefpokejbdd',
    'https://www.google-analytics.com',
    'https://fundingchoicesmessages.google.com',
    'https://tpc.googlesyndication.com',


  ];

  await page.route('**/*', route => {

    const url = route.request().url();
    addBlocker.some( link => url.startsWith(link))  ? route.abort() : route.continue();

  })

  //await page.pause();
  await page.goto('https://practice.expandtesting.com/broken-images#google_vignette');
//  await page.pause();


})


it('Broken image from expandTesting', async ({page}) => {

  await page.goto('https://practice.expandtesting.com/broken-images#google_vignette');

  await page.route('**/*', route => {
    route.continue().catch(() => console.log('ERROR!!!'));
  })

  const image = await  page.evaluate( async () => {
    const allImages = Array.from( document.querySelectorAll('img'));
    const brokenImages = [];
    for( const img of allImages ){
      const responce = await fetch(img.src).catch( () => console.log('ERRROR'))
      if( !responce || responce.status === 404 ){
        brokenImages.push(img.src);
      }

    }
    return brokenImages;
  })

  for(const src of image){

    console.log(src);
  }


  await expect(page.locator("[alt='Image 1']")).toBeVisible();

})
import {expect, test as it} from '@playwright/test'

it('Broken image from lambdatest', async ({page}) => {

  await page.goto('https://www.lambdatest.com/selenium-playground/broken-image');

  await page.route('**/*', route => {
    route.continue().catch(() => console.log('ERROR!!!'));
  })

  const image = await  page.evaluate( async () => {
      const allImages = Array.from( document.querySelectorAll('img'));
      const brokenImages = [];
      for( const img of allImages ){
        const responce = await fetch(img.src).catch( () => console.log('ERRROR'))
        if( !responce || responce.status !== 200 ){
            brokenImages.push(img.src);
        }

      }
      return brokenImages;
  })

  for(const src of image){

    console.log(src);
  }


  await expect(page.locator('[alt=\'Image\']')).toBeVisible();

})
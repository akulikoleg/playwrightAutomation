import {test as it} from '@playwright/test'




it('testing Broken Images', async({page}) => {
   await page.goto('https://the-internet.herokuapp.com/broken_images');

   await page.route('**/*', route => {
     route.continue().catch(() => console.log('ERROR!!!'));
   })

    const image = await page.evaluate(async () => {
      const allImages  = Array.from( document.querySelectorAll('img'));
      const arrayOfBrokenImages = [];
      console.log(allImages)
      for(const img of allImages){
          const responce = await fetch(img.src).catch( () => console.log('ERRROROOREORO'))
          if( !responce || responce.status !== 200 || img.naturalWidth === 0 || img.naturalHeight === 0 ){
            arrayOfBrokenImages.push(img.src);
          }
      }
      return arrayOfBrokenImages;

    })

    console.log(image.length)
    for(const src of image){
      console.log(src);
    }
})
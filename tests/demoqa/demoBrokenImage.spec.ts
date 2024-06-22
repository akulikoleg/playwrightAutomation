import {test as it} from '@playwright/test'


it("broken image test DemoQA", async ({page}) => {

    await page.goto('https://demoqa.com/broken#google_vignette');

    await page.route('**/*', route => {
      route.continue().catch(() => console.log('ERROR!!!'));
    })

    const image = await page.evaluate(  async () => {
            const allImages =  Array.from( document.querySelectorAll('img') );
            console.log(allImages);
            const arrayOfBrokenImg = [];
            for(const img of allImages){


              if(  img.naturalHeight === 0 || img.naturalWidth === 0 ){

                arrayOfBrokenImg.push(img.src);

              }

            }
            return arrayOfBrokenImg;
    })

    for(const src of image ){
      console.log(src);
    }

})




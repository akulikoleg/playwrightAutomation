import {test} from '@playwright/test'

test('intercept', async ({page}) => {
  await page.route('**/*.{png,jpg,jpeg,svg}', (request) => {
    //console.log(request, 'request');
    if(request.request().resourceType() === 'image'){
      request.abort();
    }
    else{
      request.continue();
    }
  })

  page.on('pageerror', error => {
    console.log(`error: ${error}`);
  })

  //await page.goto('data:text/html,<script>throw new Error("Test")</script>');
  await page.pause();
  await page.goto('https://www.amazon.com/');
  await page.pause();
})
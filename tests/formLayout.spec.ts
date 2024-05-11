import {test as it, expect} from '@playwright/test';



it.describe('Form Layout Type', () => {



    it("Fill all fields", async ({page}) => {
     await  page.goto('http://localhost:4200/pages/forms/layouts');
     //inline Form
     await page.locator('[placeholder=\'Jane Doe\']').fill('Mike');
     await page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"][placeholder="Email"][type="text"]').pressSequentially('miketheft@mail.com');
    //checkbox
      await page.locator('//button[@class="appearance-filled size-medium shape-rectangle status-primary nb-transition"][contains(text(),"Submit")]').click();

      //Using the grid
      await page.locator('//*[@id="inputEmail1"]').fill('mike@email.com');
      await page.locator('//*[@id="inputPassword2"]').fill('1837');
     // await page.locator('//*[nb-radio-group][text()="Submit"]').click();
      await page.locator('//button[@class="appearance-filled size-medium shape-rectangle status-primary nb-transition"][contains(text(), "Sign in")]').click();

      //Basic form
      await page.locator('//*[@id="exampleInputEmail1"]').fill('mike123@email.com');
      await page.locator('//*[@id="exampleInputPassword1"]').fill('15745837');
      //  checkbox
      await page.locator('//button[@class="appearance-filled size-medium shape-rectangle status-danger nb-transition"]').click();

      ///Form without labels
      await page.locator('//*[@placeholder=\'Recipients\']').fill('Termo controller');
      await page.locator('//*[@placeholder=\'Subject\']').fill('Temperature setup');
      await page.getByPlaceholder('Message').fill('Adjust to current condition');
      await page.locator('//button[@class="status-success appearance-filled size-medium shape-rectangle nb-transition"]').click();

      //Block form

      await page.locator('//*[@id="inputFirstName"]').fill('Nicolae');
      await page.locator('//*[@id="inputLastName"]').fill('Cobisneanu');
      await page.locator('//*[@id="inputEmail"]').fill('jet@mail.ru');

      await page.locator('//*[@id="inputWebsite"]').fill('jet@mail.ru');
      await page.locator('//*[@type="submit"][@class="appearance-filled size-medium shape-rectangle status-basic nb-transition"]').click();

      ////*[@type="submit"][@class="appearance-filled size-medium shape-rectangle status-basic nb-transition"]

      // Horizontal form
      await page.locator('//*[@id="inputEmail3"]').fill('Nic@mail.com');
      await page.locator('//*[@id="inputPassword3"]').fill('NicCOb123');
      //Check all
      await page.locator('//*[@type="submit"][@class=\'appearance-filled size-medium shape-rectangle status-warning nb-transition\']').click();



    })


})

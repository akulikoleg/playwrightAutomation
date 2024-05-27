import {test as it} from  '@playwright/test'
import {Form} from "../../page_object/letcode/Form"


it.describe('Form from LETCODE', () => {

    it('testing form page', async ({page}) => {
      await page.goto('https://letcode.in/forms');
      let form = new Form(page);
      await form.interactWithForm();


    })






})

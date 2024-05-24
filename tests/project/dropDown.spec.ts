import {test as it} from '@playwright/test'
import {DropDown}  from "../../page_object/project/DropDown";



it.describe('Drop down', ()=> {

  it('iteract with dropDown menu', async ({page})=>{
    await  page.goto('http://localhost:4200/pages/iot-dashboard');
     let dropDown = new DropDown(page);
    await  dropDown.interactWithDropDown();

  })


})

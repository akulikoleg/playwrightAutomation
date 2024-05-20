import {expect, Page, test as it} from '@playwright/test'
import {SimpleDaDPicker} from '../../page_object/SimpleDaDPicker'

it.describe("DEMOQA Simple DragAndDrop", ()=>{


      it('simple dragAndDrop', async ({page}) => {

        let simpleDaD = new SimpleDaDPicker(page);
        await page.goto("https://demoqa.com/droppable");
        await simpleDaD.dragAndDropSimplEl();

      })


     it('Accept DragAndDrop', async ({page}) =>{
       let simpleDaD1 = new SimpleDaDPicker(page);
       await page.goto("https://demoqa.com/droppable");
       await page.locator('[id="droppableExample-tab-accept"]').click();
       await simpleDaD1.dropAndDropAcceptableEl();
       await page.reload();
       await page.locator('[id="droppableExample-tab-accept"]').click();
       await simpleDaD1.dropAndDropNotAcceptableEl();

     } )

    it('Revert Draggable', async ({page})=>{
      let simpleDaD = new SimpleDaDPicker(page);
      await page.goto("https://demoqa.com/droppable");
      await page.locator('[id="droppableExample-tab-revertable"]').click();
      await simpleDaD.drugAndDropRevert('Will Revert');
      page.reload();
      await page.locator('[id="droppableExample-tab-revertable"]').click();
      await simpleDaD.drugAndDropRevert('Not Revert');
    })




})

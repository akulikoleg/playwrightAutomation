import {test as base} from '@playwright/test'
import {DragAndDrop} from "../../page_object/DragAndDrop";
import {DragDrop} from "@angular/cdk/drag-drop";


type Fixture = {
   dragAndDrop: DragAndDrop

}

 export const test = base.extend<Fixture>({
  dragAndDrop: async ({page}, use  ) => {
    // Set up fixture
    const dragDrop = new DragAndDrop(page);
    await dragDrop.goto();
    await dragDrop.dropAndDropElement('Draggable 1');
    await dragDrop.dropAndDropElement('Draggable 2');
   // await page.reload();
    // await dragDrop.dropAndDropElementOption2('Draggable 1');
    // await dragDrop.dropAndDropElementOption2('Draggable 2');
    // await dragDrop.dragAndDropElementDemo2('Drag me to my target', 'Dropped!');

  }

})

export { expect} from '@playwright/test';




// test.describe('DRAG AND DROP', () => {
//
//   test('drag and drop', async ({page}) => {
//     let dragAndDrop = new DragAndDrop(page);
//    // page.goto(`${process.env.LAMBDA}/selenium-playground/drag-and-drop-demo`);
//     await page.goto(`https://www.lambdatest.com/selenium-playground/drag-and-drop-demo`);
//     await dragAndDrop.dropAndDropElement('Draggable 1');
//     await dragAndDrop.dropAndDropElement('Draggable 2');
//     await page.reload();
//     await dragAndDrop.dropAndDropElementOption2('Draggable 1');
//     await dragAndDrop.dropAndDropElementOption2('Draggable 2');
//     await dragAndDrop.dragAndDropElementDemo2('Drag me to my target', 'Dropped!');
//   })
//
// })



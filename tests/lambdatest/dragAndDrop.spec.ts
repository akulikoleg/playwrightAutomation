import {test as it} from '@playwright/test'
import {DragAndDrop} from "../../page_object/DragAndDrop";

it.describe('DARG AND DROP', () => {

  it('drag and drop', async ({page}) => {
    let dragAndDrop = new DragAndDrop(page);
   // page.goto(`${process.env.LAMBDA}/selenium-playground/drag-and-drop-demo`);
    await page.goto(`https://www.lambdatest.com/selenium-playground/drag-and-drop-demo`);
    await dragAndDrop.dropAndDropElement('Draggable 1');
    await dragAndDrop.dropAndDropElement('Draggable 2');
    await page.reload();
    await dragAndDrop.dropAndDropElementOption2('Draggable 1');
    await dragAndDrop.dropAndDropElementOption2('Draggable 2');
    await dragAndDrop.dragAndDropElementDemo2('Drag me to my target', 'Dropped!');
  })

})

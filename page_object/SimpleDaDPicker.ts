import {Page, expect} from "@playwright/test"

export class SimpleDaDPicker {

  readonly page:Page;
  constructor(page: Page){
    this.page = page;
  }

get dragableElement(){
    return '//*[@id="draggable"]';
}

get drophereSimpleElement(){
    return '//*[@class="simple-drop-container"]//*[@id="droppable"]';
}

get droppableEl(){
    return "//*[@id='acceptable']";
}

get drophereAcceptEl(){
    return '//*[@class="accept-drop-container"]//*[@id="droppable"]';

}

get dropBoxRevert(){
    return '//*[@id="droppableExample-tabpane-revertable"]//*[@id=\'droppable\']';
}

public async dragAndDropSimplEl(){
    const dropHere = this.page.locator(this.drophereSimpleElement);
    await this.page.locator(this.dragableElement).dragTo(dropHere);
    await expect(this.page.locator( this.drophereSimpleElement )).toContainText('Dropped!');
    await expect(this.page.locator( this.drophereSimpleElement )).toHaveCSS('background-color', 'rgb(70, 130, 180)' );
}

public async dropAndDropAcceptableEl(){
    await this.page.locator(this.droppableEl).hover();
    await this.page.mouse.down();
    await this.page.locator(this.drophereAcceptEl).hover();
    await this.page.mouse.up();
    await expect( this.page.locator(this.drophereAcceptEl)).toContainText('Dropped!');
    await expect( this.page.locator(this.drophereAcceptEl)).toHaveCSS('background-color', 'rgb(70, 130, 180)');
}

  public async dropAndDropNotAcceptableEl(){
    await this.page.locator('//*[@id="notAcceptable"]').hover();
    await this.page.mouse.down();
    await this.page.locator(this.drophereAcceptEl).hover();
    await this.page.mouse.up();
    await expect( this.page.locator(this.drophereAcceptEl)).toContainText('Drop here');
    //await expect( this.page.locator(this.drophereAcceptEl)).
  }

  public async drugAndDropRevert(text){
    const elem = this.page.locator('[class=\'drag-box mt-4 ui-draggable ui-draggable-handle\']', {hasText: text})
    await elem.hover();
    await this.page.mouse.down();
    await this.page.locator(this.dropBoxRevert).hover();
    await this.page.mouse.up();
    if(text == 'Not Revert'){
      await expect( elem ).not.toHaveCSS('left','0px');
      await expect(elem).not.toHaveCSS('top', '0px');
    }
    if(text == 'Will Revert'){
      await expect( elem ).toHaveCSS('left','0px');
      await expect(elem).toHaveCSS('top', '0px');
    }

  }



}

import {expect, Page} from "@playwright/test";

export class DragAndDrop {
  readonly page:Page;

  constructor(page:Page) {
    this.page = page;
  }

  get dragEl(){
    return '[draggable=\"true\"]';
  }

  get drophereEl(){
    return '[id="mydropzone"]';
  }
  get droplist(){
    return '[id="droppedlist"]';
  }

  get dragMe(){
    return '[id=\'draggable\']';
  }

  get dropMe(){
    return '[id="droppable"]';
  }

  async goto(){
    await this.page.goto('https://www.lambdatest.com/selenium-playground/drag-and-drop-demo');

  }


  public async dropAndDropElement(text:string){

   await this.page.locator(this.dragEl, {hasText: text}).dragTo( this.page.locator(this.drophereEl) );
   expect(await this.page.locator(this.droplist).textContent()).toContain(text);

  }

  public async dropAndDropElementOption2(text:string){

    await this.page.locator(this.dragEl, {hasText: text}).hover();
    await this.page.mouse.down();
    await this.page.locator(this.drophereEl).hover();
    await this.page.mouse.up();
    expect(await this.page.locator(this.droplist).textContent()).toContain(text);

  }
  public async dragAndDropElementDemo2(text: string, textInDropBox: string) {
    await this.page
      .locator(this.dragMe, { hasText: text })
      .dragTo(this.page.locator(this.dropMe));

  }
}

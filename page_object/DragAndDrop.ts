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
    expect(await this.page.locator(this.dropMe).textContent()).toContain(textInDropBox);
    expect(await this.page.locator(this.dropMe)).toHaveCSS(
      "background-color",
      "rgb(14, 186, 197)"
    );
  }
}

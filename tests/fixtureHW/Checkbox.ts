import {Page} from "@playwright/test";

export class Checkbox {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(){
      await this.page.goto('https://demoqa.com/checkbox');
      this.page.waitForLoadState("domcontentloaded");
  }

  get getCheckbox(){
      return '//*[@class=\'rct-icon rct-icon-uncheck\']';
  }

  get folderTitles(){
    return '//*[@class=\'rct-node rct-node-parent rct-node-expanded\']/ol/li//*[@class=\'rct-title\']';
  }

  get unexpendedItems(){

    return '//*[@class=\'rct-icon rct-icon-expand-close\']';
  }

  // public async expandMain(){
  //   await this.page.locator(this.mainCheckbox).click();
  //
  //    await this.page.getByRole('checkbox').check();
  //   // await this.page.waitForTimeout(6000);
  //
  // }

 public getAllTitles(){

    const titlesNumber = this.page.locator(this.folderTitles).count();
    return this.page.locator(this.folderTitles).allInnerTexts();

 }


  public async expandAll(){
      while( await this.page.locator(this.unexpendedItems).count() > 0 ) {
        await this.page.locator(this.unexpendedItems).first().click();
      }


  }

  public async checkAll(){
        await this.page.locator(this.getCheckbox).first().click();

  }









}
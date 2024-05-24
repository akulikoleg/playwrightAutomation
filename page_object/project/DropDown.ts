import {Page, expect} from '@playwright/test';

export class DropDown {
  readonly page: Page;
  constructor(page: Page){
    this.page = page;

  }

  get dropDownInput(){

    return '.header-container .appearance-outline';

  }
  get header(){
    return 'nb-layout-header'
  }

  get dropDownList(){
    return '.option-list nb-option';

  }

  text = ['Light','Dark','Cosmic', 'Corporate'];

  async interactWithDropDown(){
    await this.page.locator(this.dropDownInput).click();
    await expect(this.page.locator(this.dropDownList)).toHaveText(this.text);
    console.log(await this.page.locator(this.dropDownList).allTextContents());
    await this.page.locator(this.dropDownList).filter({hasText:'Dark'}).click();
    await expect(this.page.locator(this.header)).toHaveCSS('background-color', 'rgb(34, 43, 69)');
    //this.page.selectOption()

  }


  // this.page.getByRole('list') ul tag
  // this.page.getByRole('listitem') li tag



}

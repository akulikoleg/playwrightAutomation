import {Page, expect} from '@playwright/test'


export class Form{

  readonly page: Page;
  constructor(page: Page){
    this.page = page;

  }

  get firstNameInput(){
    return '#firstname';
  }

  get lastNameInput(){
      return '#lasttname';
  }

  get emailInput(){
      return '#email';
  }

  //  dropdown

  get phoneNumberInput(){
    return '#Phno';
  }

  get addressInputLine1(){
    return '#Addl1';
  }

  get addressInputLine2(){
    return '#Addl2';
  }

  get stateInput(){
    return '#state';
  }

  get postalCodeInput(){

    return '#postalcode';
  }

  // country dropdown

  get dateOfBirthInput(){

      return '//input[@type=\'date\']';
  }



  async interactWithForm(){
    await this.page.locator('#firstname').fill('James');
    await this.page.locator(this.lastNameInput).fill('Semenov');
    await this.page.locator(this.emailInput).clear();
    await this.page.locator(this.emailInput).fill('james@mail.com');

    await this.page.locator('div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div > select').click();
    const ddElement = this.page.locator('div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div > select');
    await ddElement.press('Space');
    await this.page.waitForTimeout(4000);
    // await ddElement.pressSequentially('Moldova');
    // await ddElement.selectOption({value:'Moldova (+373)'});
    // console.log(await this.page.locator('div.column.is-7-desktop.is-8-tablet > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div > select > option').allTextContents());
    // await this.page.locator('div.column.is-7-desktop.is-8-tablet > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div > select > option').filter({hasText:"373" }).click();



  }



}

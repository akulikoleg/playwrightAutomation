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
    //await ddElement.press('ArrowDown');
    //await this.page.waitForTimeout(4000);
    //await ddElement.pressSequentially('Mol');
    await this.page.keyboard.press('Enter');
    //await this.page.waitForTimeout(4000);
    //await expect(this.page.locator('div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div > select')).toContainText('Moldova');
    await ddElement.selectOption({value:'373'});
    // console.log(await this.page.locator('div.column.is-7-desktop.is-8-tablet > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div > select > option').allTextContents());
    // await this.page.locator('div.column.is-7-desktop.is-8-tablet > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div > select > option').filter({hasText:"373" }).click();

    await this.page.locator(this.phoneNumberInput).pressSequentially('8642588521');
    await this.page.locator(this.addressInputLine1).fill('250 patrick lane');
    await this.page.locator(this.addressInputLine2).fill('250 patrick lane');
    await this.page.locator(this.stateInput).fill('GA');
    await this.page.locator(this.postalCodeInput).fill('29360');


    await this.page.locator('div > div > form > div:nth-child(5) > div:nth-child(2) > div > div > div > select').click();
    const ddElement2 = this.page.locator('div > div > form > div:nth-child(5) > div:nth-child(2) > div > div > div > select');
    await this.page.keyboard.press('Space');
    await ddElement2.selectOption({value: 'United States'});
    await this.page.locator(this.dateOfBirthInput).pressSequentially('04091993');
    await this.page.locator('//*[@id="male"]').click();
    await this.page.getByRole('checkbox').check();
    await this.page.locator('//*[@class="button is-primary"]').click();
  }



}

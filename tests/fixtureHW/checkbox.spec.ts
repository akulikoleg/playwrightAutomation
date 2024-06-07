import {test, expect } from './fixture.checkbox'

test('fixture test', async ({ checkbox, page }) => {
 // await checkbox.expandMain();
  //await checkbox.expandAll();
  await expect(page.locator('//*[@class="rct-icon rct-icon-check"]').nth(5)).toBeVisible();
  await expect(page.locator('//*[@class="rct-icon rct-icon-check"]').nth(15)).toBeChecked();

});


// test('fixture test 2', async ({ checkbox, page }) => {
//
//    //expect(checkbox.getAllTitles()).toHaveLength(16);
//    expect(checkbox.getAllTitles()).toContain(['Office']);
//    console.log(checkbox.getAllTitles())
//
//
// })
import {test, expect} from './todo-page'

test('fixture test',  async ({page, todoPage}) => {
  await todoPage.addToDo('spec fixture test');
  await expect(page.getByTestId('todo-title')).toContainText(['spec fixture test']);

})

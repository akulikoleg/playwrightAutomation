import { test as base} from '@playwright/test';
import { Checkbox } from './Checkbox';

type MyFixture = {
    checkbox: Checkbox;
};

export const test = base.extend<MyFixture>({
    checkbox: async ({page}, use) => {
          const checkbox = new Checkbox(page);
          await checkbox.goto();
          await checkbox.expandAll();
          await checkbox.checkAll();
          await  checkbox.getAllTitles();
          await use(checkbox);
    },

});



export { expect } from '@playwright/test';
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://ymchan58.github.io/playwright-angular-demo/dashboard');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tour of Heroes/);
});

test('search Bombasto', async ({ page }) => {
    await page.goto('https://ymchan58.github.io/playwright-angular-demo/dashboard');

    const searchBar = page.getByLabel('Hero Search');
    await searchBar.type('Bombasto', {delay: 100}); // Types slower, like a user

    // Expect the page to contain the success message
    await expect(page.getByTitle('messages-box')).toContainText('HeroService: found heroes matching "Bombasto"');
});

test('click clear messages', async ({ page }) => {
  await page.goto('https://ymchan58.github.io/playwright-angular-demo/dashboard');

  const clearMessagesButton = page.getByRole('button', { name: 'Clear messages' })
  await clearMessagesButton.click(); 

  // Expects the messages to be cleared (i.e. messages array length = 0)
  await expect(page.getByTitle('messages-box')).toBeHidden();
});



import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://ymchan58.github.io/playwright-angular-demo/dashboard');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tour of Heroes/);
});

test('search Bombasto', async ({ page }) => {
    await page.goto('https://ymchan58.github.io/playwright-angular-demo/dashboard');

    const element = page.getByLabel('Hero Search');
    await element.type('Bombasto', {delay: 100}); // Types slower, like a user

    // Expects the URL to contain intro.
    await expect(page.getByTitle('messages-box')).toContainText('HeroService: found heroes matching "Bombasto"');
});

test('search invalid item', async ({ page }) => {
  await page.goto('https://ymchan58.github.io/playwright-angular-demo/dashboard');

  const element = page.getByLabel('Hero Search');
  await element.type('Boombasto', {delay: 100}); // Types slower, like a user

  // Expects the URL to contain intro.
  await expect(page.getByTitle('messages-box')).toContainText('HeroService: no heroes matching "Boombasto"');
});



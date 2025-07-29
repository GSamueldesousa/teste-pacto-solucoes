const { test, expect } = require('@playwright/test');

test('deve abrir o Yahoo e verificar o t�tulo', async ({ page }) => {
  await page.goto('https://search.yahoo.com');
  await expect(page).toHaveTitle(/Yahoo/);
});

const { test, expect } = require('@playwright/test');

test('buscar "Pacto Soluções" no Yahoo', async ({ page }) => {
  await page.goto('https://search.yahoo.com');
  await page.fill('input[name="p"]', 'Pacto Soluções');
  await page.press('input[name="p"]', 'Enter');

  await page.waitForSelector('.compTitle', { timeout: 10000 });

  
  await expect(page.locator('body')).toContainText('pactosolucoes.com.br');
});
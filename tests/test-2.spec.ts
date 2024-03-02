import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sampleapp.tricentis.com/101/app.php');
  await page.locator('#make').selectOption('Audi');
  await page.locator('#model').selectOption('Scooter');
  await page.locator('#cylindercapacity').click();
  await page.locator('#cylindercapacity').fill('11');
  await page.locator('#engineperformance').click();
  await page.locator('#engineperformance').fill('11');
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click();
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill('11/11/2000');
  await page.locator('#numberofseats').selectOption('2');
  await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#numberofseatsmotorcycle').selectOption('1');
  await page.locator('#fuel').selectOption('Petrol');
  await page.locator('#payload').click();
  await page.locator('#payload').fill('1');
  await page.locator('#totalweight').click();
  await page.locator('#totalweight').fill('100');
  await page.locator('#listprice').click();
  await page.locator('#listprice').fill('1000');
  await page.locator('#licenseplatenumber').click();
  await page.locator('#licenseplatenumber').fill('1');
  await page.locator('#annualmileage').click();
  await page.locator('#annualmileage').fill('100');
  await page.getByRole('button', { name: 'Next »' }).click();
});
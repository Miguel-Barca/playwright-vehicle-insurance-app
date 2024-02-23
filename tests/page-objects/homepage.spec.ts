import { test, expect } from '@playwright/test';
import { tricentisLogoLocator, automobileLocator, camperLocator, truckLocator, motorcycleLocator, selectedInsuranceLocator } from '../Locators/pageLocators.ts';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
    await expect(truckLocator(page)).toBeVisible();
    await expect(automobileLocator(page)).toBeVisible();
    await expect(motorcycleLocator(page)).toBeVisible();
    await expect(camperLocator(page)).toBeVisible();
  });

  test('Homepage', async ({ page }) => {
    test.info().annotations.push({
      type: 'summary',
      description: 'User Should Be Able To Navigate To The Homepage',
    });

    await expect(page).toHaveTitle("Tricentis Vehicle Insurance");
  });

  test('Automobile', async ({ page }) => {
    test.info().annotations.push({
      type: 'summary',
      description: 'Selecting each Category and going back to the Homepage',
    });

    await automobileLocator(page).click();
    await expect(selectedInsuranceLocator(page)).toContainText('Automobile Insurance');
    await tricentisLogoLocator(page).click();

    await expect(page.locator('#app_sub_title')).toContainText('Vehicle Insurance Application');
  });

  test('Truck Category', async ({ page }) => {
    test.info().annotations.push({
      type: 'summary',
      description: 'Selecting each Category and going back to the Homepage',
    });

    await truckLocator(page).click();
    await expect(selectedInsuranceLocator(page)).toContainText('Truck Insurance');
    await tricentisLogoLocator(page).click();

    await expect(page.locator('#app_sub_title')).toContainText('Vehicle Insurance Application');
  });

  test('Motorcycle', async ({ page }) => {
    test.info().annotations.push({
      type: 'summary',
      description: 'Selecting each Category and going back to the Homepage',
    });

    await motorcycleLocator(page).click();
    await expect(selectedInsuranceLocator(page)).toContainText('Motorcycle Insurance');
    await tricentisLogoLocator(page).click();

    await expect(page.locator('#app_sub_title')).toContainText('Vehicle Insurance Application');
  });

  test('Camper', async ({ page }) => {
    test.info().annotations.push({
      type: 'summary',
      description: 'Selecting each Category and going back to the Homepage',
    });

    await camperLocator(page).click();
    await expect(selectedInsuranceLocator(page)).toContainText('Camper Insurance');
    await tricentisLogoLocator(page).click();

    await expect(page.locator('#app_sub_title')).toContainText('Vehicle Insurance Application');
  });
});



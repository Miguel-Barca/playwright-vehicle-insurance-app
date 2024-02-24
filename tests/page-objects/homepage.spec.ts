import { test, expect } from '@playwright/test';
import { tricentisLogoLocator, automobileLocator, camperLocator, truckLocator, motorcycleLocator, selectedInsuranceLocator } from '../locators/pageLocators.ts';

test.describe('Homepage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('');
        // Assert visibility of common elements
        await expect(truckLocator(page)).toBeVisible();
        await expect(automobileLocator(page)).toBeVisible();
        await expect(motorcycleLocator(page)).toBeVisible();
        await expect(camperLocator(page)).toBeVisible();
    });

    test('Homepage', async ({ page }) => {
        // Verify page title
        await expect(page).toHaveTitle("Tricentis Vehicle Insurance");
    });

    test('Select Category', async ({ page }, categoryName) => {
        // Click on the category and verify selected insurance
        const categoryLocator = getCategoryLocator(categoryName);
        await categoryLocator(page).click();
        await expect(selectedInsuranceLocator(page)).toContainText(`${categoryName} Insurance`);
        await tricentisLogoLocator(page).click();
        await expect(page.locator('#app_sub_title')).toContainText('Vehicle Insurance Application');
    });

    const categories = ['Automobile', 'Truck', 'Motorcycle', 'Camper'];
    categories.forEach(category => {
        test(`Select ${category} Category`, async ({ page }) => {
            test.info().annotations.push({
                type: 'summary',
                description: `Selecting ${category} Category and going back to the Homepage`,
            });
            
            await selectCategory(page, category);
        });
    });
});

async function selectCategory(page, category) {
    const categoryLocator = getCategoryLocator(category);
    await categoryLocator(page).click();
    await expect(selectedInsuranceLocator(page)).toContainText(`${category} Insurance`);
    await tricentisLogoLocator(page).click();
    await expect(page.locator('#app_sub_title')).toContainText('Vehicle Insurance Application');
}

function getCategoryLocator(category) {
    switch (category) {
        case 'Automobile':
            return automobileLocator;
        case 'Truck':
            return truckLocator;
        case 'Motorcycle':
            return motorcycleLocator;
        case 'Camper':
            return camperLocator;
        default:
            throw new Error(`Invalid category: ${category}`);
    }
}



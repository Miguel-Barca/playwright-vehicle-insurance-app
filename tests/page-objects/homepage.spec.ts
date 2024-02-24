import { test, expect, Page, TestInfo } from '@playwright/test';
import { tricentisLogoLocator, automobileLocator, camperLocator, truckLocator, motorcycleLocator, selectedInsuranceLocator } from '../locators/pageLocators.ts';

test.describe('Homepage - Selecting Categories', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // Assert visibility of common elements
        await expect(truckLocator(page)).toBeVisible();
        await expect(automobileLocator(page)).toBeVisible();
        await expect(motorcycleLocator(page)).toBeVisible();
        await expect(camperLocator(page)).toBeVisible();
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


async function validateHomepage(page: Page) {
    // Verify page title
    await expect(page).toHaveTitle("Tricentis Vehicle Insurance");
}

async function selectCategory(page: Page, category: string) {
    const categoryLocator = getCategoryLocator(category);
    await categoryLocator(page).click();
    await expect(selectedInsuranceLocator(page)).toContainText(`${category} Insurance`);
    await tricentisLogoLocator(page).click();
    await validateHomepage(page);
    await expect(page.locator('#app_sub_title')).toContainText('Vehicle Insurance Application');
}

function getCategoryLocator(category: string | TestInfo) {
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



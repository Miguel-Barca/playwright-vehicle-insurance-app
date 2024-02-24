import { test, expect, Page } from '@playwright/test';
import { automobileLocator, camperLocator, truckLocator, motorcycleLocator, selectedInsuranceLocator, tricentisLogoLocator } from './locators/pageLocators.ts';
import { selectCategory } from './page-objects/homepage.ts';

test.describe('Homepage - Selecting Categories', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    // Assert correct redirect to each category form. After that, we go back to the homepage
    const categories = ['Automobile', 'Truck', 'Motorcycle', 'Camper'];
    categories.forEach(category => {
        test(`Select ${category} Category`, async ({ page }) => {
            test.info().annotations.push({
                type: 'summary',
                description: `Selecting ${category} Category and going back to the Homepage`,
            });

            await selectCategory(page, category);
            await expect(selectedInsuranceLocator(page)).toContainText(`${category} Insurance`);

            //Go back to th homepage
            await tricentisLogoLocator(page).click();
            await validateHomepage(page);
        });
    });
});

async function validateHomepage(page: Page) {
    // // Assert visibility of common elements
    await expect(truckLocator(page)).toBeVisible();
    await expect(automobileLocator(page)).toBeVisible();
    await expect(motorcycleLocator(page)).toBeVisible();
    await expect(camperLocator(page)).toBeVisible();
    await expect(page).toHaveTitle("Tricentis Vehicle Insurance");
}

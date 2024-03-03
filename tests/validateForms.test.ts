import { test, expect, Page } from '@playwright/test';
import { selectCategory } from './page-objects/homepage.ts';
import { automobileLocator, camperLocator, truckLocator, motorcycleLocator, selectedInsuranceLocator, tricentisLogoLocator } from './locators/pageLocators.ts';
import { validateHomepage } from '../tests/validateHomepage.spec.ts';
import { fillDataForms, nextPage } from './page-objects/motorcycleForms.ts';

test.describe('Form - Enter Vehicle Data', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    // Assert correct redirect to each category form. After that, we go back to the homepage
    const categories = ['Automobile', 'Truck', 'Motorcycle', 'Camper'];

    categories.forEach(category => {
        test(`Select ${category} Category and Enter Vehicle Data`, async ({ page }) => {
            test.info().annotations.push({
                type: 'summary',
                description: `Selecting ${category} Category and going back to the Homepage`,
            });

            //Temporary - remove after implementation
            if (`${category}` === 'Automobile' || `${category}` === 'Truck' || `${category}` === 'Camper') {
               console.log(`Category ${category} flow Not implemented`);
            } else {
                // Code to execute if the condition is false
                await selectCategory(page, category);
                await expect(selectedInsuranceLocator(page)).toContainText(`${category} Insurance`);

                //await fillMotorcycleDataForm(page, category);
                await fillDataForms[`${category}`](page, category);
                await page.screenshot({ path: `screenshots/${category}.png` });
                await nextPage(page);
            }
        });
    });
});
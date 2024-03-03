import * as vehicleDataFormLocators from '../locators/vehicleDataFormLocators';
import { Page, TestInfo } from '@playwright/test';

export const fillDataForms = {
    Motorcycle: async (page: Page, category: string) => {
        // Logic to fill data form for Motorcycle Forms
        await vehicleDataFormLocators.MAKE_CAR(page).selectOption('Audi');
        await vehicleDataFormLocators.MOTORCYCLE_MODEL(page).selectOption('Scooter');
        await vehicleDataFormLocators.CYLINDER_CAPACITY(page).click();
        await vehicleDataFormLocators.CYLINDER_CAPACITY(page).fill('11');
        await vehicleDataFormLocators.ENGINE_PERFORMANCE(page).click();
        await vehicleDataFormLocators.ENGINE_PERFORMANCE(page).fill('11');
        await vehicleDataFormLocators.MANUFACTURE_DATE(page).click();
        await vehicleDataFormLocators.MANUFACTURE_DATE(page).fill('11/11/2000');

        await vehicleDataFormLocators.NUMBER_OF_SEATS_MOTORCYCLE(page).selectOption('1');
        await vehicleDataFormLocators.LIST_PRICE(page).click();
        await vehicleDataFormLocators.LIST_PRICE(page).fill('1000');
        await vehicleDataFormLocators.ANNUAL_MILEAGE(page).click();
        await vehicleDataFormLocators.ANNUAL_MILEAGE(page).fill('100');
    },
    category2: async (page) => {
        // Logic to fill data form for category 2
    },
    // Add more categories as needed
};

export async function nextPage(page: Page) {
    await page.getByRole('button', { name: 'Next »' }).click();
}
import { readAutomobileCsv, readMotorcycleCsv, recordsAutomobile, recordsMotorcycle } from '../dataManager.spec';
import * as vehicleDataFormLocators from '../locators/vehicleDataFormLocators';
import { Page } from '@playwright/test';

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
    Automobile: async (page) => {
        // Logic to fill data form for category 2
    },
    // Add more categories as needed
};

//Grab data from CSV and fill form
export const fillDataFormsFromCSV = {
    Motorcycle: async (page: Page, category: string) => {
        readMotorcycleCsv();

        for (const record of recordsMotorcycle) {
            await vehicleDataFormLocators.MAKE_CAR(page).selectOption(record.MAKE_CAR);
            await vehicleDataFormLocators.MOTORCYCLE_MODEL(page).selectOption(record.MOTORCYCLE_MODEL);
            await vehicleDataFormLocators.CYLINDER_CAPACITY(page).click();
            await vehicleDataFormLocators.CYLINDER_CAPACITY(page).fill(record.CYLINDER_CAPACITY);
            await vehicleDataFormLocators.ENGINE_PERFORMANCE(page).click();
            await vehicleDataFormLocators.ENGINE_PERFORMANCE(page).fill(record.ENGINE_PERFORMANCE);
            await vehicleDataFormLocators.MANUFACTURE_DATE(page).click();
            await vehicleDataFormLocators.MANUFACTURE_DATE(page).fill(record.MANUFACTURE_DATE);
    
            await vehicleDataFormLocators.NUMBER_OF_SEATS_MOTORCYCLE(page).selectOption(record.NUMBER_OF_SEATS_MOTORCYCLE);
            await vehicleDataFormLocators.LIST_PRICE(page).click();
            await vehicleDataFormLocators.LIST_PRICE(page).fill(record.LIST_PRICE);
            await vehicleDataFormLocators.ANNUAL_MILEAGE(page).click();
            await vehicleDataFormLocators.ANNUAL_MILEAGE(page).fill(record.ANNUAL_MILEAGE);
        }
    },
    Automobile: async (page: Page, category: string) => {
        readAutomobileCsv();

        //Grab data from Datamanager and fill form
        for (const record of recordsAutomobile) {
            await vehicleDataFormLocators.MAKE_CAR(page).selectOption(record.MAKE_CAR);
            await vehicleDataFormLocators.ENGINE_PERFORMANCE(page).click();
            await vehicleDataFormLocators.ENGINE_PERFORMANCE(page).fill(record.ENGINE_PERFORMANCE);
            await vehicleDataFormLocators.MANUFACTURE_DATE(page).click();
            await vehicleDataFormLocators.MANUFACTURE_DATE(page).fill(record.MANUFACTURE_DATE);
            await vehicleDataFormLocators.NUMBER_OF_SEATS(page).selectOption(record.NUMBER_OF_SEATS);
            await vehicleDataFormLocators.FUEL_TYPE(page).selectOption(record.FUEL_TYPE);
            await vehicleDataFormLocators.LIST_PRICE(page).click();
            await vehicleDataFormLocators.LIST_PRICE(page).fill(record.LIST_PRICE);
            await vehicleDataFormLocators.LICENSE_PLATE(page).fill(record.LICENSE_PLATE);
            await vehicleDataFormLocators.ANNUAL_MILEAGE(page).click();
            await vehicleDataFormLocators.ANNUAL_MILEAGE(page).fill(record.ANNUAL_MILEAGE);
        }
    },
    // Add more categories as needed
};

export async function nextPage(page: Page) {
    await page.getByRole('button', { name: 'Next »' }).click();
}
import { readAutomobileCsv, readInsurantsCsv, readMotorcycleCsv, recordsAutomobile, recordsInsurants, recordsMotorcycle } from '../dataManager.spec';
import * as vehicleDataFormLocators from '../locators/vehicleDataFormLocators';
import * as insurantDataFormLocators from '../locators/insurantDataLocators';
import { Page } from '@playwright/test';

let counterForInsurantsCSV = 0;
let counterForVehiclesCSV = 0;

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

export const fillInsurantsData = {
    Insurants: async (page: Page, category: string) => {
        readInsurantsCsv();
        
        for ( counterForInsurantsCSV; counterForInsurantsCSV < recordsInsurants.length; counterForInsurantsCSV++) {
            let record = recordsInsurants[counterForInsurantsCSV];

            await insurantDataFormLocators.FIRST_NAME(page).click();
            await insurantDataFormLocators.FIRST_NAME(page).fill(record.FIRST_NAME);
            await insurantDataFormLocators.LAST_NAME(page).click();
            await insurantDataFormLocators.LAST_NAME(page).fill(record.LAST_NAME);
            await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click();
            await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill(record.DATE_OF_BIRTH);
            await insurantDataFormLocators.BIRTH_DATE(page).click();
            await insurantDataFormLocators.BIRTH_DATE(page).fill(record.DATE_OF_BIRTH);
            await page.getByText('Male', { exact: true }).click(); // refactor
            await insurantDataFormLocators.streetaddress(page).click();
            await insurantDataFormLocators.streetaddress(page).fill(record.STREET_ADDRESS);
            await insurantDataFormLocators.country(page).selectOption(record.COUNTRY);
            await insurantDataFormLocators.city(page).click();
            await insurantDataFormLocators.city(page).fill(record.CITY);
            await page.locator('#occupation').selectOption(record.OCCUPATION);
            await page.locator('label').filter({ hasText: record.HOBBIES }).locator('span').click();
            await insurantDataFormLocators.website(page).click();
            await insurantDataFormLocators.website(page).fill(record.WEBSITE);
            //await page.getByRole('button', { name: 'Open' }).click();
            //await page.locator('#picturecontainer').setInputFiles('P1002449.JPG');
            counterForInsurantsCSV += 1;
        }
    }
};

export async function nextPage(page: Page) {
    await page.getByRole('button', { name: 'Next »' }).click();
};
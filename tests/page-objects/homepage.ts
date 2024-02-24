import { Page, TestInfo } from '@playwright/test';
import { automobileLocator, camperLocator, truckLocator, motorcycleLocator } from '../locators/pageLocators.ts';

export async function selectCategory(page: Page, category: string) {
    const categoryLocator = getCategoryLocator(category);
    await categoryLocator(page).click();
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



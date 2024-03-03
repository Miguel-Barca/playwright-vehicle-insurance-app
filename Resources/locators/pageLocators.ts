export const tricentisLogoLocator = (page) => page.getByRole('link', { name: 'Tricentis Logo Vehicle' });
export const automobileLocator = (page) => page.getByRole('link', { name: 'Automobile', exact: true });
export const camperLocator = (page) => page.getByRole('link', { name: 'Camper', exact: true });
export const truckLocator = (page) => page.getByRole('link', { name: 'Truck', exact: true });
export const motorcycleLocator = (page) => page.getByRole('link', { name: 'Motorcycle', exact: true });
export const selectedInsuranceLocator = (page) => page.locator('span[id=selectedinsurance]');

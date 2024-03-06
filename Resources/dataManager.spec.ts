import fs from 'fs';
import { parse } from 'csv-parse/sync';

export const recordsMotorcycle  : any[] = [];
export const recordsAutomobile  : any[] = [];

const path = require('path');

const motorcycleParsedData = parse(fs.readFileSync(path.join('/Users/miguelbarca/TestAutomation/playwright-vehicle-insurance-app/Data/CSVFiles/', 'Motorcycle.csv')), {
    columns: true,
    skip_empty_lines: true
});

const automobileParsedData = parse(fs.readFileSync(path.join('/Users/miguelbarca/TestAutomation/playwright-vehicle-insurance-app/Data/CSVFiles/', 'Automobile.csv')), {
    columns: true,
    skip_empty_lines: true
});

export function readMotorcycleCsv() {
    for (const record of motorcycleParsedData) {
        recordsMotorcycle.push(record);
    }
};

export function readAutomobileCsv() {
    for (const record of automobileParsedData) {
        //console.log(record);
        recordsAutomobile.push(record);
    }
};




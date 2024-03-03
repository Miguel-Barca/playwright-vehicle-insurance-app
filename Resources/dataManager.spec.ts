import fs from 'fs';
import { parse } from 'csv-parse/sync';

export const recordsMotorcycle  : any[] = [];

const path = require('path');

const records = parse(fs.readFileSync(path.join('/Users/miguelbarca/TestAutomation/playwright-vehicle-insurance-app/Data/CSVFiles/', 'Motorcycle.csv')), {
    columns: true,
    skip_empty_lines: true
});

export function readMotorcycleCsv() {
    for (const record of records) {
        //console.log(record);
        recordsMotorcycle.push(record);
    }
};




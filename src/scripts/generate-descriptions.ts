/**
 * Warning: please do not run from outside npm (it might break!)
 */

import faker from 'faker';
import fs from 'fs';

const GENERATED_COUNT = 500;

const result = [];

for (let i = 0; i < GENERATED_COUNT; i++) {
    const method = Math.random()
        ? faker.commerce.productDescription
        : faker.finance.transactionDescription;
    result.push(method());
}

fs.writeFileSync(
    'src/utils/descriptions.json',
    JSON.stringify(result, null, 2)
);

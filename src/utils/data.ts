import { v4 as uuidv4 } from 'uuid';

import names from './names.json';
import links from './links.json';
import descriptions from './descriptions.json';

export interface Item {
  id: string;
  name: string;
  description: string;
  link?: string;
  isSelected?: boolean;
}

type GenerateDataMethod = (options?: {
  count?: number;
  randomlyCheckCheckboxes?: boolean;
}) => Item[];
type GetRandomFromArrayMethod = (
  array: Array<string>,
  allowUndefined?: boolean
) => string;

const DEFAULT_NUMBER_OF_GENERATED_DATA = 101;

const getRandomFromArray: GetRandomFromArrayMethod = (
    array,
    allowUndefined = false
) => {
    if (allowUndefined && generateRandomBoolean()) {
        return undefined;
    }
    return array[Math.floor(Math.random() * array.length)];
};

export const generateRandomBoolean = () => Boolean(Math.random() > 0.5);

export const generateData: GenerateDataMethod = ({
    count = DEFAULT_NUMBER_OF_GENERATED_DATA,
    randomlyCheckCheckboxes = true,
}) => {
    if (count < 1) {
        throw new Error('Number of generated data must be at least 1');
    }

    const generatedData = [];

    for (let i = 0; i < count; i++) {
        generatedData.push({
            id: uuidv4(),
            name: getRandomFromArray(names),
            description: getRandomFromArray(descriptions),
            link: getRandomFromArray(links, true),
            isSelected: randomlyCheckCheckboxes ? generateRandomBoolean() : false,
        });
    }

    return generatedData;
};

import { generateData } from './data';
import * as DataUtils from './data';

describe('#generateData', () => {
    it('should throw if the requested number is less than 1', () => {
        expect(() => generateData({ count: 0 })).toThrowError(
            'Number of generated data must be at least 1'
        );
    });

    it('should generate the right number of items', () => {
        expect(generateData({ count: 1 })).toHaveLength(1);
        expect(generateData({ count: 2 })).toHaveLength(2);
        expect(generateData({ count: 3 })).toHaveLength(3);
        expect(generateData({ count: 42 })).toHaveLength(42);
    });

    it('should randomly check checkboxes', () => {
        jest
            .spyOn(DataUtils, 'generateRandomBoolean')
            .mockImplementation(() => true);

        expect(
            generateData({ count: 100, randomlyCheckCheckboxes: true }).filter(
                ({ isSelected }) => isSelected
            )
        ).toHaveLength(100);
    });

    it('should not randomly check checkboxes if not specified', () => {
        expect(
            generateData({ count: 100, randomlyCheckCheckboxes: false }).filter(
                ({ isSelected }) => !isSelected
            )
        ).toHaveLength(100);
    });
});

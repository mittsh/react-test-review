import reducer from './ItemsReducer';
import * as DataUtils from '../utils/data';

describe('#reducer', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should unselect item with id on unchecked', () => {
        const result = reducer(
            [
                {
                    id: '0',
                    name: 'name2',
                    description: 'description2',
                    isSelected: true,
                },
                {
                    id: '1',
                    name: 'name2',
                    description: 'description2',
                    isSelected: true,
                },
            ],
            {
                type: 'uncheck',
                payload: { id: '1' },
            }
        );

        expect(result).toHaveLength(2);
        expect(result[0].isSelected).toBe(true);
        expect(result[1].isSelected).toBe(false);
    });

    it('should select item with id on unchecked', () => {
        const result = reducer(
            [
                {
                    id: '0',
                    name: 'name2',
                    description: 'description2',
                    isSelected: false,
                },
                {
                    id: '1',
                    name: 'name2',
                    description: 'description2',
                    isSelected: false,
                },
            ],
            {
                type: 'check',
                payload: { id: '1' },
            }
        );

        expect(result).toHaveLength(2);
        expect(result[0].isSelected).toBe(false);
        expect(result[1].isSelected).toBe(true);
    });

    it('should call generate data on init', () => {
        const spyOnGenerateData = jest.spyOn(DataUtils, 'generateData');

        expect(
            reducer([{ id: '1', name: 'name2', description: 'description2' }], {
                type: 'add',
                payload: { count: 3 },
            })
        ).toHaveLength(4);
        expect(spyOnGenerateData).toHaveBeenCalledTimes(1);
    });

    it('should call generate data on add', () => {
        const spyOnGenerateData = jest.spyOn(DataUtils, 'generateData');

        expect(
            reducer([{ id: '1', name: 'name2', description: 'description2' }], {
                type: 'init',
                payload: { count: 3 },
            })
        ).toHaveLength(3);
        expect(spyOnGenerateData).toHaveBeenCalledTimes(1);
    });
});

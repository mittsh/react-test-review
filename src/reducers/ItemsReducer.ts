import { generateData, Item } from '../utils/data';

export interface CheckboxAction {
  payload?: { id?: string; count?: number; randomlyCheckCheckboxes?: boolean };
  type: 'check' | 'uncheck' | 'init' | 'add';
}

const reducer = (state: Item[], action: CheckboxAction) => {
    switch (action.type) {
    case 'check':
        return state.map((item) =>
            item.id === action.payload.id ? { ...item, isSelected: true } : item
        );
    case 'uncheck':
        return state.map((item) =>
            item.id === action.payload.id ? { ...item, isSelected: false } : item
        );
    case 'init':
        return generateData({
            count: action.payload.count,
            randomlyCheckCheckboxes: action.payload.randomlyCheckCheckboxes,
        });
    case 'add':
        return [
            ...state,
            ...generateData({
                count: action.payload.count,
                randomlyCheckCheckboxes: action.payload.randomlyCheckCheckboxes,
            }),
        ];
    default:
        throw new Error();
    }
};

export default reducer;

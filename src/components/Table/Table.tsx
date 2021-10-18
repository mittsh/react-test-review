import React, { useState } from 'react';
import cx from 'classnames';
import Checkbox from '../Checkbox/Checkbox';
import InfoItem from '../InfoItem/InfoItem';
import { useStyles } from './Table.styles';
import { Item } from '../../utils/data';
import TextField from '../TextField/TextField';

export interface Props {
  data: Item[];
  onItemChecked?(id: string): void;
  onItemUnchecked?(id: string): void;
}

const Table: React.FC<Props> = ({ data, onItemChecked, onItemUnchecked }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const vettedData = searchTerm
        ? data.filter(({ name, description, link }) =>
            RegExp(searchTerm, 'ig').test(`${name}${description}${link}`)
        )
        : data;
    const selectedIndexes = vettedData.reduce(
        (result, { isSelected }, currentIndex) =>
            isSelected ? result.concat([currentIndex]) : result,
        []
    );

    const styles = useStyles();
    return (
        Boolean(data.length) && (
            <div>
                <div>
                    <b>{vettedData.length}</b> displayed elements of which{' '}
                    <b>{selectedIndexes.length}</b> are selected
                </div>
                <div>Selected Items: {selectedIndexes.join(', ')}</div>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tr}>
                            <th className={cx(styles.td, styles.th)}></th>
                            <th className={cx(styles.td, styles.th)}>
                                <div className={styles.infoHeader}>
                                    <span>Info</span>
                                    <TextField
                                        type="search"
                                        placeholder="Search in table.."
                                        onChange={(value: string) => setSearchTerm(value)}
                                    />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {vettedData.map((item) => {
                            const { id, isSelected } = item;
                            return (
                                <tr key={id} className={styles.tr}>
                                    <td className={styles.td}>
                                        <Checkbox
                                            id={id}
                                            checked={isSelected}
                                            onChecked={() => onItemChecked && onItemChecked(id)}
                                            onUnchecked={() => onItemUnchecked && onItemUnchecked(id)}
                                        />
                                    </td>
                                    <td className={styles.td}>
                                        <InfoItem data={item} highlight={searchTerm} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    );
};

export default Table;

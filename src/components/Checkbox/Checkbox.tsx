import React, { useState } from 'react';
import { useStyles } from './Checkbox.styles';

export interface Props {
  id?: string;
  checked?: boolean;
  label?: string;
  onChange?(isChecked: boolean): void;
  onChecked?(): void;
  onUnchecked?(): void;
}

const Checkbox: React.FC<Props> = ({
    id,
    checked = false,
    label,
    onChange,
    onChecked,
    onUnchecked,
}) => {
    const [isChecked, setIsChecked] = useState(checked);
    const styles = useStyles();

    const handleChange = () => {
        if (isChecked) {
            onUnchecked && onUnchecked();
        } else {
            onChecked && onChecked();
        }
        onChange && onChange(!isChecked);
        setIsChecked(!isChecked);
    };
    return (
        <div className={styles.root}>
            <input
                id={id}
                type="checkbox"
                defaultChecked={isChecked}
                onChange={handleChange}
                className={styles.checkbox}
            ></input>
            {label && (
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}
        </div>
    );
};

export default Checkbox;

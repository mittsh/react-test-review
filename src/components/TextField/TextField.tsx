import React from 'react';
import cx from 'classnames';
import { useStyles } from './TextField.styles';

type TextFieldTypes = 'text' | 'number' | 'search';

export interface Props {
  type: TextFieldTypes;
  value?: string | number;
  placeholder?: string;
  onChange?(value: string | number);
}

const TextField: React.FC<Props> = ({ value, type, placeholder, onChange }) => {
    const styles = useStyles();

    return (
        <input
            type={type}
            value={value}
            className={cx(
                type !== 'search' && styles.root,
                type === 'search' && styles.search
            )}
            placeholder={placeholder}
            onChange={(e) =>
                onChange(type === 'number' ? +e.target.value : e.target.value)
            }
        />
    );
};

export default TextField;

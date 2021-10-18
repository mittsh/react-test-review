import React, { useState } from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { useStyles } from "./Header.styles";
import { CheckboxAction } from "../../reducers/ItemsReducer";
import Checkbox from "../Checkbox/Checkbox";

export interface Props {
  dispatch: React.Dispatch<CheckboxAction>;
  count: number;
}

const Header: React.FC<Props> = ({ dispatch, count }) => {
  const [itemsToGenerate, setItemsToGenerate] = useState(100);
  const [randomlyCheckCheckboxes, setRandomlyCheckCheckboxes] = useState(true);
  const styles = useStyles();

  const MIN_POSSIBLE_VALUE = 1;
  const MAX_POSSIBLE_VALUE = 1000;

  return (
    <header className={styles.root}>
      <div className={styles.checkbox}>
        <Checkbox
          label="Randomly check checkboxes"
          checked={randomlyCheckCheckboxes}
          onChange={setRandomlyCheckCheckboxes}
        />
      </div>
      <TextField
        type="number"
        value={itemsToGenerate}
        onChange={(newValue: number) => {
          let valueToSet = newValue;

          if (newValue > MAX_POSSIBLE_VALUE) {
            valueToSet = MAX_POSSIBLE_VALUE;
          }
          if (newValue < MIN_POSSIBLE_VALUE) {
            valueToSet = MIN_POSSIBLE_VALUE;
          }

          setItemsToGenerate(valueToSet);
        }}
      />
      <div className={styles.button}>
        <Button
          type="primary"
          onClick={() =>
            dispatch &&
            dispatch({
              type: "init",
              payload: { count: itemsToGenerate, randomlyCheckCheckboxes },
            })
          }
        >
          Generate
        </Button>
      </div>
      <div className={styles.button}>
        <Button
          type="secondary"
          disabled={count >= MAX_POSSIBLE_VALUE}
          onClick={() =>
            dispatch &&
            dispatch({
              type: "add",
              payload: { count: itemsToGenerate, randomlyCheckCheckboxes },
            })
          }
        >
          Add
        </Button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import cx from "classnames";
import { useStyles } from "./Button.styles";

type ButtonTypes = "primary" | "secondary";

export interface Props {
  children: string;
  type: ButtonTypes;
  disabled?: boolean;
  onClick?(): void;
}

const Button: React.FC<Props> = ({ children, type, disabled, onClick }) => {
  const styles = useStyles();

  return (
    <button
      className={cx(
        styles.root,
        type === "primary" && styles.primary,
        type === "secondary" && styles.secondary,
        disabled && styles.disabled
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

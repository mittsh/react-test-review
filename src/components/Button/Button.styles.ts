import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    border: 0,
    padding: "10px",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    opacity: "0.8",
  },
  primary: { backgroundColor: "#2980b9" },
  secondary: { backgroundColor: "#16a085" },
  disabled: { cursor: "not-allowed", backgroundColor: "#95a5a6" },
});

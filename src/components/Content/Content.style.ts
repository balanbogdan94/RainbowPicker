import { makeStyles, shorthands } from "@fluentui/react-components";

export const getStyles = makeStyles({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.padding("1rem", "0.5rem"),
    ...shorthands.gap("2.5rem"),
  },
  textInputContainer: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("0.5rem"),
  },
  textLabel: {
    fontSize: "18px",
    fontWeight: "600",
  },
  textInput: {
    maxWidth: "300px",
  },
});

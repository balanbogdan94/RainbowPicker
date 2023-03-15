import { makeStyles, shorthands } from "@fluentui/react-components";

export const getStyles = makeStyles({
  colorPickerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    ...shorthands.gap("5rem"),
    ...shorthands.margin("10vw 2rem"),
    ...shorthands.padding("unset"),
    "list-style": "none",
  },
  dot: {
    aspectRatio: "1/1",
    width: "200px",
    backgroundColor: "blueviolet",
    display: "inline-block",
    cursor: "pointer",
    ...shorthands.borderRadius("50%"),
    ...shorthands.transition("width", "0.3s", "0s", "ease-in-out"),
    ":hover": {
      width: "250px",
      ...shorthands.transition("width", "0.3s", "0s", "ease-in-out"),
    },
  },
  selectedDOT: {
    ...shorthands.border("10px", "solid", "white"),
    ":hover": {
      ...shorthands.border("10px", "solid", "white"),
    },
  },
  colorItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

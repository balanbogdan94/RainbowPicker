import { makeStyles, shorthands } from "@fluentui/react-components";
import { CSSProperties } from "react";

export const getStyles = makeStyles({
  headerContainer: {
    minHeight: "75px",
    backgroundColor: "#454545",
    color: "#f2f2f2",
    ...shorthands.padding("0", "0.5rem"),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: "28px",
    fontWeight: "900",
    color: "#000",
    backgroundImage:
      "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  userContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },
});

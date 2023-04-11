import React from "react";
import { getStyles } from "./Header.styles";
import { makeStyles, Text } from "@fluentui/react-components";
import { Person48Regular, Person28Regular } from "@fluentui/react-icons";
import { useGlobalState } from "../../App";

const Header: React.FC = () => {
  const { color, name } = useGlobalState();
  const style = getStyles();
  console.log("Hello from Header.tsx");
  return (
    <header className={style.headerContainer}>
      <Text className={style.headerText}>Rainbow color picker</Text>
      <div style={{ color: color }} className={style.userContainer}>
        <Person28Regular />
        <Text>{name}</Text>
      </div>
    </header>
  );
};

export default Header;

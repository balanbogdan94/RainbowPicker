import React from "react";
import { getStyles } from "./Header.styles";
import { makeStyles, Text } from "@fluentui/react-components";
import { Person48Regular, Person28Regular } from "@fluentui/react-icons";

const Header: React.FC<{ name: string; color: string }> = ({ name, color }) => {
  const style = getStyles();
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

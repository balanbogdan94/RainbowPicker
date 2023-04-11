import React from "react";
import { getStyles } from "./ColorPicker.style";
import { rainbowColors } from "./../../../Model/rainbowColors";
import { Button, mergeClasses } from "@fluentui/react-components";
import { useGlobalState } from "../../../App";
import { observer } from "mobx-react-lite";

const ColorPicker = () => {
  const { color, onColorChanged } = useGlobalState();
  const classNames = getStyles();
  const selectedStyle = mergeClasses(classNames.dot, classNames.selectedDOT);
  return (
    <ul className={classNames.colorPickerContainer}>
      {rainbowColors.map((c) => (
        <li key={c.name}>
          <div style={{ color: c.hex }} className={classNames.colorItem}>
            <Button
              style={{ backgroundColor: c.hex }}
              className={c.hex === color ? selectedStyle : classNames.dot}
              onClick={() => {
                onColorChanged && onColorChanged(c);
              }}
            />
            <h3>{c.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default observer(ColorPicker);

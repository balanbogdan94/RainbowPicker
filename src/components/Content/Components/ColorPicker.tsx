import React from "react";
import { getStyles } from "./ColorPicker.style";
import { rainbowColors } from "./../../../Model/rainbowColors";
import { Button, mergeClasses } from "@fluentui/react-components";
type TColorPickerProps = {
  selectedColor: string;
  onColorChanged: (color: string) => void;
};

const ColorPicker: React.FC<TColorPickerProps> = ({
  selectedColor,
  onColorChanged,
}) => {
  const classNames = getStyles();
  const selectedStyle = mergeClasses(classNames.dot, classNames.selectedDOT);
  console.log(selectedColor);
  return (
    <ul className={classNames.colorPickerContainer}>
      {rainbowColors.map((c) => (
        <li>
          <div style={{ color: c.hex }} className={classNames.colorItem}>
            <Button
              style={{ backgroundColor: c.hex }}
              className={
                c.hex === selectedColor ? selectedStyle : classNames.dot
              }
              onClick={() => {
                onColorChanged(c.hex);
              }}
            />
            <h3>{c.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ColorPicker;

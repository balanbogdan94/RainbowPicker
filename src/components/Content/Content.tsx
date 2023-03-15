import { Input, Label, useId } from "@fluentui/react-components";
import React from "react";
import useDebounce from "../../hooks/useDebounce";
import ColorPicker from "./Components/ColorPicker";
import { getStyles } from "./Content.style";
type TContentProps = {
  name: string;
  color: string;
  onNameChanged: (name: string) => void;
  onColorChanged: (color: string) => void;
};
const Content: React.FC<TContentProps> = ({
  name,
  onNameChanged,
  color,
  onColorChanged,
}) => {
  const style = getStyles();
  const inputId = useId("input");
  const [inputText, setInputText] = React.useState(name);
  const debouncedName = useDebounce(inputText, 500);

  React.useEffect(() => {
    onNameChanged(debouncedName);
  }, [debouncedName]);

  return (
    <div className={style.contentContainer}>
      <div className={style.textInputContainer}>
        <Label
          style={{ color: color }}
          htmlFor={inputId}
          className={style.textLabel}
          size={"medium"}
        >
          Name
        </Label>
        <Input
          type="text"
          className={style.textInput}
          appearance="outline"
          id={inputId}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <ColorPicker selectedColor={color} onColorChanged={onColorChanged} />
    </div>
  );
};

export default Content;

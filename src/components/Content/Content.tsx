import { Input, Label, useId } from "@fluentui/react-components";
import React from "react";
import { useGlobalState } from "../../App";
import useDebounce from "../../hooks/useDebounce";
import ColorPicker from "./Components/ColorPicker";
import { getStyles } from "./Content.style";

const Content: React.FC = () => {
  const { color, name, onNameChanged, onColorChanged } = useGlobalState();
  const style = getStyles();
  const inputId = useId("input");
  const [inputText, setInputText] = React.useState(name);
  const debouncedName = useDebounce(inputText, 500);

  React.useEffect(() => {
    if (onNameChanged) {
      onNameChanged(debouncedName ?? "");
    }
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
      <ColorPicker />
    </div>
  );
};

export default Content;

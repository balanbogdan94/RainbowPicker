import { useState } from "react";
import "./App.scss";
import Content from "./components/Content/Content";
import Header from "./components/Header";
import { rainbowColors } from "./Model/rainbowColors";
import Footer from "./components/Footer/Footer";

function App() {
  const [color, setColor] = useState<string>(rainbowColors[0].hex);
  const [name, setName] = useState("defaultUser");
  const onNameChanged = (name: string) => {
    setName(name);
  };

  const onColorChanged = (color: string) => {
    setColor(color);
  };

  return (
    <>
      <Header name={name} color={color} />
      <Content
        name={name}
        onNameChanged={onNameChanged}
        color={color}
        onColorChanged={onColorChanged}
      />
      <Footer color={color} />
    </>
  );
}

export default App;

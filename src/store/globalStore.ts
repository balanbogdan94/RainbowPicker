import { makeAutoObservable, observable } from "mobx";
import { RainbowColor, rainbowColors } from "../Model/rainbowColors";

export class Store {
  private pColor = rainbowColors[0].hex;
  private pName = "defaultUser";

  constructor() {
    makeAutoObservable(this);
  }
  get color() {
    return this.pColor;
  }

  get name() {
    return this.pName;
  }

  onColorChanged = (color: RainbowColor) => {
    this.pColor = color.hex;
  };

  onNameChanged = (name: string) => {
    this.pName = name;
  };
}

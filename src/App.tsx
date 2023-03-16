import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import "./App.scss";
import Content from "./components/Content/Content";
import Header from "./components/Header";
import { Store } from "./store/globalStore";

export const GlobalStateContext = React.createContext<Partial<Store>>({});
const store = new Store();
function App() {
  return (
    <GlobalStateContext.Provider value={store}>
      <Header />
      <Content />
      <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={store.color}
            fill-opacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,117.3C672,117,768,75,864,74.7C960,75,1056,117,1152,128C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div></div>
      </footer>
    </GlobalStateContext.Provider>
  );
}

export default observer(App);

export const useGlobalState = () => React.useContext(GlobalStateContext);

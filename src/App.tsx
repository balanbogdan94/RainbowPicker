import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useState } from 'react';
import './App.scss';
import Content from './components/Content/Content';
import Header from './components/Header';
import { Store } from './store/globalStore';
import { rainbowColors } from './Model/rainbowColors';
import Footer from './components/Footer/Footer';

export const GlobalStateContext = React.createContext<Partial<Store>>({});
const store = new Store();
function App() {
	return (
		<GlobalStateContext.Provider value={store}>
			<Header />
			<Content />
			<Footer />
		</GlobalStateContext.Provider>
	);
}

export default observer(App);

export const useGlobalState = () => React.useContext(GlobalStateContext);

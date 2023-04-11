import React from 'react';
import { useState } from 'react';
import './App.scss';
import Content from './components/Content/Content';
import Header from './components/Header';
import { rainbowColors } from './Model/rainbowColors';
import Footer from './components/Footer/Footer';

type GlobalState = {
	color: string;
	name: string;
	onNameChanged: (name: string) => void;
	onColorChanged: (color: string) => void;
};

export const GlobalStateContext = React.createContext<Partial<GlobalState>>({});
export const useGlobalState = () => React.useContext(GlobalStateContext);

function App() {
	const [color, setColor] = useState<string>(rainbowColors[0].hex);
	const [name, setName] = useState('defaultUser');
	const onNameChanged = (name: string) => {
		setName(name);
	};
	const onColorChanged = (color: string) => {
		setColor(color);
	};

	return (
		<GlobalStateContext.Provider
			value={{
				color,
				name,
				onNameChanged,
				onColorChanged,
			}}>
			<Header />
			<Content />
			<Footer color={color} />
		</GlobalStateContext.Provider>
	);
}

export default App;

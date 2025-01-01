import './App.css'

import { useCallback, useState } from "react";
import { Container } from "react-bootstrap";
import Hangman from './components/Hangman';
import Header from "./components/Header";

const MAX_LIVES: number = 7;

function App() {
	const [lives, setLives] = useState<number>(MAX_LIVES);

	const onCategoryClick = useCallback((category: string) => {
		console.log("category ", category);
	}, []);

	const onLivesChanged = useCallback(setLives, [setLives]);

	const category = "muscles";
	const categories = ["category1", "category2"];
	const word = "esternocleidomastoideo";

	return (<Container fluid="sm">
		<Header category={category} categories={categories} onCategoryClick={onCategoryClick} lives={lives} maxLives={MAX_LIVES} />
		<Hangman word={word} onLivesChanged={onLivesChanged} maxLives={MAX_LIVES}/>
	</Container>);
}

export default App

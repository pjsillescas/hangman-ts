import './App.css'

import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Hangman from './components/Hangman';
import Header from "./components/Header";
import WordService from "./services/WordService";

const MAX_LIVES: number = 7;

type AppState = {
	categories: string[],
	category: string,
	word: string,
	lives: number,
};

function App() {
	const defaultState = {
		categories: [],
		category: "",
		word: "",
		lives: MAX_LIVES,
	};

	const [appState, setAppState] = useState<AppState>(defaultState);

	useEffect(() => {
		const wordService = new WordService();
		const cats = wordService.getCategories();
		const cat = cats[Math.floor(Math.random() * cats.length)];
		const state = {
			categories: cats,
			category: cat,
			word: wordService.getRandomWordFromCategory(cat),
			lives: MAX_LIVES,
		};
		setAppState(state);
	},[]);

	const onCategoryClick = useCallback((category: string) => {
		console.log("category ", category);
	}, []);

	const onLivesChanged = useCallback((lives: number) => {
		const state = {
			categories: appState.categories,
			category: appState.category,
			word: appState.word,
			lives: lives,
		};
		setAppState(state);
	}, [setAppState, appState]);

	return (<Container fluid="sm">
		<Header category={appState.category} categories={appState.categories} onCategoryClick={onCategoryClick} lives={appState.lives} maxLives={MAX_LIVES} />
		<Hangman word={appState.word} onLivesChanged={onLivesChanged} maxLives={MAX_LIVES}/>
	</Container>);
}

export default App

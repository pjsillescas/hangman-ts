import { useState } from "react";
import WordDisplay from "./WordDisplay";
import GameOver from "./GameOver";
import Keyboard from "./Keyboard";

const WILDCARD: string = "_";

type Props = {
	word: string,
	maxLives: number,
	onLivesChanged: (lives: number) => void,
};

type HangmanState = {
	hiddenWord: string,
	selectedLetters: string[],
	lives: number,
};

export default function Hangman({ word, onLivesChanged, maxLives }: Props) {
	const defaultState = { hiddenWord: WILDCARD.repeat(word.length), selectedLetters: [], lives: maxLives, isFinished: false, };
	const [ hangmanState, setHangmanState ] = useState<HangmanState>(defaultState);

	const onSelectedLetter = (letter: string) => {
		const newSelectedLetters = hangmanState.selectedLetters.concat(letter);

		let state = {
			hiddenWord: hangmanState.hiddenWord,
			selectedLetters: newSelectedLetters,
			lives: hangmanState.lives,
		};

		if(word.includes(letter)) {
			const newHiddenWord = word.split("").map((c, index) => c === letter ? letter : hangmanState.hiddenWord.charAt(index)).join("");
			state.hiddenWord = newHiddenWord;
		} else {
			state.lives = hangmanState.lives - 1;
			onLivesChanged(state.lives);
		}

		setHangmanState(state);

	};
	
	const isWordComplete = !hangmanState.hiddenWord.includes(WILDCARD);
	const isGameFinished = hangmanState.lives === 0 || isWordComplete;
	return (<>
		<WordDisplay hiddenWord={hangmanState.hiddenWord} wildcard={WILDCARD} />
		{!isGameFinished && <>
		<Keyboard selectedLetters={hangmanState.selectedLetters} onSelectedLetter={onSelectedLetter} />
		</>}
		{!!isGameFinished && <GameOver word={word} isWon={isWordComplete && hangmanState.lives > 0}/>}
	</>);
}
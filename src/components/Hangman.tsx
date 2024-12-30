import { useState } from "react";
import Header from "./Header";
import WordDisplay from "./WordDisplay";
import GameOver from "./GameOver";
import Keyboard from "./Keyboard";

const MAX_LIVES: number = 7;
const WILDCARD: string = "_";

type Props = {
	word: string,
	category: string,
};

type HangmanState = {
	hiddenWord: string,
	selectedLetters: string[],
	lives: number,
	isFinished: boolean,
};

export default function Hangman({ word, category }: Props) {
	const defaultState = { hiddenWord: WILDCARD.repeat(word.length), selectedLetters: [], lives: MAX_LIVES, isFinished: false, };
	const [ hangmanState, setHangmanState ] = useState<HangmanState>(defaultState);

	const onSelectedLetter = (letter: string) => {
		const newSelectedLetters = hangmanState.selectedLetters.concat(letter);

		let state = {
			hiddenWord: hangmanState.hiddenWord,
			selectedLetters: newSelectedLetters,
			lives: hangmanState.lives,
			isFinished: hangmanState.isFinished,
		};

		if(word.includes(letter)) {
			const newHiddenWord = word.split("").map((c, index) => c === letter ? letter : hangmanState.hiddenWord.charAt(index)).join("");
			state.hiddenWord = newHiddenWord;
			state.lives = hangmanState.lives;
			state.isFinished = !newHiddenWord.includes(WILDCARD);
		} else {
			state.lives = hangmanState.lives - 1;
		}

		setHangmanState(state);

	};
	
	return (<>
		<Header category={category} lives={hangmanState.lives} maxLives={MAX_LIVES} />
		{hangmanState.lives > 0 && <>
		<WordDisplay hiddenWord={hangmanState.hiddenWord} wildcard={WILDCARD} />
		<Keyboard selectedLetters={hangmanState.selectedLetters} onSelectedLetter={onSelectedLetter} />
		</>}
		{(hangmanState.lives === 0 || hangmanState.isFinished) && <GameOver word={word} isWon={hangmanState.isFinished && hangmanState.lives > 0}/>}
	</>);
}
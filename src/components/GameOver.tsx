import { Row } from "react-bootstrap";

type Props = {
	word: string,
	isWon: boolean,
};
export default function GameOver({ word, isWon }: Props) {
	return (<Row>
		{!!isWon && <p>You Won!</p>}
		{!isWon && <p>You lost! The word is '{word}'</p>}
	</Row>);
}
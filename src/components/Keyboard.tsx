import { Row } from "react-bootstrap";
import LetterKey from "./LetterKey";

type Props = {
	selectedLetters: string[],
	onSelectedLetter: (letter: string) => void;
};

const VALID_LETTERS: string = "abcdefghijklmnopqrstuvwxyz";

export default function Keyboard({selectedLetters, onSelectedLetter }: Props) {
	const isDisabled = (c: string) => selectedLetters.includes(c);

	return (
		<Row sm={12} className="keyboard">
			{VALID_LETTERS.split("").map((c, index) => 
				<LetterKey key={`key-${index}`} letter={c} disabled={isDisabled(c)} onSelectedLetter={onSelectedLetter} />
			)}
		</Row>
	);
}
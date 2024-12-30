import { useCallback } from "react";
import { Col } from "react-bootstrap";

type Props = {
	letter: string,
	disabled: boolean,
	onSelectedLetter: (letter: string) => void;
};

export default function LetterKey({ letter, disabled, onSelectedLetter }: Props) {
	const onClick = useCallback(() => {
		onSelectedLetter(letter);
	},[onSelectedLetter]);
	
	return (<Col sm={1}><button className="key-letter" disabled={disabled} onClick={onClick}>{letter}</button></Col>);
}
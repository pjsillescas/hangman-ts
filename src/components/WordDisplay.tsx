import { Row } from "react-bootstrap";
import LetterCard from "./LetterCard";

type Props = {
	hiddenWord: string,
	wildcard: string,
};

export default function WordDisplay({ hiddenWord, wildcard }: Props) {
	const letters = hiddenWord.split("");
	return (<>
		<Row sm={12} className="word-display">
				{letters.map((c, index) => <LetterCard key={`card-${index}`} letter={c} isWildcard={c === wildcard}/>)}
		</Row>
	</>);
}
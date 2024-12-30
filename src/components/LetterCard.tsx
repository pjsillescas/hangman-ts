import { Col } from "react-bootstrap";

type Props = {
	letter: string,
	isWildcard: boolean,
};
export default function LetterCard({ letter, isWildcard }: Props) {
	return (<>
		{!isWildcard && <Col sm={1} className="letter-card">{letter}</Col>}
		{!!isWildcard && <Col sm={1} className="wildcard"></Col>}
	</>);
}
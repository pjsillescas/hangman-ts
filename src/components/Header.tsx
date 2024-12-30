import { Row } from "react-bootstrap";
import LivesMeter from "./LivesMeter";

type Props = {
	category: string,
	lives: number,
	maxLives: number,
};

export default function Header({ category, lives, maxLives } : Props) {
	return (<Row sm={12}>
		<h3>{category}</h3>
		<LivesMeter lives={lives} maxLives={maxLives} />
	</Row>);
}
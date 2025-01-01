import { Col, Row } from "react-bootstrap";
import LivesMeter from "./LivesMeter";
import Menu from "./Menu";

type Props = {
	category: string,
	lives: number,
	maxLives: number,
	categories: string[],
	onCategoryClick: (category: string) => void,
};

export default function Header({ category, categories, onCategoryClick, lives, maxLives } : Props) {
	return (<Row sm={12} className="header">
		<Col className="header-data">
			{/* <span className="menu"><Icon.List size={50} /></span> */}
			<Menu categories={categories} onCategoryClick={onCategoryClick} />
			<span className="category">{category}</span>
		</Col>
		<LivesMeter lives={lives} maxLives={maxLives} />
	</Row>);
}
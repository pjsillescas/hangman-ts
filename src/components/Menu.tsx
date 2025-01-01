import { useCallback, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

type Props = {
	onCategoryClick: (category: string) => void,
	categories: string[],
};

type CategoryProps = {
	category: string,
	onCategoryClick: (category: string) => void,
};

function CategoryComponent({ category, onCategoryClick }: CategoryProps) {
	const onClick = useCallback(() => {
		onCategoryClick(category);
	},[onCategoryClick]);

	return (<li onClick={onClick}>{category}</li>);
}

export default function Menu({ categories, onCategoryClick }: Props) {

	const [showMenu, setShowMenu ] = useState<boolean>(false);

	const onMenuClick = useCallback(() => {
		setShowMenu(!showMenu);
	},[setShowMenu, showMenu]);

	return (<>
		<button onClick={onMenuClick}>
			<Icon.List size={40} />
		</button>
		{!!showMenu && 
		<ul className="menu-list">
			{categories.map(cat => <CategoryComponent key={`cat-${cat}`} category={cat} onCategoryClick={onCategoryClick} />)}
		</ul>}
	</>);
}
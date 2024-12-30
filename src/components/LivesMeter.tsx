type Props = {
	lives: number,
	maxLives: number,
};

export default function LivesMeter( { lives, maxLives }: Props) {
	return (<span className="lives-meter">{lives}/{maxLives}</span>);
}
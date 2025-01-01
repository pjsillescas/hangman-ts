type Props = {
	lives: number,
	maxLives: number,
};

export default function LivesMeter( { lives, maxLives }: Props) {
	const percent = lives * 100 / maxLives;
	const style = (percent > 0) ? {width: `${percent}%`} : { display: "none" };
	return (<>
		<div className="lives-meter">
			<div className="lives-meter-selected" style={style}></div>
	  	</div> 
	</>);
}
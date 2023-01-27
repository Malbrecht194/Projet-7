import './host.scss'

export default function Host(props) {
	return (
		<aside className="hostContainer">
			<div className="hostContainer__name">{props.hostName}</div>
			<div className="hostContainer__img">
				<img src={props.hostPic} alt={props.id} />
			</div>
		</aside>
	);
}
import emptyStar from "../../assets/emptyStar.png";
import fullStar from "../../assets/fullStar.png";
import './rating.scss'

export default function Rate({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="ratingBar">
			{stars.map((rate) =>
				score >= rate ? (
					<img
						key={rate.toString()}
						className="star"
						src={fullStar}
						alt="rating star"
					/>
				) : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
					<img
						key={rate.toString()}
						className="star"
						src={emptyStar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}
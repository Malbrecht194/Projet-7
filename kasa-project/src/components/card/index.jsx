import "./card.scss"
export default function Card({appartement}) { //objet qui contien toute les infos
    return (
        <div className="card">
            {appartement.title}
        </div>
    )
}
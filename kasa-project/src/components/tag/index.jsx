import './tag.scss'

export default function Tag(props){
    return(
        <div className="container">
            <span className="container__tag">{props.tag}</span>
        </div>
    )
}
import './tag.scss'

export default function Tag(props){
    return(
        <div className="container">
            <h5 className="container__tag">{props.tag}</h5>
        </div>
    )
}
import "./collapse.scss"
import Toggle from "../../assets/toggle.png"
import { useState } from "react"

export default function Collapse({ title, children  }) {
    
    const [isOpen, setOpen] = useState(false)
    
    return (

        <div className="collapse" data-open={isOpen}>
            <div className="collapse__title">
                <h3 className="collapse__title__text">{title}</h3>
                <img className="collapse__title__img" src={Toggle} alt="Toggle" onClick={() => setOpen(!isOpen)} />
            </div>
            <div className="collapse__content">{children}</div>
        </div>
    )
}
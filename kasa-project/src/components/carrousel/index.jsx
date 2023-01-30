import "./carrousel.scss"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import { useState } from "react"

export default function Carrousel({ slides }) {
    const [slide, setSlide] = useState(0)
    
    const next = () => setSlide((slide + 1) % (slides.length) ) // A revoir les modulo avant la soutenance
    const prev = () => setSlide(((slide - 1 ) + slides.length) % (slides.length))

    return (
        <section className="carrousel">
            <img
                className="carrousel__leftArrow"
                src={leftArrow}
                alt="Toggle"
                onClick={prev}
            />

            <img
                className="carrousel__slide"
                src={slides[slide]}
                alt=""
            />

            <span className="carrousel__count">{slide + 1}/{slides.length}</span>

            <img
                className="carrousel__rightArrow"
                src={rightArrow}
                alt="Toggle"
                onClick={next}

            />
        </section>
    )

}

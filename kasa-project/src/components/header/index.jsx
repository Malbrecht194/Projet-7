import logo from '../../assets/logo/Logo__header.png'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="header">
            <figure className="header__imgContainer">
                <img src={logo} alt="Logo de kasa" className="header__imgContainer__img"/>
            </figure>
            <nav className="header__nav">
                <Link to='/' className="header__nav__item">Accueil</Link>
                <Link to='/' className="header__nav__item">A propos</Link>
            </nav>
        </div>
    )
}
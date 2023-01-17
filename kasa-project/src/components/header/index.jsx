import logo from '../../assets/logo/Logo__header.png'

export default function Header() {
    return (
        <div className="header">
            <div className="header__imgContainer">
                <img src={logo} alt="Logo de kasa" className="header__imgContainer__img"/>
            </div>
            <nav className="header__nav">
                <a href="#"><p className="header__nav__item">Accueil</p></a>
                <a href="#"><p className="header__nav__item">A propos</p></a>
            </nav>
        </div>
    )
}
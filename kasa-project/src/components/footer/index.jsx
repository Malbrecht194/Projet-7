import logo from '../../assets/logo/Logo__footer.png'
import "./footer.scss"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__imgContainer">
                <img src={logo} alt="Logo de Kasa" className="footer__imgContainer__img" />
            </div>
            <p className="footer__title">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import "./error404.scss"

export default function Error404() {
    return (
        <>
            <Header />
            <section className="error404">
                <div className="error404__error">
                    <h2 className="error404__error__404">404</h2>
                    <h3 className="error404__error__description">
                        Oups! La page que vous demandez n'existe pas.
                    </h3>
                </div>
                <Link to='/' className="error404__redirection">
                    Retourner sur la page d’accueil
                </Link>

            </section>
            <Footer />
        </>
    )
}
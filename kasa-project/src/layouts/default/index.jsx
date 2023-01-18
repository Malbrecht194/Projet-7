import Footer from "../../components/footer"
import { Outlet } from 'react-router-dom'
import Header from "../../components/header"
import "./defaultLayout.scss"

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
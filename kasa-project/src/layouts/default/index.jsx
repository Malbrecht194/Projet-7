import Footer from "../../components/footer"
import {Outlet} from 'react-router-dom'

export default function DefaultLayout(){
    return (
        <>
        <main>
            <Outlet/>
        </main>
        <Footer></Footer>
        </>
    )
}
import { useLoaderData } from "react-router-dom"
import Banner from "../../components/banner"
import Card from "../../components/card"
import "./home.scss"

export default function Home() {
    const appartements = useLoaderData()
    
    return (
        <>
            <Banner/>
            <div>
                {appartements.map(appartement => (
                    <Card appartement={appartement}/>
                ))}
            </div>
        </>
    )
}

export async function loader(){
    return ( await import("../../data/logements.json")).default // chargement au moment ou on l'appel
}
import { useLoaderData } from "react-router-dom";
import BannerAbout from "../../components/bannerAbout";
import Collapse from "../../components/collapse";
import "./about.scss"

export default function About() {
    const aboutTexts = useLoaderData()
    
    return (
        <>
            <BannerAbout />
            <div className="collapsesContainer">
                {aboutTexts.map(aboutText => (
                    <Collapse title={aboutText.title} key={aboutText.title}>
                        {aboutText.content}
                    </Collapse>
                ))}
            </div>
        </>
    )
}

export async function loader() {
    return (await import("../../data/aboutText.json")).default // chargement au moment ou on l'appel
}
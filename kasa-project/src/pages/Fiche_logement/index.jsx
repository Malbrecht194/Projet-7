import { useEffect } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import Collapse from "../../components/collapse"
import Host from "../../components/host"
import Rate from "../../components/rating"
import Tag from "../../components/tag"
import "./ficheLogement.scss"


export default function FicheLogement() {
    const apart = useLoaderData()

    return (
        <>
            <section className="ficheLogement">

                <div className="carrousel"></div>
                <div className="apartment">
                    <div className="apartment__infos">
                        <h1>{apart.title}</h1>
                        <h3>{apart.location}</h3>
                        <div className="apartment__infos__tags">
                            {apart.tags.map(tag => {
                                <Tag tag={tag} />
                            })}
                        </div>
                    </div>

                    <div className="apartment__host">
                        <div className="apartment__host__infos">
                            <Host
                                hostName={apart.host.name}
                                hostPic={apart.host.picture}
                            />
                        </div>
                        <div className="apartment__host__rating">
                            <Rate score={apart.rating}/>
                        </div>

                    </div>

                </div>
                <div className="apartment__collapses">
                    <Collapse title='Description' >
                        {apart.description}
                    </Collapse>
                    
                    <Collapse title='Equipements' >
                        {apart.equipments}
                    </Collapse>
                </div>

            </section>
        </>
    )
}

export async function loader({ params }) {
    const apartments = (await import('../../data/logements.json')).default
    return apartments.find(apartment => apartment.id === params.id)
}

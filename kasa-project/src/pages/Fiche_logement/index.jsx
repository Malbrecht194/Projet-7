import "./ficheLogement.scss"

export default function FicheLogement() {
    const apartment = useLoaderData() // normal
    
    return (
        <>
            <div>
               
            </div>
        </>
    )
}

export async function loader({ params }) {
    const apartments = (await import('../../data/logements.json')).default
    return apartments.find(apartment => apartment.id === params.id)
}

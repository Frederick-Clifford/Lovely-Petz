import PetSections from "../components/PetSections"
import { CATS, CATS_SECTION, DOGS, DOGS_SECTION, FISHES, FISHES_SECTION } from "../utils/data"

const PetsPage = () => {

    return(
        
        <section className="grid grid-cols-1 ss:grid-cols-2 gap-5 px-3 xs:px-5 ss:px-1 contain-margin">

            <PetSections title={DOGS_SECTION} items={DOGS} />

            <PetSections title={CATS_SECTION} items={CATS}/>

            <PetSections title={FISHES_SECTION} items={FISHES}/>

        </section>

    )
}

export default PetsPage
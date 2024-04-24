import { useParams } from "react-router-dom"

import PetItemCard from "../components/PetItemCard"
import PetSaleItemCard from "../components/PetSaleItemCard"

import PropTypes from "prop-types"

import { ABYSSINIAN, ABYSSINIAN_ID, AMERICAN_SHORT_HAIR, AMERICAN_SHORT_HAIR_ID, CATS, CAUCASIAN_SHEPHERD, CAUCASIAN_SHEPHERD_ID, CHARTREUX, CHARTREUX_ID, DOGS, FISHES, GERMAN_SHEPHERD, GERMAN_SHEPHERD_ID, GUPPIES, GUPPIES_ID, KANGAL, KANGAL_ID, MICKEY_MOUSE_PLATY, MICKEY_MOUSE_PLATY_ID, ZEBRA_FISH, ZEBRA_FISH_ID } from "../utils/data"

import ErrorPage from "./ErrorPage"

const PetSales = ({pet, breed}) => {

    return(
        
        <section className="flex flex-col gap-2 px-2 contain-margin">

            <div>

                <PetItemCard isHoverable={false} {...pet} />

            </div>

            <div className="w-max m-auto xs:m-0 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-1 p-1">

                {breed.map((item) =>
                
                    <PetSaleItemCard isSale={true} key={item.id} {...item} />
                )}

            </div>

        </section>
    )

}

PetSales.propTypes = {
    pet: PropTypes.object,
    breed: PropTypes.array
}

PetSales.defaultProps = {
    pet: DOGS[0],
    breed: CAUCASIAN_SHEPHERD
}



const PetSalesPage = () => {

    const { petId } = useParams()

    if (petId == CAUCASIAN_SHEPHERD_ID) {

        return(<PetSales pet={DOGS[0]} breed={CAUCASIAN_SHEPHERD} />)
    } else if (petId == KANGAL_ID) {

        return(<PetSales pet={DOGS[1]} breed={KANGAL} />)
    } else if (petId == GERMAN_SHEPHERD_ID) {

        return(<PetSales pet={DOGS[2]} breed={GERMAN_SHEPHERD} />)
    } else if (petId == ABYSSINIAN_ID) {

        return(<PetSales pet={CATS[0]} breed={ABYSSINIAN} />)
    } else if (petId == AMERICAN_SHORT_HAIR_ID) {

        return(<PetSales pet={CATS[1]} breed={AMERICAN_SHORT_HAIR} />)
    } else if (petId == CHARTREUX_ID) {

        return(<PetSales pet={CATS[2]} breed={CHARTREUX} />)
    } else if (petId == GUPPIES_ID) {

        return(<PetSales pet={FISHES[0]} breed={GUPPIES} />)
    } else if (petId == MICKEY_MOUSE_PLATY_ID) {

        return(<PetSales pet={FISHES[1]} breed={MICKEY_MOUSE_PLATY} />)
    } else if (petId == ZEBRA_FISH_ID) {

        return(<PetSales pet={FISHES[2]} breed={ZEBRA_FISH} />)
    } else {
        return(<ErrorPage />)
    }

}

export default PetSalesPage
import PropTypes from "prop-types"

import { Link } from "react-router-dom"

import { AMERICAN_SHORT_HAIR_BREED, GERMAN_SHEPHERD_BREED, KANGAL_BREED } from "../utils/data"

const PetItemCard = ({id, breed, image, isHoverable}) => {

    let objectPosition = ""

    let hover = ""

    switch (breed) {

        case KANGAL_BREED:
            objectPosition = "object-left"
            break

        case GERMAN_SHEPHERD_BREED:
            objectPosition = "object-right"
            break

        case AMERICAN_SHORT_HAIR_BREED:
            objectPosition = "object-left"
            break
    
        default:
            objectPosition = "object-center"
            break
    }

    switch (isHoverable) {
        
        case true:
            hover = "cursor-pointer hover:bg-primary-color group"
            break;
    
        default:
            hover = "cursor-text"
            break;
    }

    return(

        <Link to={`/pet/sales/${id}`} reloadDocument>

            <div className={`${hover} p-1 flex items-center justify-start gap-3 rounded-2xl border-[1px] border-primary-color`}>

                <img className={`smaller-image group-hover:border-white ${objectPosition}`}
                    src={image} 
                    alt={breed} />

                <h1 className="card-text group-hover:text-white">
                    {breed}
                </h1>

            </div>
        
        </Link>
    )

}

PetItemCard.propTypes = {
    id: PropTypes.number,
    breed: PropTypes.string,
    image: PropTypes.any,
    isHoverable: PropTypes.bool
}

PetItemCard.defaultProps = {
    id: 0,
    breed: "Unknown",
    image: "Unknown",
    isHoverable: true
}

export default PetItemCard
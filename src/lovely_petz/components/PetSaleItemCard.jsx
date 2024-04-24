import { Link } from "react-router-dom"

import { GUPPIES, PET_BUY_OBJECT_BOTTOM_IMAGES, PET_BUY_OBJECT_LEFT_IMAGES, PET_BUY_OBJECT_RIGHT_IMAGES, PET_BUY_OBJECT_TOP_IMAGES, PET_SALES_OBJECT_LEFT_IMAGES, PET_SALES_OBJECT_RIGHT_IMAGES } from "../utils/data"

import PropTypes from "prop-types"

const PetSaleItemCard = ({id, isSale, price, image}) => {

    let objectPosition = isSale ? setUpPetSalesImagePosition() : setUpPetBuyImagePostion()

    const path = isSale ? `/pet/buy/${id}` : ""

    function setUpPetSalesImagePosition (){
   
        if (PET_SALES_OBJECT_LEFT_IMAGES.includes(id)) {
        
            return "object-left"
        } else if (PET_SALES_OBJECT_RIGHT_IMAGES.includes(id)) {

            return "object-right"
        } else {

            return "object-center"
        }
    }

    function setUpPetBuyImagePostion () {

        if (PET_BUY_OBJECT_LEFT_IMAGES.includes(id)) {

            return "object-left"
        } else if (PET_BUY_OBJECT_RIGHT_IMAGES.includes(id)) {
            
            return "object-right"
        } else if (PET_BUY_OBJECT_TOP_IMAGES.includes(id)) {

            return "object-top"
        } else if (PET_BUY_OBJECT_BOTTOM_IMAGES.includes(id)) {
            
            return "object-bottom"
        } else {
            
            return "object-center"
        }
    }

    return(

        <Link to={path}
            reloadDocument>

            <div className={`w-max rounded-xl relative ${isSale ? "cursor-pointer" : " cursor-default"}`}>

                <div className={`absolute inset-0 rounded-xl bg-black ${isSale ? " bg-opacity-0 hover:bg-opacity-20" : "bg-opacity-5"}`}></div>

                <img className={`${objectPosition} ${isSale ? "pet-sales-image" : "pet-buy-image"}`} 
                    src={image} 
                    alt={id} />

                <h1 className="second-card-text">
                    {price}
                </h1>

            </div>

        </Link>
        
    )

}

PetSaleItemCard.propTypes = {
    id: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.any,
    isSale: PropTypes.bool
}

PetSaleItemCard.defaultProps = {
    id: "Unkown",
    price: "Unknown",
    image: "Unknown",
    isSale: true
}

export default PetSaleItemCard
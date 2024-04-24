import PetSaleItemCard from "../components/PetSaleItemCard"

import { ABYSSINIAN, AMERICAN_SHORT_HAIR, CHARTREUX, CAUCASIAN_SHEPHERD, GERMAN_SHEPHERD, GUPPIES, KANGAL, MICKEY_MOUSE_PLATY, PET_BUY_BUTTON_TEXT, ZEBRA_FISH, PET_BUY_COUNTRY_REGION_INPUT_FIELD, PET_BUY_FULL_NAME_INPUT_FIELD, PET_BUY_PHONE_NUMBER_INPUT_FIELD, PET_BUY_EMAIL_INPUT_FIELD, PET_BUY_ADDRESS_INPUT_FIELD, PET_BUY_CITY_INPUT_FIELD, PET_BUY_STATE_INPUT_FIELD, PET_BUY_ZIP_CODE_INPUT_FIELD } from "../utils/data"

import { Link, useParams } from "react-router-dom"

import PropTypes from "prop-types"

import ErrorPage from "./ErrorPage"


const InputField = ({inputField}) => {

    return(

        <div className="mb-1">

            <label className="label-text"
                htmlFor={inputField.label}>
                {inputField.label}
            </label>
            
            <div className="input-layout">

                <img className="icon-image"
                    src={inputField.icon} 
                    alt={inputField.imageAlt} />

                <input className="input-box" 
                    required
                    id={inputField.label}
                    minLength={inputField.minLength}
                    maxLength={inputField.maxLength}
                    placeholder={inputField.placeholder}
                    type={inputField.inputType} />

            </div>
        </div>
    )

}

InputField.propTypes = {
    inputField: PropTypes.object
}

InputField.defaultProps = {
    inputField: PET_BUY_COUNTRY_REGION_INPUT_FIELD
}








const PetBuy = ({ selectedPet }) => {

    return(

        <section className="items-center flex flex-col contain-margin">

            <div className="flex flex-col gap-2">

                <PetSaleItemCard isSale={false} {...selectedPet} />

                <form className="box-shadow rounded-lg flex flex-col gap-1 p-1.5 pt-3 pb-5">

                    <InputField inputField={PET_BUY_COUNTRY_REGION_INPUT_FIELD} />

                    <InputField inputField={PET_BUY_FULL_NAME_INPUT_FIELD} />

                    <InputField inputField={PET_BUY_PHONE_NUMBER_INPUT_FIELD} />

                    <InputField inputField={PET_BUY_EMAIL_INPUT_FIELD} />

                    <InputField inputField={PET_BUY_ADDRESS_INPUT_FIELD} />

                    <InputField inputField={PET_BUY_CITY_INPUT_FIELD} />

                    <InputField inputField={PET_BUY_STATE_INPUT_FIELD} />

                    <InputField inputField={PET_BUY_ZIP_CODE_INPUT_FIELD} />

                    <Link className="rounded-full-w-button place-self-center text-center mt-1"
                        to={"/pet/bought"}
                        type="button">
                        {PET_BUY_BUTTON_TEXT}
                    </Link>

                </form>

            </div>

        </section>
    )
}

PetBuy.propTypes = {
    selectedPet: PropTypes.object
}

PetBuy.defaultProps = {
    selectedPet: KANGAL[5]
}






const PetBuyPage = () => {

    const { petId } = useParams()

    const EMPTY_PET = {id: "unknown"}

    let selectedPet = EMPTY_PET

    const pets = [
        CAUCASIAN_SHEPHERD,
        KANGAL,
        GERMAN_SHEPHERD,
        ABYSSINIAN,
        AMERICAN_SHORT_HAIR,
        CHARTREUX,
        GUPPIES,
        MICKEY_MOUSE_PLATY,
        ZEBRA_FISH
    ]

    for (let pet of pets) {

        for (let breed of pet) {

            if (breed.id === petId) {
                
                selectedPet = breed
                break
            }
        }

        if (selectedPet.id === petId) {

            break
        }
    }

    if (selectedPet === EMPTY_PET) {

        return(<ErrorPage />)
    } else {
        
        return(<PetBuy selectedPet={selectedPet} />)
    }

}

export default PetBuyPage
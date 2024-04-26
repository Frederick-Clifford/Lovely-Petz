import { PET_BOUGHT_BUTTON_TEXT, PET_BOUGHT_SUBJECT_TEXT, PET_BOUGHT_TITLE_TEXT } from "../utils/data"

import celebrationIcon from "../../assets/svg_icons/ic_person_celebration.svg"

const PetBoughtPage = () => {

    return(
        
        <section className="px-3 xs:px-5 ss:px-8 sm:px-12 md:px-16 lg:px-20 flex flex-col contain-margin">

            <div className="bg-purple-100 border-opacity-0 hover:border-opacity-100 border-[1px] border-primary-color rounded-xl px-3 py-5 xs:py-8 ss:py-12 flex flex-col items-center gap-2">

                <img className="medium-image" 
                    src={celebrationIcon} 
                    alt="celebration" />

                <h1 className="title-text">
                    {PET_BOUGHT_TITLE_TEXT}
                </h1>

                <p className="subject-text text-center">
                    {PET_BOUGHT_SUBJECT_TEXT}
                </p>

                <button className="rounded-full-w-button text-center mt-3">
                    {PET_BOUGHT_BUTTON_TEXT}
                </button>
            </div>

        </section>
    )

}

export default PetBoughtPage
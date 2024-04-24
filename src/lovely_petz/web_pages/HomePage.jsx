import caucasianShepherdImage from "../../assets/dogs/caucasian_shepherd/caucasian_shepherd.png"
import germanShepherdImage from "../../assets/dogs/german_shepherd/german_shepherd.png"
import kangalImage from "../../assets/dogs/kangal/kangal.png"

import abyssinianImage from "../../assets/cats/abyssinian/abyssinian.png"
import americanShorthairImage from "../../assets/cats/american_shorthair/american_shorthair.png"
import chartreuxImage from "../../assets/cats/chartreux/chartreux.png"

import guppiesImage from "../../assets/fishes/guppies/guppies.png"
import mickeyMousePlatyImage from "../../assets/fishes/mickey_mouse_platy/mickey_mouse_platy.png"
import zebrafishImage from "../../assets/fishes/zebrafish/zebrafish.png"

import { HOME_PAGE_BUTTON_TEXT, HOME_PAGE_SUBJECT_TEXT, HOME_PAGE_TITLE_TEXT_PART_ONE, HOME_PAGE_TITLE_TEXT_PART_TWO } from "../utils/data"

import { Link } from "react-router-dom"

const HomePage = () => (
    
    <section className="flex flex-col xs:justify-start xs:items-start sm:flex-row gap-10 sm:gap-1 contain-margin">

        <div className="mx-2 sm:mx-0 flex-1 flex flex-col justify-center gap-1">

            <div className="flex justify-center items-center gap-6">

                <img className="small-image"
                    src={zebrafishImage} 
                    alt= "zebra fish" />

                <img className="small-image object-right"
                    src={germanShepherdImage} 
                    alt="german shepherd" />

                <img className="small-image object-left"
                src={americanShorthairImage} 
                alt="american short hair" />

            </div>

            <div className="flex justify-center items-center gap-1">

                <img className="small-image"
                    src={mickeyMousePlatyImage} 
                    alt= "mickey mouse platy" />

                <img className="large-image"
                    src={caucasianShepherdImage} 
                    alt="cuccassian shepherd" />

                <img className="small-image"
                src={chartreuxImage} 
                alt="chartreux" />

            </div>

            <div className="flex justify-center items-center gap-6">

                <img className="small-image"
                    src={guppiesImage} 
                    alt= "guppies" />

                <img className="small-image object-left"
                    src={kangalImage} 
                    alt="kangal" />

                <img className="small-image"
                src={abyssinianImage} 
                alt="abyssinian" />

            </div>

        </div>

        <div className="flex-1 sm:m-auto">

            <div className="flex flex-col justify-center items-center xs:justify-start xs:items-start gap-1">

                <h1 className="title-text text-center">

                    <span>
                        {HOME_PAGE_TITLE_TEXT_PART_ONE}
                    </span>

                    <br className="block xs:hidden" />

                    <span>
                        {HOME_PAGE_TITLE_TEXT_PART_TWO}
                    </span>
                </h1>

                <p className="subject-text">
                    {HOME_PAGE_SUBJECT_TEXT}
                </p>

                <Link className="my-3 mx-2 rounded-button" 
                    to={"/pets"}>
                    {HOME_PAGE_BUTTON_TEXT}
                </Link>

            </div>

        </div>

    </section>
)

export default HomePage
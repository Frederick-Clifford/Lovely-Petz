import { NAV_BAR_TITLE_TEXT } from "../utils/data"

import petsHouseIcon from "../../assets/svg_icons/ic_pets_house.svg"

const NavBar = () => (
    
    <nav className="cursor-text z-50 h-[50px] flex justify-start bg-primary-color fixed items-center gap-2 md:gap-3 p-2 inset-x-0 top-0 nav-bar rounded-tr-full rounded-br-full">

        <img className="w-[28px] h-[28px] object-contain"
            src={petsHouseIcon}
            alt="lovely petz" />

        <h1 className="nav-bar-text">
            {NAV_BAR_TITLE_TEXT}
        </h1>

    </nav>
)

export default NavBar
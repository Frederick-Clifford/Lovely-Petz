import PetItemCard from "./PetItemCard"

import PropTypes from "prop-types"

const PetSections = ({title, items}) => {

    return(

        <div className="flex flex-col gap-3 px-2 xs:px-5 ss:px-1">

            <h1 className="title-text">
                {title}
            </h1>

            <div className="flex flex-col gap-1 pb-2">

                {items.map((item) =>
                
                    <PetItemCard key={item.id} isHoverable={true} {...item} />
                )}

            </div>

        </div>
    )

}

PetItemCard.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
}

PetItemCard.defaultProps = {
    title: "Unknown",
    items: []
}

export default PetSections
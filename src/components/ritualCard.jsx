import { getIcon } from "../utils/dictionaries";


const RitualCard = ({ icon }) => {
    const iconSrc = getIcon(icon);
    return (
        <div className="
                bg-[#E8E4DE] 
                rounded-full
                overflow-hidden
                h-fit
                w-fit
                p-5
            "
            id="card"
        >
            <div className="
                    flex
                    justify-center
                    "
                id="cardContentContainer"
            >
                {iconSrc && <img src={iconSrc} alt={icon}
                    className="
                    w-28
                    h-28
                    2xl:w-32 
                    2xl:h-32
                    "
                />}
            </div>
        </div>
    );
};

export default RitualCard;
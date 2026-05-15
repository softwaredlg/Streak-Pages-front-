
import { Link } from "react-router-dom";
import { getIcon } from "../utils/dictionaries";

const Button = ({ text, route, bgColor, textColor, icon }) => {
    const iconSrc = getIcon(icon);
    return (
        <Link
            to={route}
            style={{
                backgroundColor: bgColor,
                color: textColor
            }}
            className="
                min-w-45
                min-h-10
                md:text-xl
                2xl:min-h-12
                2xl:min-w-50
                inline-flex
                flex-row
                items-center
                justify-center
                gap-2
                font-medium 
                py-2 
                px-6 
                rounded-full 
                transition
            "
        >
            {iconSrc && <img src={iconSrc} alt={icon} className="w-7 h-7" />}
            <span className="translate-y-px">{text}</span>
        </Link>
    );
};

export default Button;
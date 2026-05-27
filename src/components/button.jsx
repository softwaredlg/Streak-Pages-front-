import { Link } from "react-router-dom";
import { getIcon } from "../utils/dictionaries";

const Button = ({
    text,
    route,
    onClick,
    bgColor,
    textColor,
    icon
}) => {

    const iconSrc = getIcon(icon);

    const commonClasses = `
        h-12
        w-45
        sm:h-10
        sm:w-44
        md:text-xl
        lg:min-h-12
        lg:min-w-50
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
        cursor-pointer
        hover:scale-105
        duration-200
    `;

    const content = (
        <>
            {iconSrc && (
                <img
                    src={iconSrc}
                    alt={icon}
                    className="
                        w-5
                        h-5
                        lg:w-6
                        lg:h-6
                    "
                />
            )}

            <span
                className="
                    translate-y-px
                    text-sm
                    lg:text-base
                "
            >
                {text}
            </span>
        </>
    );

    if (route) {
        return (
            <Link
                to={route}
                style={{
                    backgroundColor: bgColor,
                    color: textColor
                }}
                className={commonClasses}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: bgColor,
                color: textColor
            }}
            className={commonClasses}
        >
            {content}
        </button>
    );
};

export default Button;
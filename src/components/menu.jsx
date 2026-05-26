import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ icon }) => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handlerNavigation = () => {
        navigate("/savecontent");
    }

    return (
        <div className="relative bg-white p-2.5 rounded-2xl">

            {/* Botón menu */}
            <button
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
            >
                <img
                    src={icon}
                    alt="menu"
                    className="
                        w-7 
                        h-7
                        md:w-8 
                        md:h-8
                    "
                />
            </button>

            {/* Dropdown */}
            {
                open && (
                    <div
                        className="
                            absolute
                            right-0
                            mt-3
                            w-64
                            bg-[#F5F5F5]
                            rounded-3xl
                            shadow-lg
                            p-4
                            z-50
                        "
                    >

                        <button
                            className="
                                flex
                                items-center
                                gap-3
                                w-full
                                text-[#3D556B]
                                text-lg
                                cursor-pointer
                            "
                            onClick={handlerNavigation}
                        >
                            ✨

                            <span>
                                Ver mis frases y tips
                            </span>

                        </button>

                    </div>
                )
            }

        </div>
    );
};

export default Menu;
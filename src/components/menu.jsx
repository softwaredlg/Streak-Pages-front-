import { useState } from "react";

const Menu = ({ icon }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="relative">

            {/* Botón menu */}
            <button
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
            >
                <img
                    src={icon}
                    alt="menu"
                    className="w-8 h-8"
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
                            "
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
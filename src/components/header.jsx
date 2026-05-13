

const Header = () => {
    return (
        <div
            className="w-full overflow-hidden"
            id="headerContainer"
        >
            <header
                className="relative w-full"
                id="header"
            >
                <img
                    src="src/assets/FondoDia.jpeg"
                    alt="Header"
                    className="
                        w-full
                        h-[70vh]
                        md:h-[85vh]
                        lg:h-screen
                        object-cover
                    "
                    id="imgHeader"
                />

                <div
                    className="
                        absolute
                        inset-0
                        flex
                        items-center
                    "
                    id="headerTextContainer"
                >
                    <div
                        className="
                            px-6
                            md:px-12
                            lg:px-20
                            max-w-5xl
                        "
                    >
                        <p
                            className="
                                font-serif
                                text-[#5C4A32]
                                text-3xl
                                sm:text-4xl
                                md:text-6xl
                                lg:text-8xl
                                leading-tight
                                pb-4
                                md:pb-6
                            "
                        >
                            Tu bienestar, <br />
                            nuestra obsesión.
                        </p>

                        <p
                            className="
                                text-[#6B6058]
                                text-base
                                sm:text-lg
                                md:text-2xl
                                lg:text-4xl
                                leading-relaxed
                                pt-2
                                md:pt-4
                            "
                        >
                            Cada detalle está pensado para transformar <br className="hidden md:block" />
                            tu descanso en una experiencia premium.
                        </p>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;



const Header = () => {
    return (
        <div className="w-full overflow-hidden"
            id="headerContainer"
        >
            <header className="relative w-full"
                id="header"
            >
                <img src="src\assets\FondoDia.jpeg"
                    alt="Header"
                    className="
                            w-full
                            h-fit
                            md:h-fit
                            lg:h-fit
                            object-cover
                            "
                    id="imgHeader"
                />
                <div className="
                            absolute 
                            inset-0 
                            flex 
                            items-center
                            "
                    id="hedaerContentContainer">
                    <div className="
                            pt-1.5
                            pl-2
                            md:pt-5
                            md:pl-4
                            lg:pl-7
                            xl:pl-8
                            2xl:pl-9
                            "
                        id="headerTextContainer"
                    >
                        <p className="
                            font-serif 
                            text-[#5C4A32]
                            text-lg
                            md:text-5xl
                            lg:text-6xl
                            xl:text-7xl 
                            2xl:text-8xl 
                            leading-tight 
                            pb-1.5
                            ">
                            Tu bienestar, <br />
                            nuestra obsesión.
                        </p>
                        <p className="
                            text-[#6B6058] 
                            text-[0.6rem]
                            md:text-xl
                            lg:text-2xl
                            xl:text-3xl
                            2xl:text-4xl
                            "
                        >
                            Cada detalle está pensado para transformar<br />
                            tu descanso en una experiencia premium.
                        </p>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Header;

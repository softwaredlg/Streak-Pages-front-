

const Header = ({ theme }) => {
    const a = {

    }
    return (
        <div className="w-full overflow-hidden"
            id="headerContainer"
        >
            <header className="relative w-full"
                id="header"
            >
                <img src={theme.bgImg}
                    alt="Header"
                    className="
                            w-full
                            h-fit
                            md:h-fit
                            lg:h-fit
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
                        <p className={`
                                font-serif
                                ${theme.headerFontColorTitle}
                                text-lg
                                sm:text-2xl
                                md:text-5xl
                                lg:text-6xl
                                xl:text-7xl
                                2xl:text-8xl
                                leading-tight
                                pb-1.5
                            `}>
                            Tu bienestar, <br />
                            nuestra obsesión.
                        </p>
                        <p className={`
                            ${theme.headerFontSubTitle}
                            text-[0.6rem]
                            sm:text-base
                            md:text-xl
                            lg:text-2xl
                            xl:text-3xl
                            2xl:text-4xl
                        `}
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

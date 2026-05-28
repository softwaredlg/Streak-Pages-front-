import { getIcon } from "../utils/dictionaries";

const Header = ({ theme }) => {
    const currentHour = new Date().getHours();
    return (
        <div className="
                w-full 
                overflow-hidden
                "
            id="headerContainer"
        >
            <header className="
                        relative 
                        w-full"
                id="header"
            >
                {/* Mobile */}
                <img
                    src={theme.bgImgMobile}
                    alt="Header Mobile"
                    className="
                        block
                        md:hidden
                        w-full
                        h-auto
                    "
                />
                {/* Desktop */}
                <img
                    src={theme.bgImg}
                    alt="Header Desktop"
                    className="
                        hidden
                        md:block
                        w-full
                        h-auto
                    "
                />
                <div className="
                            absolute 
                            inset-0 
                            flex 
                            flex-col
                            justify-start
                            sm:justify-center
                        "
                    id="hedaerContentContainer">
                    <div className="
                            pl-4
                            pt-4
                            md:mt-2.5
                            md:pl-4
                            lg:pl-7
                            xl:pl-8
                            2xl:pl-9
                        "
                        id="headerTextContainer"
                    >
                        <div className="
                                flex 
                                flex-row 
                                items-center
                                gap-1 
                                sm:gap-2 
                                w-fit
                            "
                        >
                            <img
                                src={theme.iconEvening}
                                alt="sun"
                                className="
                                    w-5
                                    h-5
                                    sm:w-10 
                                    sm:h-10
                                "
                            />
                            <p className={`
                                ${theme.headerFontSubTitle}
                                text-xs
                                sm:text-lg
                                md:text-xl
                                lg:text-2xl
                                xl:text-3xl
                                `}
                            >
                                {
                                    currentHour >= 18 || currentHour < 6
                                        ? "Good night"
                                        : "Good morning"
                                }
                            </p>
                        </div>
                        <p className={`
                                font-serif
                                ${theme.headerFontColorTitle}
                                text-2xl
                                sm:text-2xl
                                md:text-5xl
                                lg:text-6xl
                                xl:text-7xl
                                2xl:text-8xl
                                leading-tight
                                pb-1.5
                            `}>
                            Your well-being, <br />
                            our obsession.
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
                            Every detail is designed to turn your <br /> stay
                            into a premium experience.
                        </p>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Header;

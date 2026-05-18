import Button from "../components/button";
import Layout from "../components/layout"
import RitualCard from "../components/ritualCard";

const HomePage = ({theme}) => {
    const responsive = `bg-red-500 sm:bg-blue-300 md:bg-blue-500 lg:bg-green-500 xl:bg-green-300 2xl:bg-green-100`
    return (
        <Layout theme={theme}>
            <div className="
                    p-2
                    md:items-center
                    md:max-w-full
                    md:flex
                    md:flex-col
                    md:justify-center
                    md:p-5
                    md:h-134
                    lg:p-6
                    xl:p-8
                    2xl:p-10
                    "
                id="contentContainer"
            >
                <div className="
                        flex
                        flex-col
                        items-center
                        "
                    id="titlesContainer"
                >
                    <h1 className="
                            text-[#2C4A5E]
                            text-2xl
                            sm:text-3xl
                            md:text-5xl
                            lg:text-6xl
                            xl:text-6xl
                            2xl:text-7xl
                            "
                    >Descubre tu ritual matutino</h1>
                    <h2 className="
                            text-[#6B6058]
                            mt-2
                            text-base
                            sm:text-xl
                            md:text-2xl
                            lg:text-3xl
                            xl:text-3xl
                            2xl:text-4xl
                            "
                    >Elige comó quieres comenzar tu día</h2>
                </div>
                <div className="
                        gap-2
                        mb-2
                        mt-5
                        md:mt-10
                        md:flex 
                        md:gap-20
                        lg:gap-40
                        xl:gap-48
                        2xl:gap-80
                        "
                    id="ritualsContainer">
                    <div className="" id="phraseContainer">
                        <div className="flex justify-center mb-4" id="phraseCardContainer">
                            <RitualCard icon={"estrella"} />
                        </div>
                        <div className="flex justify-center" id="phraseButtonContainer">
                            <Button
                                text={"Descubrir mi frase"}
                                route={"/test"}//cambiar por onClick
                                bgColor={"#8890B5"}
                                textColor={"#ffffff"}
                            />
                        </div>
                        <div className="flex justify-center">
                            <p className="
                                text-[#6B6058] 
                                text-2xl
                                my-4
                                sm:my-2.5
                                "
                            >Energía y activación</p>
                        </div>
                    </div>
                    <div className="" id="tipContainer">
                        <div className="flex justify-center mb-4" id="tipCardContainer">
                            <RitualCard icon={"foco"} />
                        </div>
                        <div className="flex justify-center" id="tipButtonContainer">
                            <Button
                                text={"Descubrir mi tip"}
                                route={"/test2"}//cambiar por onClick
                                bgColor={"#8890B5"}
                                textColor={"#ffffff"}
                            />
                        </div>
                        <div className="flex justify-center">
                            <p className="
                                text-[#6B6058] 
                                text-2xl
                                my-4
                                sm:my-2.5 
                                "
                            >Potencia tu mañana</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
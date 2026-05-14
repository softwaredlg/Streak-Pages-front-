import Button from "../components/button";
import Layout from "../components/layout"

const HomePage = () => {
    const responsive = `bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-green-300 2xl:bg-green-100`
    return (
        <Layout>
            <div className={responsive}><p>a</p></div>
            <div className="
                    flex
                    flex-col
                    items-center
                    max-w-full
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
                            md:text-5xl
                            lg:text-6xl
                            xl:text-6xl
                            2xl:text-7xl
                            "
                    >Descubre tu ritual matutino</h1>
                    <h2 className="
                            text-[#6B6058]
                            text-base
                            md:text-2xl
                            lg:text-3xl
                            xl:text-3xl
                            2xl:text-4xl
                            "
                    >Elige comó quieres comenzar tu día</h2>
                </div>
                <div className="
                        mt-10
                        flex 
                        gap-2
                        2xl:gap-96
                        "
                    id="ritualsContainer">
                    <div className="" id="phraseContainer">
                        <div className="">
                            <p>card con icon</p>
                        </div>
                        <Button
                            text={"Descubrir mi frase"}
                            route={"/test"}//cambiar por onClick
                            bgColor={"#8890B5"}
                            textColor={"#ffffff"}
                        />
                        <p>soy frase xd</p>
                    </div>
                    <div className="" id="ritualContainer">
                        <p>card con icon</p>
                        <Button
                            text={"Descubrir mi tip"}
                            route={"/test2"}//cambiar por onClick
                            bgColor={"#8890B5"}
                            textColor={"#ffffff"}
                        />
                        <p>soy ritual xd</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
import Button from "../components/button";
import Layout from "../components/layout"
import RitualCard from "../components/ritualCard";


const WelcomePage = () => {
    const responsive = `bg-red-500 sm:bg-blue-300 md:bg-blue-500 lg:bg-green-500 xl:bg-green-300 2xl:bg-green-100`
    return (
        <Layout>

            <div className="
                    p-2
                    md:items-center
                    md:max-w-full
                    md:flex
                    md:flex-col
                    md:p-5
                    lg:p-6
                    xl:p-8
                    2xl:p-10
                    h-134
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
                    >Ready to start?</h1>
                    <h2 className="
                            text-[#6B6058]
                            mt-5
                            mb-5
                            text-base
                            sm:text-xl
                            md:text-2xl
                            lg:text-3xl
                            xl:text-3xl
                            2xl:text-4xl
                            "
                    >Your daily experience awaits.</h2>
                </div>
                <div className="mt">
                    <Button
                        text={"Descubrir mi tip"}
                        route={"/test2"}//cambiar por onClick
                        bgColor={"#8890B5"}
                        textColor={"#ffffff"}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default WelcomePage;
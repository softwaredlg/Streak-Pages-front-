import Button from "../components/button";
import Layout from "../components/layout"
import RitualCard from "../components/ritualCard";


const WelcomePage = ({theme}) => {
    return (
        <Layout theme={theme}>
            <div className={`
                              
                    p-2
                    items-center
                    flex
                    flex-col
                    justify-center
                    h-134
                    md:p-5
                    md:h-134
                    lg:p-6
                    xl:p-8
                    2xl:p-10
                `}
                id="contentContainer"
            >
                <div className="
                        flex
                        flex-col
                        items-center
                        "
                    id="titlesContainer"
                >
                    <h1 className={`
                        ${theme.contentFontColorTitle}
                        font-serif
                        text-4xl
                        sm:text-5xl
                        lg:text-6xl
                        2xl:text-7xl
                        `}
                    >Ready to start?</h1>
                    <h2 className={`
                            ${theme.contentFontColorSubTitle}
                            mt-8
                            mb-8
                            text-2xl
                            md:mt-10
                            md:mb-10
                            md:text-2xl
                            lg:text-3xl
                            xl:text-3xl
                            2xl:text-4xl
                        `}
                    >Your daily experience awaits.</h2>
                </div>
                <div className="mt">
                    <Button
                        text={"Click to get started!"}
                        route={"/home"}//cambiar por onClick
                        bgColor={"#8890B5"}
                        textColor={"#ffffff"}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default WelcomePage;
import Button from "../components/button";
import Layout from "../components/layout"
import RitualCard from "../components/ritualCard";
import Menu from "../components/menu";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { dayliClaim } from "../services/claim.service";
import { useNavigate } from "react-router-dom";
import { getUserData, setContentView } from "../helpers/storage.service";
import { hasClaimeToday } from "../utils/claim";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const HomePage = ({ theme }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const userData = getUserData();

    const currentHour = new Date().getHours();
    const { themeMode } = useContext(ThemeContext);


    const handlerClaimContent = async (type) => {
        if (loading) return;

        try {
            setLoading(true);
            const userId = userData?.id;

            if (!userId) {
                return
            }

            if (userId) {
                
                const claim = await dayliClaim(userId);
                console.log("Reclamo hecho con exito");

                setContentView(type);
                navigate("/streak");

                if (claim.message === "Actualizando racha" ||
                    claim.message === "Racha iniciada") {
                    toast.success(
                        "Streak update"
                    );
                }
            }
        } catch (error) {
            console.error(error)
            toast.error(
                "Internal server error"
            );
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!userData) {
            navigate("/")
        }
    }, [])

    return (
        <Layout theme={theme}>
            <div className="
                    flex
                    justify-end
                    pt-5
                    pr-5
                ">
                <Menu icon={theme.menuTheme} />
            </div>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

                exit={{
                    opacity: 0,
                    y: -20
                }}

                transition={{
                    duration: 0.4
                }}

                className={`
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
                    text-2xl
                    sm:text-3xl
                    md:text-5xl
                    lg:text-6xl
                    xl:text-6xl
                    2xl:text-7xl
                    `}
                    >Discover your morning routine</h1>
                    <h2 className={`
                    ${theme.contentFontColorSubTitle}
                    mt-2
                    text-base
                    sm:text-xl
                    md:text-2xl
                    lg:text-3xl
                    xl:text-3xl
                    2xl:text-4xl
                    
                    `}
                    >Choose how you want to start your day</h2>
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
                                text={"Discover my quote"}
                                onClick={() => handlerClaimContent("phrase")}//cambiar por onClick
                                bgColor={"#8890B5"}
                                textColor={"#ffffff"}
                            />
                        </div>
                        <div className="flex justify-center">
                            <p className={`                           
                                ${theme.ritualCardFontColorText}
                                text-2xl
                                my-4
                                sm:my-2.5
                            `}
                            >Energy and Activation</p>
                        </div>
                    </div>
                    <div className="" id="tipContainer">
                        <div className="flex justify-center mb-4" id="tipCardContainer">
                            <RitualCard icon={"foco"} />
                        </div>
                        <div className="flex justify-center" id="tipButtonContainer">
                            <Button
                                text={"Discover my tip"}
                                onClick={() => handlerClaimContent("tip")}//cambiar por onClick
                                bgColor={"#8890B5"}
                                textColor={"#ffffff"}
                            />
                        </div>
                        <div className="flex justify-center">
                            <p className={`                           
                                ${theme.ritualCardFontColorText}
                                text-2xl
                                my-4
                                sm:my-2.5
                            `}
                            >Boost Your Morning</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Layout>
    );
};

export default HomePage;
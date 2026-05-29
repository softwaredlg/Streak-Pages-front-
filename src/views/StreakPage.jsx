import Button from "../components/button";
import Layout from "../components/layout"
import Modal from "../components/modal";
import Menu from "../components/menu";
import toast from "react-hot-toast";
import { getIcon } from "../utils/dictionaries";
import { useEffect, useState } from "react";
import { getClaimData } from "../helpers/storage.service";
import { saveContent } from "../services/content.service";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getTodayDate } from "../helpers/date.service";

const StreakPage = ({ theme }) => {
    const [saved, setSaved] = useState(false);
    const content = getClaimData();
    const navigate = useNavigate();

    if (!content) {
        return (
            <Navigate
                to={"/home"}
                replace
            />
        );
    }

    const today = getTodayDate();

    if(today != content.lastClaim){
        return (
            <Navigate
                to={"/home"}
                replace
            />
        );
    }

    const handleShare = async () => {
        const text = `${content.content.text}\n\n Discover your own quote or tip!\n https://experience.drjoohn.com/`

        if (navigator.share) {
            try {
                await navigator.share({
                    title: "DRJOOHN",
                    text
                })
                return
            } catch (error) {
                console.log(error)
            }
        }
    };

    const handlerSaveContent = async () => {
        try {
            const savecontent = await saveContent();
            if (savecontent) {
                console.log("Contenido guardado correctamente")
                toast.success(
                    "Content saved successfully"
                );

                setSaved(true);
                localStorage.setItem(
                    `saved_content`,
                    content.content.id
                );
            } else {
                toast.error(
                    "An error occurred while trying to save the content"
                );
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const contentSaved = localStorage.getItem("saved_content");

        if (contentSaved !=
            String(content.content.id)) {
            setSaved(false);
        } else {
            setSaved(true);
        }
    }, [])

    return (
        <Layout theme={theme}>
            <div className="
                    flex
                    justify-end
                    p-2.5
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
                    p-5
                    h-134
                    flex
                    flex-col
                    justify-center
                    lg:flex
                    lg:flex-row
                    lg:items-center
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
                        lg:w-screen
                        "
                    id="streakContentContainer"
                >
                    <p className="
                            text-xl
                            "
                    >
                    </p>

                    <div className="
                            text-center 
                            lg:text-left
                            lg:pl-4 
                            xl:pl-12
                            2xl:pl-24
                            "
                        id="streakContent"
                    >
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.9
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1
                            }}

                            transition={{
                                duration: 0.6,
                                ease: "easeOut"
                            }}

                            className={`
                                ${theme.contentFontColor}
                                font-serif
                                text-xl
                                sm:text-2xl
                                lg:text-5xl
                                xl:text-5xl
                            ` }
                            id="content"
                        >{`"${content.content.text}"`}</motion.p>
                        <p className={`
                                ${theme.contentFontColorSubText}
                                mt-8
                                text-sm
                                lg:mt-4
                                xl:mt-5
                                md:text-xl
                            `}
                        >Your rest last night has prepared you for today.<br />
                            Make it extraordinary.</p>
                    </div>
                    <div className="
                            flex 
                            gap-x-3 
                            w-full 
                            mt-8
                            justify-center
                            lg:justify-start
                            lg:pl-4
                            lg:mt-4
                            xl:mt-5
                            xl:pl-12
                            2xl:pl-24
                            "
                        id="actionButtonsContainer"
                    > {/*Ver si esto jala!*/}
                        <div className="">
                            <Button
                                onClick={handlerSaveContent}
                                icon={saved ? "guardado" : "guardar"}
                                text={saved ? "Saved" : "Save"}
                                bgColor={"#EEEBE4"}
                            />
                        </div>
                        <div className="">
                            <Button
                                onClick={handleShare}
                                icon={"compartir"}
                                text={"Share"}
                                bgColor={"#EEEBE4"}
                            />
                        </div>
                    </div>
                </div>
                <div className=" 
                        lg:w-screen
                        flex 
                        flex-col 
                        items-center
                        "
                    id="streakCountContainer"
                >
                    <div className="">
                        <p></p>
                    </div>
                    <div className="my-8 flex flex-col items-center">
                        <img src={getIcon("calendario")} alt="calendar"
                            className="
                            w-12
                            h-12
                            mb-2.5
                            md:w-14
                            md:h-14
                            lg:w-16 
                            lg:h-16
                            "
                        />
                        <p className={`
                            ${theme.contetCalendarText}
                            text-sm
                            md:text-sm
                            lg:text-base
                            `}
                        >DAYS OF RELAXATION
                        </p>
                    </div>
                    <p className={`${theme.contetNumberText} text-5xl`}>{content.streak}</p>
                    <p className={`
                            ${theme.contetCountText}
                            text-center 
                            text-base
                            md:text-lg
                            lg:text-xl
                        `}
                    >Every night counts. Keep creating nights of <br />
                        comfort and mornings full of energy.</p>
                </div>
            </motion.div>
        </Layout >
    );
};
export default StreakPage;
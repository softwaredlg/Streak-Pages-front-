import Button from "../components/button";
import Layout from "../components/layout"
import Modal from "../components/modal";
import { getIcon } from "../utils/dictionaries";
import { useState } from "react";

const StreakPage = ({ theme }) => {
    const [ModalOpen, setModalOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const phrase = "HOY ES UN BUEN DÍA PARA EMPEZAR SIN MIEDO."

    const handlerOpenModal = () => {
        setModalOpen(true);
    }

    const handleCopy = async () => {

        await navigator.clipboard.writeText(phrase);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <Layout theme={theme}>
            <div className={`
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
                        <p className={`
                                ${theme.contentFontColor}
                                text-xl
                                sm:text-2xl
                                lg:text-5xl
                                xl:text-5xl
                            ` }
                            id="content"
                        >{phrase}</p>
                        <p className={`
                                ${theme.contentFontColorSubText}
                                mt-8
                                lg:mt-4
                                xl:mt-5
                                md:text-xl
                            `}
                        >Tu descanso de anoche te preparo para hoy. <br />
                            Hazlo extraordinario.</p>
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
                                icon={"guardar"}
                                text={"Guardar"}
                                bgColor={"#EEEBE4"}
                            />
                        </div>
                        <div className="">
                            <Button
                                onClick={handlerOpenModal}
                                icon={"compartir"}
                                text={"Compartir"}
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
                        >DÍAS DISFRUTANDO TU DESCANSO
                        </p>
                    </div>
                    <p className={`${theme.contetNumberText} text-5xl`}>0</p>
                    <p className={`
                            ${theme.contetCountText}
                            text-center 
                            text-base
                            md:text-lg
                            lg:text-xl
                        `}
                    >Cada noche cuenta. Sigue construyendo noches de <br />
                        confort y mañanas llenas de energía.</p>
                </div>
            </div>

            {
                ModalOpen && (
                    <Modal text={"Compartir en..."} setModalOpen={setModalOpen} >
                        <div className="flex flex-row gap-x-16 mt-3">
                            <div className="
                                    cursor-pointer
                                    hover:scale-105
                                    transition
                                    duration-200
                            "
                                id="img1"
                            >
                                <img src={getIcon("facebook")} alt="facebook" className=" w-16 h-16" />
                            </div>
                            <div className="
                                    cursor-pointer
                                    hover:scale-105
                                    transition
                                    duration-200
                            "
                                id="img2"
                            >
                                <img src={getIcon("whatsapp")} alt="whatsapp" className=" w-16 h-16" />
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center " id="copyContainer">
                            <button className="flex flex-row gap-2.5 cursor-pointer" onClick={handleCopy}>
                                <img src={getIcon("copiar")} alt="copia" className=" w-5 h-5" />
                                <p>
                                    {copied ? "¡Copiado!" : "Copiar texto"}
                                </p>
                            </button>
                        </div>
                    </Modal>
                )
            }

        </Layout >
    );
};
export default StreakPage;
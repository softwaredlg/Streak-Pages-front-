import Button from "../components/button";
import Layout from "../components/layout"


const SaveContent = () => {
    const responsive = `bg-red-500 sm:bg-blue-300 md:bg-blue-500 lg:bg-green-500 xl:bg-green-300 2xl:bg-green-100`

    return (

        <Layout>
            <div className={responsive}><p>d</p></div>
            <div className="my-3">
                <Button
                    icon={"regresar"}
                    text={"Regresar"}
                    bgColor={"#EEEBE4"}
                />
            </div>
            <div className="
                    p-5
                    h-134
                    flex
                    flex-col
                    
                    lg:flex
                    lg:flex-row
                    lg:p-6
                    xl:p-8
                    2xl:p-10
                    "
            >
                <div className="
                        flex
                        flex-col
                        lg:w-screen
                        border-4
                        "
                    id="savePhrasesContainer"
                >
                    <p className="
                                text-[#6B6058]
                                text-2xl
                                "
                    >Tus frases guardadas</p>
                    <div className="">
                        <p className="
                                text-base 
                                md:text-xl
                                py-5
                                "
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                    </div>
                </div>
                <div className="
                        flex
                        flex-col
                        lg:w-screen
                        border-4
                        "
                    id="saveTipsContainer"
                >
                    <p className="
                        text-[#6B6058] 
                        text-2xl 
                        "
                    >Tus tips guardados</p>
                    <div className="">
                        <p className="
                            text-base
                            py-5
                            md:text-xl
                            "
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer paso en los primeros 5 minutos.”</p>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default SaveContent;
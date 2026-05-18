import Button from "../components/button";
import Layout from "../components/layout"
import { getIcon } from "../utils/dictionaries";

const StreakPage = () => {
    return (
        <Layout>
            <div className="
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
                "
                id="contenContainer"
            >
                <div className="
                        flex
                        flex-col 
                        items-center
                        lg:w-screen
                        "
                    id="streakPhraseContainer"
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
                        id="phraseContainer"
                    >
                        <p className="
                                text-xl
                                sm:text-2xl
                                lg:text-5xl
                                xl:text-5xl
                                "
                        >“RESPIRA PROFUNDO, HOY TODO FLUYE A TU FAVOR.”</p>
                        <p className="
                                text-[#6B6058]
                                mt-8
                                lg:mt-4
                                xl:mt-5
                                md:text-xl
                                "
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
                        <p className="
                            text-[#6B6058]
                            text-sm
                            md:text-sm
                            lg:text-base
                            "
                        >DÍAS DISFRUTANDO TU DESCANSO
                        </p>
                    </div>
                    <p className="text-5xl">0</p>
                    <p className="
                            text-[#6B6058]
                            text-center 
                            text-base
                            md:text-lg
                            lg:text-xl
                            "
                    >Cada noche cuenta. Sigue construyendo noches de <br />
                        confort y mañanas llenas de energía.</p>
                </div>
            </div>
        </Layout >
    );
};
export default StreakPage;
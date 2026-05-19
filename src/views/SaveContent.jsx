import Button from "../components/button";
import Layout from "../components/layout"


const SaveContent = ({ theme }) => {
    const responsive = `bg-red-500 sm:bg-blue-300 md:bg-blue-500 lg:bg-green-500 xl:bg-green-300 2xl:bg-green-100`

    return (

        <Layout theme={theme}>
            <div className={`
                    gap-x-5            
                    p-5
                    h-134
                    flex
                    flex-col
                    lg:flex
                    lg:flex-row
                    lg:p-6
                    xl:p-8
                    2xl:p-10
                `}
            >
                <div className="
                        flex
                        flex-col
                        overflow-y-auto
                        pr-2
                        max-h-64
                        md:max-h-64
                        lg:max-h-125
                        lg:w-screen
                        "
                    id="savePhrasesContainer"
                >
                    <p className={`
                        ${theme.contentFontColorTitle}
                        text-2xl
                    `}
                    >Tus frases guardadas</p>
                    <div className="">
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                        
                            `}
                        >“Respira profundo, hoy todo fluye a tu favor.”</p>
                    </div>
                </div>
                <div className="
                        flex
                        flex-col
                        overflow-y-auto
                        pr-2
                        max-h-64
                        md:max-h-64
                        lg:max-h-125
                        lg:w-screen
                        "
                    id="saveTipsContainer"
                >
                    <p className={`
                            ${theme.contentFontColorTitle}
                            text-2xl
                        `}
                    >Tus tips guardados</p>
                    <div className="">
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                        <p className={`
                                ${theme.contentFontColor}
                                text-base 
                                md:text-xl
                                py-5
                            `}
                        >“Antes de mirar el celular, decide qué quieres lograr hoy y da el primer
                            paso en los primeros 5 minutos.”</p>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default SaveContent;
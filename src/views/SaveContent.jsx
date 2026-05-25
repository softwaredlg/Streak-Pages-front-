import Button from "../components/button";
import Layout from "../components/layout"
import { useEffect } from "react";
import { viewSaveContent } from "../services/content.service";
import { useState } from "react";


const SaveContent = ({ theme }) => {
    const responsive = `bg-red-500 sm:bg-blue-300 md:bg-blue-500 lg:bg-green-500 xl:bg-green-300 2xl:bg-green-100`
    const [saveContent, setSaveContent] = useState([]);

    const handlerViewContent = async () => {
        try {
            const userContent = await viewSaveContent();
            setSaveContent(
                userContent.content
            );
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handlerViewContent();
    }, [])

    const savedPhrases =
        saveContent?.filter(
            item =>
                item.contents?.type ===
                "PHRASE"
        ) || [];


    const savedTips =
        saveContent?.filter(
            item =>
                item.contents?.type ===
                "TIP"
        ) || [];

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
                    >Your saved phrases</p>
                    {
                        savedPhrases.map(
                            ({ content_id, contents }) => (

                                <div key={content_id}>

                                    <p className={`
                                            ${theme.contentFontColor}
                                            text-base
                                            md:text-xl
                                            py-5
                                        `}>
                                        “{contents?.text}”
                                    </p>

                                </div>

                            ))
                    }
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
                    >Your saved tips</p>
                    {
                        savedTips.map(
                            ({ content_id, contents }) => (

                                <div key={content_id}>

                                    <p className={`
                                            ${theme.contentFontColor}
                                            text-base
                                            md:text-xl
                                            py-5
                                        `}>
                                        “{contents?.text}”
                                    </p>

                                </div>

                            ))
                    }
                </div>
            </div>

        </Layout>
    );
};

export default SaveContent;
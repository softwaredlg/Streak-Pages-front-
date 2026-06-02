import Button from "../components/button";
import Layout from "../components/layout"
import RitualCard from "../components/ritualCard";
import toast from "react-hot-toast";
import { registerUser } from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getUserData } from "../helpers/storage.service";

const WelcomePage = ({ theme }) => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const userData = getUserData();

    const handleRegister = async () => {

        if (loading) return;

        try {

            setLoading(true);
            const register = await registerUser();

            if (register) {
                console.log("Registro completado correctamente");
                navigate("/home", { replace: true });
            }
        } catch (error) {
            console.error(error);
            toast.error(
                "Internal Server error"
            )

            setLoading(false)
        } 
    }

    useEffect(() => {
        if (userData) {
            navigate("/home", { replace: true });
        }
    }, [])

    return (
        <Layout theme={theme}>
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
                        text={
                            loading
                                ? "Loading..."
                                : "Click to get started!"
                        }
                        onClick={handleRegister}
                        //route={"/home"}
                        bgColor={"#8890B5"}
                        textColor={"#ffffff"}
                        disabled={loading}
                    />
                </div>
            </motion.div>
        </Layout>
    );
};

export default WelcomePage;
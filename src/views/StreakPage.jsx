import Layout from "../components/layout"

const StreakPage = () => {
    const responsive = `bg-red-500 sm:bg-blue-300 md:bg-blue-500 lg:bg-green-500 xl:bg-green-300 2xl:bg-green-100`
    return (
        <Layout>
            <div className={responsive}><p>sdasdsadsa</p></div>
            <div className="
                    p-2
                    gap-x-44
                    md:max-w-full
                    md:flex
                    md:flex-row
                    md:p-5
                    md:h-134
                    lg:p-6
                    xl:p-8
                    2xl:p-10
                    border-2
                    border-amber-600
                "
                id="contenContainer"
            >
                <div className="border-2 border-amber-700 w-2xl flex justify-center" id="streakCountContainer">
                    <p>Estamos buscando la frase mas adecuada para ti...</p>
                </div>
                <div className="border-2 border-amber-700 w-2xl flex flex-col items-center" id="streakPhraseContainer">
                    <img src="" alt="calendar" />
                    <p>DÍAS DISFRUTANDO TU DESCANSO</p>
                    <p>0</p>
                    <p>Cada noche cuenta. Sigue construyendo noches de <br />
                    confort y mañanas llenas de energía.</p>
                </div>
            </div>
        </Layout>
    );
};
export default StreakPage;
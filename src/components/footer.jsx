

const Footer = ({theme}) => {
    return (
        <footer
            className="
                w-full
                bg-[#EEEBE4]
                h-32
                md:h-36
                lg:h-40
            "
            id="footer"
        >
            <div
                className="
                    w-full
                    h-full
                    flex
                    flex-col
                    items-center
                    justify-center
                    px-4
                    text-center
                "
                id="footerContentContainer"
            >
                <div
                    className="
                        text-base
                        md:text-xl
                        lg:text-2xl
                        text-[#3D3D4E]
                        font-serif
                        mb-1.5
                    "
                    id="footerText1"
                >
                    <p>
                        Descansa mejor. Vive mejor.
                    </p>
                </div>

                <div
                    className="
                        text-sm
                        md:text-base
                        lg:text-xl
                        text-[#A8A49E]
                    "
                    id="footerText2"
                >
                    <p>
                        © 2026 Diseñado para tu bienestar
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
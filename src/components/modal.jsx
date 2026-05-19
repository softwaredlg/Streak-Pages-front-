const Modal = ({ text, children, setModalOpen }) => {

    return (

        <div
            className="
                fixed
                inset-0
                bg-black/50
                flex
                items-center
                justify-center
                z-50
                px-4
            "
            id="modalOverlay"
        >

            <div
                className="
                    bg-white
                    max-w-md
                    w-full
                    rounded-3xl
                    shadow-2xl
                "
                id="modalCard"
            >
                <div className="
                        flex 
                        justify-end 
                        p-2.5
                    "
                >
                    <button className="cursor-pointer" onClick={() => setModalOpen(false)}>
                        <img src="src\assets\copia.png" alt="cerrar" className="w-5 h-5" />
                    </button>
                </div>
                <div
                    className="
                        flex
                        justify-center
                        w-full
                        mb-5
                    "
                    id="modalContentContainer"
                >

                    <div className="flex flex-col">

                        <p
                            className="
                                text-center
                                text-2xl
                            "
                            id="modalText"
                        >
                            {text}
                        </p>

                        <div id="modalContent">
                            {children}
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default Modal;
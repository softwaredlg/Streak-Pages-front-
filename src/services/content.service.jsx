import { API_URL } from "../config/api";
import { getUserData, getClaimData } from "../helpers/storage.service";

export const saveContent = async () => {
    const userData = getUserData();
    const contentData = getClaimData();


    if (
        !userData?.id ||
        !contentData?.content?.id
    ) {
        throw new Error(
            "Faltan datos para guardar contenido"
        );
    }

    const response = await fetch(
        `${API_URL}/content/savecontent`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: userData?.id,
                contentId: contentData?.content.id
            })
        }
    );

    if (!response.ok) {
        throw new Error("Error al intertar guardar contenido");
    }

    return response.json();
}

export const viewSaveContent = async () => {
    const userData = getUserData();

    if (!userData || !userData?.id) {
        throw new Error("No hay datos para ver el contenido");
    }

    const userId = userData?.id;
    /*QUITAR LO DE NGROK!!! */
    const response = await fetch(
        `${API_URL}/content/${userId}/favorites`,
        {
            method: "GET",
            headers: {
                "Content-Type":
                    "application/json",

                "ngrok-skip-browser-warning":
                    "true"
            }
        }
    );

    if (!response.ok) {
        throw new Error("Error al intertar ver contenido");
    }

    return response.json();
}



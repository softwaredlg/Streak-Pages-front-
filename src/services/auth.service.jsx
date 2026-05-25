import { API_URL } from "../config/api";

export const registerUser = async () => {

    const timezone =
        Intl.DateTimeFormat()
            .resolvedOptions()
            .timeZone;

    const response = await fetch(
        `${API_URL}/users/register`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                timezone
            })
        }
    );

    if(!response.ok) throw new Error("Error registrando usuario");
    
    const data = await response.json();

    localStorage.setItem(
        "user_data",
        JSON.stringify({
            id: data.result.user.id,
            timeZone: timezone
        })
    );

    return data;
}
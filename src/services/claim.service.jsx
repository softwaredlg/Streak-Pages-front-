import { API_URL } from "../config/api";

export const dayliClaim = async (type, userId) => {

    const response = await fetch(
        `${API_URL}/claim/${userId}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type
            })
        }
    );

    if(!response.ok){
        throw new Error("Error al intertar reclamar racha");
    }

    const data = await response.json();

    localStorage.setItem(
        "dailyContent",
        JSON.stringify({
            streak: data.streak.current_streak,
            lastClaim: new Date()
                .toISOString()
                .split("T")[0],
            content:data.content
        })
    );

    return data;

}
import { API_URL } from "../config/api";
import { getTodayDate } from "../helpers/date.service";
import { getUserData } from "../helpers/storage.service";

export const dayliClaim = async (userId) => {

    const response = await fetch(
        `${API_URL}/claim/${userId}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    if (!response.ok) {
        throw new Error("Error al intertar reclamar racha");
    }

    const data = await response.json();

    const userData = getUserData();

    const today = getTodayDate();

    localStorage.setItem(
        "dailyContent",
        JSON.stringify({
            streak: data.streak.current_streak,
            lastClaim: today,
            content: data.content
        })
    );

    return data;

}
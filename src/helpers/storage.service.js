export const getUserData = () => {

    return JSON.parse(
        localStorage.getItem("user_data")
    );
}

export const getClaimData = () => {
    return JSON.parse(
        localStorage.getItem("dailyContent")
    )
};
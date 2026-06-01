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

export const setContentView = (type) => {
    localStorage.setItem(
        "View_type",
        type
    )
};

export const getContentView = () => {
    return localStorage.getItem("View_type")
};

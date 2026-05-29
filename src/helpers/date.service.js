export const getTodayDate = () => {

    const userData = JSON.parse(
        localStorage.getItem(
            "user_data"
        )
    );

    return new Intl.DateTimeFormat(
        "en-CA",
        {
            timeZone: userData?.timeZone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }
    ).format(new Date());
}
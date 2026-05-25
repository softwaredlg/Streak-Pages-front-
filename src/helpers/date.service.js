export const getTodayDate = () => {

    const userData = JSON.parse(
        localStorage.getItem(
            "user_data"
        )
    );

    return new Intl.DateTimeFormat(
        "en-CA",
        {
            timeZone:
                userData?.timeZone
        }
    ).format(new Date());
}
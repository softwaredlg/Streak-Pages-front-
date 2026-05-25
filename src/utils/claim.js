import { getTodayDate } from "../helpers/date.service";

export const hasClaimeToday = () => {
    const dailyContent = 
        JSON.parse(
            localStorage.getItem(
                "dailyContent"
            )
        );


    const userData = JSON.parse(
        localStorage.getItem("user_data")
    );

    const timeZone = userData?.timeZone

    if(!dailyContent){
        return false;
    }

    const today = getTodayDate();
    

    return(
        dailyContent.lastClaim === today
    );
}
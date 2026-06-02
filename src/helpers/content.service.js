import { getClaimData } from "./storage.service"
import { getContentView } from "./storage.service";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export const selectedContent = (type) => {

    const { themeMode } = useContext(ThemeContext);

    const content = getClaimData();

    const ContentDay =
        type === "phrase" && themeMode === "day"
            ? content.content.day.phrase
            : content.content.day.tip

    const ContentNight =
        type === "phrase" && themeMode === "night"
            ? content.content.night.phrase
            : content.content.night.tip

    const selectContent =
        themeMode === "day"
            ? ContentDay
            : ContentNight

    return selectContent;
};
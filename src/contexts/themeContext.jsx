import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState("day");

    return (
        <ThemeContext.Provider
            value={{
                themeMode,
                setThemeMode
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
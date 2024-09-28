import React from "react";
import { useContext,createContext } from "react";
const ThemeContext = createContext(
    {
        theme: 'light',
        lightTheme: () => {},
         darkTheme: () => {}
    }
);
export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme  () {
    return useContext(ThemeContext);
}
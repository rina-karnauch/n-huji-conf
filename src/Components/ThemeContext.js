import {createContext, useReducer} from "react";

export const ThemeContext = createContext();

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHT-MODE":
            return { darkMode: false };
        case "DARK-MODE":
            return { darkMode: true };
        default:
            return state;
    }
};

export function ThemeProvider(props) {

    const [state, dispatch] = useReducer(themeReducer, initialState);
    return <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
        {props.children}
    </ThemeContext.Provider>;
}
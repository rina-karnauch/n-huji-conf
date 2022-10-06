import * as React from "react";
import classes from './TableTitle.module.css'
import {useContext} from "react";
import {ThemeContext} from "../ThemeContext";

const TableTitle = (props) => {

    // theme
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={
            `${classes['title-container']}
            ${darkMode ? classes['title-container-dark'] : classes['title-container-light']}`
        }>
            {props.icon}
            <p className={classes['title']}>{props.title}</p>
        </div>
    );
}

export default TableTitle;
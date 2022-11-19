import * as React from "react";
import classes from './NumberTextField.module.css'
import {useContext, useState} from "react";
import {ThemeContext} from "../ThemeContext";
import { TextField} from "@mui/material";
import IOSSwitch from "./IOSSwitch";

const NumberTextField = (props) => {

    // theme
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const [isComment, setIsComment] = useState(false);
    const [confessionNumber, setConfessionNumber] = useState('');



    // change event and validate input
    function onConfessionNumberChange(event) {
        let value = event.currentTarget.value.replace(/\D/g, '');
        if (isComment && confessionNumber !== value) {
            setConfessionNumber(value);
        }
    }

    return (
        <div
            className={classes['comment-number-container']}
        >
            <div className={classes['comment-text']}> comment?</div>
            <IOSSwitch/>
            <TextField
                disabled={!isComment}
                label="* confession id"
                variant="outlined"
                value={confessionNumber}
                required={isComment}
                onChange={(event) => onConfessionNumberChange(event)}
            />
        </div>
    );
}

export default NumberTextField;
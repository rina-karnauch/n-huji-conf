import React from 'react';
import classes from './Body.module.css';
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import TableTitle from "./BodyComponents/TableTitle";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import {Button, TextField} from "@mui/material";
import {
    styled
} from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import NumberTextField from "./BodyComponents/NumberTextField";

const Body = () => {

    // theme
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    // textfield styling
    const StyledTextField = styled(TextField)({
        '& label': {
            color: `${darkMode ? "#c7dbee" : "#858585"}`,
            margin: '10px 20px',
        },
        '& label.Mui-focused': {
            color: `${darkMode ? "#c7dbee" : "#858585"}`,
        },
        '& label.Mui-disabled': {
            color: `${darkMode ? "#c7dbee" : "#858585"}`,
        },
        '& .MuiInputBase-root': {
            backgroundColor: `${darkMode ? "rgba(199,219,238,0.12)" : "rgba(215,215,215,0.37)"}`,
            color: `${darkMode ? "#c7dbee" : "#858585"}`,
            borderRadius: '26px 26px 0px 0px',
            padding: '15px',
        },
        '& .MuiInputBase-root::before': {
            borderBottom: `1x solid ${darkMode ? "#c7dbee" : "#efefef"}`,
        },
        '& .MuiInputBase-root::after': {
            borderBottom: `5px solid ${darkMode ? '#4db85b' : '#60b7d9'}`,
        },
    });

    const StyledButton = styled(Button)(() => ({
        color: `${darkMode ? '#f6fff6' : '#effbff'}`,
        boxShadow: "none",
        borderRadius: "60px",
        fontSize: '15px',
        padding: '7px 15px 7px 15px',
        border: `1px solid ${darkMode ? '#4db85b' : '#60b7d9'}`,
        backgroundColor: `${darkMode ? '#58ad40' : '#3aaecb'}`,
        '&:hover': {
            backgroundColor: `${darkMode ? '#5fb646' : '#42b8d5'}`,
            boxShadow: "none",
        },
    }));

    return (
        <div
            className={
                `${classes['content']}
                ${darkMode ? classes['content-dark'] : classes['content-light']}`
            }
        >
            <TableTitle
                title="Send a Confession"
                icon={<EmailTwoToneIcon/>}
            />
            <form className={`${classes['form-container']}`}>
                <StyledTextField
                    required
                    fullWidth multiline
                    id="fullWidth"
                    size="medium"
                    rows={4}
                    label="whats on your heart"
                    variant="filled"
                    dir="rtl"
                    inputProps={{
                        style: {
                            padding: '10px',
                        },
                    }}
                />
                <div className={classes['form-button-group']}>
                    <NumberTextField/>
                    <StyledButton
                        endIcon={<SendIcon/>}>
                        submit
                    </StyledButton>
                </div>
            </form>
        </div>
    );
};

export default Body;
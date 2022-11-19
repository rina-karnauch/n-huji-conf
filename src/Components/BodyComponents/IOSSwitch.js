import {styled} from "@mui/material/styles";
import {Switch } from "@mui/material";
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../ThemeContext";

const StyledSwitch = styled((props) => {
    const [isComment, setIsComment] = useState(false);
    return (
        <Switch focusVisibleClassName=".Mui-focusVisible"
                disableRipple {...props}
                checked={isComment}
                onChange={e => setIsComment(e.target.checked)}
                clickedBG={props.clickedBG}
                opacity={props.opacity}
                BG={props.BG}

        />
    )
})(({clickedBG, opacity, BG, theme}) => {
    return ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translate(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: `${clickedBG}`,
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: `${clickedBG}`,
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwith-thumb': {
                color:
                    'grey',
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: `${opacity}`,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: `${BG}`,
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    })
});

export default function IOSSwitch() {

    const cTheme = useContext(ThemeContext);
    const darkMode = cTheme.state.darkMode;

    const [clickedBG, setClickedBG] = useState('#2ECA45');
    const [opacity, setOpacity] = useState(0.7);
    const [BG, setBG] = useState('#E9E9EA');

    useEffect(() => {
        if(darkMode){
            setClickedBG('#3aaecb');
            setOpacity(0.3);
            setBG('rgba(53, 76, 100, 0.41)');
        }else{
            setClickedBG('#2ECA45');
            setOpacity(0.7);
            setBG('#E9E9EA');
        }
    }, [darkMode]);

    return (
        <StyledSwitch
            clickedBG={clickedBG}
            opacity={opacity}
            BG={BG}/>
    );

};
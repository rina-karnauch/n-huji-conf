import * as React from 'react';
import classes from './Navigation.module.css';
import {useContext, useState} from "react";
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import {AiTwotoneFileText} from 'react-icons/ai';
import {HiPhone} from 'react-icons/hi';
import {MdInsertPhoto} from 'react-icons/md';
import {ThemeContext} from "../ThemeContext";

const Navigation = (props) => {

    // theme
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    // component
    let items = [
        {
            itemName: 'dashboard',
            element: <AiTwotoneFileText name="home"/>
        },
        {
            itemName: 'hotlines',
            element: <HiPhone name="hotlines"/>
        },
        {
            itemName: 'meme tutorial',
            element: <MdInsertPhoto name="m-tutorial"/>
        }
    ];

    const [isChosen, setChosen] = useState(null);

    const NavigationComp = (props) => {
        return (
            <React.Fragment>
                {props.list.map((item, index) =>
                    <div
                        className={
                            classnames(
                                classes.row,
                                {[classes.chosen]: isChosen === index},
                                {[classes['row-light']]: darkMode === false},
                                {[classes['row-dark']]: darkMode === true},
                            )}
                        key={index}
                        onClick={() => setChosen(index)}>
                        {item.element}
                        <Typography variant="h4" sx={{marginLeft: "10px",}}>
                            {item.itemName}
                        </Typography>
                    </div>)}
            </React.Fragment>);
    }
    return (
        <div className={
            `${classes['nav']} 
            ${props.isNavVisable ? classes['visible-nav'] : classes['invisible-nav']}
            ${darkMode ? classes['nav-dark'] : classes['nav-light']}`
        }>
            <NavigationComp list={items}/>
        </div>
    );
};

export default Navigation;
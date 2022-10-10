import classes from './Title.module.css'
import {FaAngleDoubleDown, FaAngleDoubleUp, FaFacebook} from 'react-icons/fa';
import {useContext, useState} from "react";
import Typography from "@mui/material/Typography";
import {GiNightSky, GiSecretBook} from "react-icons/gi";
import {ThemeContext} from "../ThemeContext";

const Title = (props) => {

    // theme
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleThemeClick = () => {
        if (darkMode) {
            theme.dispatch({type: "LIGHT-MODE"});
        } else {
            theme.dispatch({type: "DARK-MODE"})
        }
    }

    // component itself
    const [isDown, setIsDown] = useState(true);
    const handleNavClick = () => {
        props.setNavVisibility(!props.navState);
        setIsDown(!isDown);
    }

    return (
        <div className={
            // `${classes['nav']} ${darkMode ? classes['nav-dark'] : classes['nav-light']}`
            `${classes['header-container']} 
            ${darkMode ? classes['header-container-dark'] : classes['header-container-light']}`
        }>
            {/*<HeaderTitle/>*/}
            {/*    <HeaderButtons/>*/}
            <div className={classes['left-side-buttons']}>
                <button
                    className={
                        `${classes['dropdown-button']} 
                    ${darkMode ? classes['dropdown-button-dark'] : classes['dropdown-button-light']}`
                    }
                    onClick={handleNavClick}>
                    {isDown ? <FaAngleDoubleDown/> : <FaAngleDoubleUp/>}
                </button>
                <GiSecretBook className={` ${classes['book-icon']}
                    ${darkMode ? classes['book-icon-dark'] : classes['book-icon-light']}
                    `}/>
            </div>
            <Typography id={classes['title']}>
                Huji Confessions
            </Typography>
            <div id={classes['header-buttons-container']}>
                <button className={classes['header-buttons']} onClick={handleThemeClick}>
                    <GiNightSky id={classes['button-mode']}
                                className={classes['button-center']}
                    />
                </button>
                <button className={classes['header-buttons']}>
                    <FaFacebook
                        id={classes['button-facebook']}
                        className={classes['button-center']}
                    />
                </button>
            </div>
        </div>

    );
};

export default Title;
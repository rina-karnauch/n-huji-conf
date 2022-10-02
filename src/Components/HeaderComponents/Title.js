import classes from './Title.module.css'
import {FaAngleDoubleDown, FaAngleDoubleUp, FaFacebook} from 'react-icons/fa';
import {useContext, useState} from "react";
import Typography from "@mui/material/Typography";
import {GiNightSky} from "react-icons/gi";
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
        <div className={classes['header-container']}>
            {/*<HeaderTitle/>*/}
            {/*    <HeaderButtons/>*/}
            <button id={classes['dropdown-button']} onClick={handleNavClick}>
                {isDown ? <FaAngleDoubleDown size={30}/> : <FaAngleDoubleUp size={30}/>}
            </button>
            <Typography id={classes['title']} variant="h3">Huji Confessions</Typography>
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
import classes from './Footer.module.css'
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

const Footer = () => {

    // theme
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div
            className={
                `${classes['footer-container']} 
                ${darkMode ? classes['footer-container-dark'] : classes['footer-container-light']}`
            }>
            <div
                className={classes['texts']}>
                <div
                    className={
                        `${classes['huji-text']}
                        ${darkMode? classes['huji-text-dark'] : classes['huji-text-light']}`
                    }>
                    We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with
                    <br></br>The
                    Hebrew University Of Jerusalem, or any of its subsidiaries or its affiliates. <br></br>The official
                    HUJI
                    website can be <a href="https://new.huji.ac.il/">here</a>. <br></br>
                </div>
                <div
                    className={
                        classes['admin-text']
                    }>
                    Confessions are moderated by anonymous admins. Site was created by <a
                    href="https://www.linkedin.com/in/rina-karnauch-055826203/">Rina Karnauch</a> 🧚🏻.
                </div>
                <div
                    className={
                        classes['rights-text']
                    }>
                    All Rights Reserved © 2022
                </div>
            </div>
        </div>
    );

};

export default Footer;
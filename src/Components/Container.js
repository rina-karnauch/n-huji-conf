import React, {useContext} from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import classes from './Container.module.css';
import {ThemeContext} from "./ThemeContext";

const Container = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div
            className={darkMode ?
                `${classes['container']} ${classes['container-dark']}`
                :
                `${classes['container']} ${classes['container-light']}`
            }>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default Container;
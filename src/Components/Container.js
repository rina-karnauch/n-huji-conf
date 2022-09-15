import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import classes from './Container.module.css';

const Container = () => {

    return(
        <div className={classes.container}>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default Container;
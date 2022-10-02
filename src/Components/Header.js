import React, {useContext, useState} from 'react';
import Title from "./HeaderComponents/Title";
import Navigation from "./HeaderComponents/Navigation";

const Header = () => {

    const [isNavVisible, setNavVisibility] = useState(false);
    const [chosenTab, setChosen] = useState();

    return (
        <React.Fragment>
            <Title navState={isNavVisible} setNavVisibility={setNavVisibility}/>
            <Navigation setChosen={setChosen} isNavVisable={isNavVisible}/>
        </React.Fragment>
    );
};

export default Header;
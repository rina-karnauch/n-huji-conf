import React, {useState} from 'react';
import Title from "./HeaderComponents/Title";
import Navigation from "./HeaderComponents/Navigation";
import Accordion from '@mui/material/Accordion';

const Header = () => {

    const [isNavVisible, setNavVisibility] = useState(false);
    const [chosenTab, setChosen] = useState();

    return (
        <Accordion expanded={isNavVisible}>
            <Title navState={isNavVisible} setNavVisibility={setNavVisibility}/>
            <Navigation setChosen={setChosen}/>
        </Accordion>
    );
};

export default Header;
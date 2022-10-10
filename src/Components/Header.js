import React, {useState} from 'react';
import Title from "./HeaderComponents/Title";
import Navigation from "./HeaderComponents/Navigation";
import Accordion from '@mui/material/Accordion';

const Header = () => {

    const [isNavVisible, setNavVisibility] = useState(false);
    const [chosenTab, setChosen] = useState();

    return (
        <div style={{width: '100%'}}>
            <Accordion
                expanded={isNavVisible}
            >
                <Title navState={isNavVisible} setNavVisibility={setNavVisibility}/>
                <Navigation setChosen={setChosen}/>
            </Accordion>
        </div>

    );
};

export default Header;
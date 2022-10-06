import React, {useState} from 'react';
import Title from "./HeaderComponents/Title";
import Navigation from "./HeaderComponents/Navigation";
import Accordion from '@mui/material/Accordion';

const Header = () => {

    const [isNavVisible, setNavVisibility] = useState(false);
    const [chosenTab, setChosen] = useState();

    return (
        <React.Fragment>
            <Accordion expanded={isNavVisible} onChange={() => {
                setNavVisibility(!isNavVisible)
            }}>
                <Title navState={isNavVisible} setNavVisibility={setNavVisibility}/>
                <Navigation setChosen={setChosen}/>
            </Accordion>
        </React.Fragment>
    );
};

export default Header;
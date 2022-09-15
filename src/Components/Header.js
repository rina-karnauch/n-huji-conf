import React, {useState} from 'react';
import Title from "./HeaderComponents/Title";
import Navigation from "./HeaderComponents/Navigation";

const Header = () => {

    const [isNavVisible, setNavVisibility] = useState(false);

    return (
        <React.Fragment>
            <Title navState={isNavVisible} setNavVisibility={setNavVisibility}/>
            {isNavVisible && <Navigation/>}
        </React.Fragment>
    );
};

export default Header;
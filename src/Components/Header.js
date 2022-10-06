import React, {useState} from 'react';
import Title from "./HeaderComponents/Title";
import Navigation from "./HeaderComponents/Navigation";
import Drawer from '@mui/material/Drawer';

const Header = () => {

    const [isNavVisible, setNavVisibility] = useState(false);
    const [chosenTab, setChosen] = useState();

    return (
        <React.Fragment>
            <Title navState={isNavVisible} setNavVisibility={setNavVisibility}/>
            <Drawer
                sx={{
                    zIndex:'1',
                    width: '100vw',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        marginTop:'110px',
                        width: '100vw',
                        boxSizing: 'border-box',
                        borderBottom:'none',
                    },
                }}
                variant="persistent"
                anchor="top"
                open={isNavVisible}
           >
                <Navigation setChosen={setChosen}/>
            </Drawer>
        </React.Fragment>
    );
};

export default Header;
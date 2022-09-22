import * as React from 'react';
import classes from './Navigation.module.css';
import {useState} from "react";
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import {AiTwotoneFileText} from 'react-icons/ai';
import {HiPhone} from 'react-icons/hi';
import {MdInsertPhoto} from 'react-icons/md';

const Navigation = (props) => {

    let items = [
        {
            itemName: 'dashboard',
            element: <AiTwotoneFileText name="home"/>
        },
        {
            itemName: 'hotlines',
            element: <HiPhone name="hotlines"/>
        },
        {
            itemName:'meme tutorial',
            element: <MdInsertPhoto name="m-tutorial"/>
        }
    ];

    const [isChosen, setChosen] = useState(null);

    const NavigationComp = (props) => {
        return (
            <React.Fragment>
                {props.list.map((item, index) =>
                    <div
                        className={classnames(classes.row, {[classes.chosen]: isChosen === index})}
                        key={index}
                        onClick={() => setChosen(index)}>
                        {item.element}
                        <Typography variant="h4" sx={{marginLeft:"10px", }}>
                            {item.itemName}
                        </Typography>
                    </div>)}
            </React.Fragment>);
    }
    return (
        <div className={classes['nav']}>
            <NavigationComp list={items}/>
        </div>
    );
};

export default Navigation;
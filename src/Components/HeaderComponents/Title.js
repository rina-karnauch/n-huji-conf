import classes from './Title.module.css'
import {FaAngleDoubleDown, FaAngleDoubleUp} from 'react-icons/fa';
import {useState} from "react";

const Title = (props) => {

    const [isDown, setIsDown] = useState(true);

    const handleNavClick = () => {
        props.setNavVisibility(!props.navState);
        setIsDown(!isDown);
    }
    return (
        <div className={classes['header-container']}>
            {/*<HeaderTitle/>*/}
            {/*    <HeaderButtons/>*/}
            <button id={classes['dropdown-button']} onClick={handleNavClick}>
                {isDown ? <FaAngleDoubleDown size={30}/> : <FaAngleDoubleUp size={30}/>}
            </button>
        </div>

    );
};

export default Title;
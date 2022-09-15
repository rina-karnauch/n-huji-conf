import classes from './Title.module.css'

const Title = (props) => {


    const handleNavClick = () =>{
        props.setNavVisibility(!props.navState);
    }
    return (
        <div className={classes['header-container']}>
            {/*<HeaderTitle/>*/}
            {/*    <HeaderButtons/>*/}
            <button onClick={handleNavClick}>
                make nav visible
            </button>
        </div>

    );
};

export default Title;
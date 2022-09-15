const Title = (props) => {


    const handleNavClick = () =>{
        props.setNavVisibility(!props.navState);
    }
    return (
        <div>
            <button onClick={handleNavClick}>
                make nav visible
            </button>
        </div>
    );
};

export default Title;
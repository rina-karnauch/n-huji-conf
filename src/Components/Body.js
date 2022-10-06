import classes from './Body.module.css';
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import TableTitle from "./BodyComponents/TableTitle";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import {TextField} from "@mui/material";
import {
    styled
} from '@mui/material/styles';

const Body = () => {

    // theme
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    // textfield styling
    const CssTextFieldDark = styled(TextField)({
        '& label': {
            color: '#63788f'
        },
        '& label.Mui-focused': {
            color: '#63788f'
        },
        '& label.Mui-disabled': {
            color: '#63788f'
        },
        '& .MuiInputBase-root': {
            color: '#63788f',
            borderRadius: '0',
            padding: '10px'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#4c637c'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#4c637c'
            },
            '&:hover fieldset': {
                borderColor: '#4c637c'
            },
            '&.Mui-focused fieldset': {
                borderColor: '#4c637c'
            },
            '&.Mui-disabled fieldset': {
                borderColor: '#4c637c'
            }
        },
    });

    const CssTextFieldLight = styled(TextField)({
        '& label': {
            color: "#858585"
        },
        '& label.Mui-focused': {
            color: "#858585"
        },
        '& label.Mui-disabled': {
            color: "#858585"
        },
        '& .MuiInputBase-root': {
            color: "#858585"
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: "#bbbbbb"
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: "#bbbbbb"
            },
            '&:hover fieldset': {
                borderColor: "#bbbbbb"
            },
            '&.Mui-focused fieldset': {
                borderColor: "#bbbbbb"
            },
            '&.Mui-disabled fieldset': {
                borderColor: "#bbbbbb"
            }
        },
    });

    return (
        <div
            className={
                `${classes['content']}
                ${darkMode ? classes['content-dark'] : classes['content-light']}`
            }
        >
            <TableTitle
                title="Send a Confession"
                icon={<EmailTwoToneIcon/>}
            />
            <form className={classes['form-container']}>
                {darkMode ? <CssTextFieldDark

                    fullWidth
                    multiline
                    id="fullWidth"
                    size="normal"
                    rows={6}
                    sx={{
                        width: '90vw',
                    }}
                    label="write whats on your mind"
                    variant="outlined"
                    dir="rtl"
                    inputProps={{
                        style: {
                            fontSize: "1.8rem",
                            padding:'10px'
                        }
                    }}
                    InputLabelProps={{
                        style: {
                            fontSize: "1.5rem",
                        }
                    }}
                /> : <CssTextFieldLight
                    required
                    fullWidth multiline
                    id="fullWidth"
                    size="medium"
                    rows={8}
                    sx={{
                        width: '90vw',
                    }}
                    label="whats on your heart"
                    variant="outlined"
                    name="entry.638196057"
                    dir="rtl"
                    inputProps={{
                        style: {
                            fontSize: "1.8rem",
                            padding:'10px'
                        }
                    }}
                    InputLabelProps={{
                        style: {
                            fontSize: "1.5rem",
                        }
                    }}
                />}
            </form>
        </div>
    );
};

export default Body;
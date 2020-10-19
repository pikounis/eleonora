import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from "@material-ui/core/IconButton";

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper
                color={'primary'}
                elevation={0}
                square
                className={classes.paper}
            >
                <IconButton className={classes.icon} href={'https://instagram.com'}><InstagramIcon/></IconButton>
                <IconButton className={classes.icon} href={'https://instagram.com'}><InstagramIcon/></IconButton>
            </Paper>
        </div>
    );
}

export default Footer;





// const Footer = () => {
//     return(
//         <h1>hi</h1>
//     );
// }

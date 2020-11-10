import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Slide from '@material-ui/core/Slide';
import { changeRoute } from '../../model/actions';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


const getLocation = location => {

    console.log(location)
    switch (location) {

        case '/gallery': {
            return 1;
        }
        // case '/about': {
        //     return 2;
        // }
        case '/': {
            return 0;
        }
        default: {
            return 0;
        }
    }
}

const HideAppBar = ({children, classes, ...props}) => {
    const location = useSelector(state => state.route);
    const path = useLocation().pathname
    const [currentTab, setCurrentTab] = React.useState(getLocation(location));

    const dispatch = useDispatch();
    useEffect(() => setCurrentTab(getLocation(location)), [location])

    return !path.includes('admin') && (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}  component={Link} to={'/'} >Eleonora Pikouni</Typography>
                        <div className={classes.spacer} />
                        <Tabs value={currentTab} aria-label="simple tabs example" onChange={(_, value) => setCurrentTab(value)}>
                            <Tab className={classes.title} label="Home" component={Link} to={'/'} onClick={() => dispatch(changeRoute('/'))} />
                            <Tab className={classes.title} label="Gallery" component={Link} to={'/gallery'} onClick={() => dispatch(changeRoute('/gallery'))}/>
                            {/*<Tab label="About" component={Link} to={'/about'} />*/}
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            {
                children
            }
        </React.Fragment>
    );
}

export default withStyles(styles)(HideAppBar);
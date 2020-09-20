import React from 'react';
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

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
    switch (location.pathname) {

        case '/gallery': {
            return 1;
        }
        case '/about': {
            return 2;
        }
        case '/': {
            return 0;
        }
        default: {
            return 0;
        }
    }
}

export default function HideAppBar({children, ...props}) {
    const location = useLocation();
    const [currentTab, setCurrentTab] = React.useState(getLocation(location));
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">Eleonora Pikouni</Typography>
                        <Tabs value={currentTab} aria-label="simple tabs example" onChange={(_, value) => setCurrentTab(value)}>
                            <Tab label="Home" component={Link} to={'/'} />
                            <Tab label="Gallery" component={Link} to={'/gallery'} />
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
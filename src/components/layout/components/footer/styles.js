import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            width: theme.spacing(16),
            // height: theme.spacing(16),
        },
    },
    paper: {
        width: '100%',
        padding: 10,
        background: theme.palette.primary.dark,
        display: 'flex',
    },
    icon: {
        color: 'white'
    }
}));

export default useStyles;
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    paper: {
        width: '100%',
        padding: 10,

    }
}));

export { useStyles };
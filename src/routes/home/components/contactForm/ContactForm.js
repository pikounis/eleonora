import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form } from 'react-final-form';
import { TextField as RffTextfield } from 'mui-rff';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { handleTextChange } from "../../../../model/actions";
import { useStyles, color } from "./styles";


const ContactForm = () => {
    const dispatch = useDispatch();

    const text = useSelector(state =>  state.text);
    const classes = useStyles();
    return (
        <div className={classes.root} style={color} >

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Paper elevation={0}>
                    <TextField
                        id="standard-basic"
                        label="First Name"
                        value={text}
                        onChange={event => dispatch(handleTextChange(event.target.value))}
                    />
                </Paper>
            </Grid>

        </div>




        // <Form
        //     onSubmit={(values => console.log(values))}
        //     render={({ handleSubmit, values }) => (
        //         <form onSubmit={handleSubmit} noValidate>
        //             {/*<RffTextfield label="Hello world" name="hello" required={true} />*/}
        //             <TextField id="standard-basic" label="First Name" />
        //             <pre>{JSON.stringify(values)}</pre>
        //         </form>
        //     )}
        //  />
    );
}

export default ContactForm;
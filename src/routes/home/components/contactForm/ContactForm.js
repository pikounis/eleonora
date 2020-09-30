import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form } from 'react-final-form';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from 'mui-rff';
import { handleTextChange } from "../../../../model/actions";
import { useStyles } from "./styles";
import Button from '@material-ui/core/Button';
import { submitForm } from "../../../../model/actions";

const ContactForm = () => {
    const dispatch = useDispatch();

    const text = useSelector(state => state.text);
    const classes = useStyles();
    return (
        <div className={classes.root} >


            <Paper
                elevation={3}
                className={classes.paper}
            >
                <Form
                    onSubmit={(values) => dispatch(submitForm(values))}
                    render={({ handleSubmit, values }) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <Grid
                                container
                                direction="row"
                                spacing={2}
                            >
                                <Grid item md={6} sm={12}>
                                    <TextField
                                        id="standard-basic"
                                        label="First Name"
                                        fullWidth
                                        variant={"outlined"}
                                        name="firstName"
                                    />
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <TextField
                                        id="standard-basic"
                                        label="Last Name"
                                        fullWidth
                                        variant={"outlined"}
                                        name="lastName"
                                    />
                                </Grid>
                                <Grid item md={12} sm={12}>
                                    <TextField
                                        id="standard-basic"
                                        label="Email"
                                        fullWidth
                                        variant={"outlined"}
                                        name="email"
                                    />
                                </Grid>
                                <Grid item md={12} sm={12}>
                                    <TextField
                                        id="standard-basic"
                                        label="Message"
                                        fullWidth
                                        variant={"outlined"}
                                        multiline
                                        rows={7}
                                        name="message"
                                    />
                                </Grid>
                                <Grid item md={2} sm={12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        type={"submit"}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                />
            </Paper>
        </div>
    );
}

export default ContactForm;
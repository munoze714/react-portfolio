import React from 'react';
import { makeStyles, withStyles, } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box, Paper } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'snow',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: "snow",
            },
            '&:hover fieldset': {
                borderColor: '#e3874f',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#e3874f',
            },
        },
    },
})(TextField);


const useStyles = makeStyles((theme) => ({
    root: {
        color: "#e3874f",
        padding: theme.spacing(6),
        background: "#707070",
        margin: 'auto',
        maxWidth: 400,

    },
    button: {
        marginTop: "1rem",
        color: "#e3874f",
        borderColor: "#e3874f",
    }

}));


export default function InputField() {

    const classes = useStyles();

    return (
        <>
            <Box component="div" >
                <Grid container justify="center">
                    <Paper
                        variant="outlined"
                        square elevation={24}
                        className={classes.root}>
                        <Typography variant="h5">
                            Looking foward to hearing from you!
                    </Typography>
                        <Grid
                            component="form"
                            name="contact"
                            method="POST"
                            action='/contact'
                            data-netlify="true"
                            netlify-honeypot="bot-field">
                            <CssTextField
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <CssTextField
                                fullWidth={true}
                                type="text"
                                name="name"
                                label="Name"
                                variant="outlined"
                                margin="dense"
                            />
                            <br></br>
                            <CssTextField
                                fullWidth={true}
                                type="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                margin="dense"
                            />
                            <br></br>
                            <CssTextField
                                fullWidth={true}
                                type="email"
                                name="message"
                                label="Message"
                                variant="outlined"
                                margin="dense"
                                multiline
                                rows={4}
                                rowsMax={20}
                            />
                            <br></br>
                            <Button variant="outlined" type="submit" className={classes.button} >Send<SendIcon /></Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Box>
        </>
    )
}

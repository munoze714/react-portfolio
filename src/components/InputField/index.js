import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box, Paper } from "@material-ui/core";
// import SendIcon from "@material-ui/core/Send";

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "snow",
        color: "#e3874f",
        padding: theme.spacing(4),
        background: "#707070",
        margin: 'auto',
        maxWidth: 500,
    },

}));


export default function InputField() {

    const classes = useStyles();
    // const theme = useTheme();
    return (
        <>
            <Box component="div" >
                <Grid container justify="center">
                    <Paper component="form"
                        netlify
                        netlify-honeypot="bot-field"
                        // hidden
                        variant="outlined"
                        square elevation={24}
                        className={classes.root}>
                        <Typography variant="h5">
                            Hire or contact me..
                    </Typography>
                        <TextField
                            type="text"
                            name="name"
                            fullwidth={true}
                            label="Name"
                            variant="outlined"
                            margin="dense"
                            size="medium" />
                        <br></br>
                        <TextField
                            type="email"
                            name="email"
                            fullwidth={true}
                            label="Email"
                            variant="outlined"
                            margin="dense"
                            size="medium" />
                        <br></br>
                        <TextField
                            type="email"
                            name="message"
                            fullwidth={true}
                            label="Message"
                            variant="outlined"
                            margin="dense"
                            size="medium" />
                        <br></br>
                        <Button variant="outlined" type="submit" fullwidth={true}>Contact Me</Button>
                    </Paper>
                </Grid>
            </Box>
        </>
    )
}

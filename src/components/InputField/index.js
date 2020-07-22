import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
// import SendIcon from "@material-ui/core/Send";

const useStyles = makeStyles((theme) => ({
    root: {

        color: "#e3874f"

    },
}));


export default function InputField() {
    const classes = useStyles();
    // const theme = useTheme();
    return (
        <>
            <Box component="div" className={classes.root}>
                <Grid container justify="center">
                    <Box component="form" >
                        <Typography variant="h5">
                            hire or contact me..
                    </Typography>
                        <TextField
                            fullwidth={true}
                            label="Name"
                            variant="outlined"
                            margin="dense"
                            size="medium" />
                        <TextField
                            fullwidth={true}
                            label="Email"
                            variant="outlined"
                            margin="dense"
                            size="medium" />
                        <br></br>
                        <TextField
                            fullwidth={true}
                            label="Company Name"
                            variant="outlined"
                            margin="dense"
                            size="medium" />
                        <br></br>
                        <Button variant="outlined" fullwidth={true}>Contact Me</Button>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

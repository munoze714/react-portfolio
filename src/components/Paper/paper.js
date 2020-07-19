import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Avatar, Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper/index';
import Links from "../Links";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        background: "#707070",
        margin: 'auto',
        maxWidth: 500,
    },
    avatar: {
        height: "200px",
        width: "200px",
        marginTop: "20px",
        marginBottom: "20px",
        [theme.breakpoints.down("sm")]: {
            width: "100px",
            height: "100px",
        },
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={24}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Avatar className={classes.avatar} alt="complex" src="/images/me.jpeg" />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom fontSize={20} variant="subtitle1">
                                    Hello
                                 </Typography>
                                <Typography variant="body2" gutterBottom>
                                    I'm Elizabeth Munoz
                                 </Typography>
                                <Divider />
                                <Typography variant="body2" color="textSecondary">
                                    Welcome to my Portfolio
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Links alignItems="flex-end" />
            </Paper>
        </div >
    );
}

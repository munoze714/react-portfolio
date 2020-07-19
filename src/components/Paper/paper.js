import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Avatar, Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper/index';
import Links from "../Links";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(4),
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
                        <Avatar className={classes.avatar} alt="me" src="/images/me.jpeg" />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom fontSize={50} variant="subtitle1">
                                    I'm Elizabeth Munoz
                                 </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full-Stack Web Developer
                                 </Typography>
                                <Divider />
                                <Typography variant="body2" color="textSecondary">
                                    I am a delicate Web Developer with a background in Graphic Design. When I discovered a passion to create . Attained a Certificate in Full Stack Web Development at University of Arizona. I enjoy learning, problem solving and prevailing. Excited to use my new skills in a new profession!
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br></br>
                <Links alignItems="flex-end" />
            </Paper>
        </div >
    );
}

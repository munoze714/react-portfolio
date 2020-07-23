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
        padding: theme.spacing(8),
        margin: "auto",
        background: "#707070",
        maxWidth: 500,
        [theme.breakpoints.down("sm")]: {
            maxWidth: 400,
            maxheight: 300
        },
    },
    avatar: {
        height: "300px",
        width: "300px",
        marginTop: "20px",
        marginBottom: "20px",
        [theme.breakpoints.down("sm")]: {
            width: "200px",
            height: "200px",
        },
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} square variant="outlined" elevation={24}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Avatar className={classes.avatar} alt="me" src="/images/me.jpeg" />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography variant="subtitle1" gutterBottom>
                                    Full-Stack Web Developer
                                 </Typography>
                                <Divider />
                                <br></br>
                                <Typography variant="body1" color='textPrimary'>
                                    I am a delicate Web Developer with a background in Graphic Design. Intrinsic motivation to connect with clients and collaboration with others to develop meaningful applications. Attained a Certificate in Full Stack Web Development at University of Arizona. I enjoy learning, problem solving and prevailing. Excited to use my new skills in a new profession!
                                   <Divider />
                                    <br></br>
                                   Skills: HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, Database Theory, MongoDB/Mongoose, MySQL/Sequelize, Command Line, heroku and Git.
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

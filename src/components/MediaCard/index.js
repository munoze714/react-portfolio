import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        background: "white",
        margin: "4rem",
        float: "left",
        width: "325px",
        "&:hover": {
            boxShadow: "0 3px 6px #999, 0 3px 6px #999",
        }
    },
    media: {
        height: 200,
    },
    content: {
        height: 175,
    },
    action: {
        "& .MuiButton-textPrimary": {
            color: "#e3874f"
        },
        backgroundColor: "#21201f",
    }
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.action}>
                <Button target="_blank" size="small" color="primary" href={props.live}>
                    Live
                </Button>
                <Button size="small" color="primary" href={props.github}>
                    Github
                </Button>
            </CardActions>
        </Card>
    );
}
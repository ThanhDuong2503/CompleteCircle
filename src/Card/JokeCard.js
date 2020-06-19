import React from "react";
import "./JokeCard.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    media: {
        height: 140,
    },
});

export default function JokeCard(props) {

    const classes = useStyles();

    return(
            <Card className={"JokeCard"}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://i.ytimg.com/vi/O5d1R7G3-wk/maxresdefault.jpg"
                        title="FunnyAnimal"
                        width="10%"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Funny Joke
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p">
                            {props.jokeProps.setup}
                        </Typography>
                        <Typography variant="body2" color="Primary" component="p">
                            {props.jokeProps.punchline}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
}
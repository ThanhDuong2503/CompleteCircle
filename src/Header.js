import React from "react";
import "./Header.css";
import Grid from '@material-ui/core/Grid';

export default function Header() {
    return(
        <Grid   container direction="row"
                justify="space-around"
                alignItems="flex-start">

            <Grid item xs={4}>
                picture
            </Grid>

            <Grid item xs={8}>
                Jokes
            </Grid>

        </Grid>


        );
}
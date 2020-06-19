import React from "react";
import Grid from '@material-ui/core/Grid';

export default function Title(){
    return(
        <Grid   container direction="row"
                justify="space-around"
                alignItems="flex-start">

                <Grid item xs={4}>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/71iXP+-teoL.png" alt="Logo" width="20%"/>
                </Grid>

                <Grid item xs={8}>
                    <h1>Jokes</h1>
                </Grid>
        </Grid>
    )
}
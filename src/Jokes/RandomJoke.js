import React, {useEffect, useState} from "react";
import JokeCard from "../Card/JokeCard";

export default function RandomJoke(){

    const [joke, setJoke] = useState();

    useEffect(() => {
        fetch ("https://official-joke-api.appspot.com/jokes/random")
            .then(response => response.json())
            .then(data => setJoke(data))
    }, [] );

    return (
        <>
            {joke && <JokeCard jokeProps={joke}></JokeCard>}
        </>
    );
}
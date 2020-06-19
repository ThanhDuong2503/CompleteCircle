import React, {useEffect, useState} from "react";
import JokeCard from "../Card/JokeCard";

export default function TenJokes(){

    const [jokes, setJokes] = useState();

    useEffect(() => {
        fetch ("https://official-joke-api.appspot.com/random_ten")
            .then(response => response.json())
            .then(data => setJokes(data))
    }, [] );

    return (
        <>
            {jokes && jokes.map(joke => (
                <JokeCard jokeProps={joke}></JokeCard>))}
        </>
    );
}
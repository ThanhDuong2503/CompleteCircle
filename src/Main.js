import React, {useState, useEffect} from "react";
import "./Main.css";
import JokeCard from "./Card/JokeCard";

const fetchData= async () => {
    const data = await fetch ("https://official-joke-api.appspot.com/jokes/random");
    const item = await data.json();
    return (item);
}
export default function Main() {

    const [joke, setJoke] = useState();

    useEffect(() => {
        fetchData().then(setJoke);
    }, [] );


    return (
        <main className={"Main"}>
            {joke && <JokeCard joke={joke}></JokeCard>}
        </main>
    );

}
import React, {useState, useEffect} from "react";
import "./Main.css";
import RandomJoke from "./Jokes/RandomJoke";
import TenJokes from "./Jokes/TenJokes";
import {
    Switch,
    Route,
} from "react-router-dom";

export default function Main() {

    return (
        <main className={"Main"}>
            <h1>Main Content</h1>
            <Switch>
                <Route exact path="/">
                    <h2>Lets get some funny jokes!</h2>
                </Route>
                <Route path="/random">
                    <RandomJoke></RandomJoke>
                </Route>
                <Route path="/random10">
                    <TenJokes></TenJokes>
                </Route>
            </Switch>

        </main>
    );

}
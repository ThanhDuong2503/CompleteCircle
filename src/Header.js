import React from "react";
import "./Header.css";
import Title from "./Header/Title";
import MenuIcon from "./Header/MenuIcon";
import AppBar from "@material-ui/core/AppBar";

export default function Header() {

    return(
        <AppBar className={"Header"} position="static">
        <Title></Title>
        <MenuIcon></MenuIcon>
        </AppBar>
    );
}
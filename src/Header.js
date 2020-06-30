import React, {useContext} from "react";
import "./Header.css";
import Title from "./Header/Title";
import MenuIcon from "./Header/MenuIcon";
import AppBar from "@material-ui/core/AppBar";
import {ThemeContext} from "./App";

export default function Header() {

    const theme = useContext(ThemeContext)

    return(
        <AppBar className={"Header"} position="static" color={theme === "dark" ? "primary" : "secondary"}>
        <Title></Title>
        <MenuIcon></MenuIcon>
        </AppBar>
    );
}
import React from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./MenuIcon.css";
import {
    Link
} from "react-router-dom";
import {useHistory} from "react-router";

export default function MenuIcon(){

    const history = useHistory();
    function goBackHandle(){
        history.goBack();
    }
    function goForwardHandle(){
        history.goForward();
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className={"MenuIcon"}>
            <button onClick={goBackHandle}> go back </button>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/random">random Joke</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/random10">10 random Jokes</Link>
                </MenuItem>
            </Menu>
            <button onClick={goForwardHandle}> go forward </button>
        </div>
    )
}
import React, {createContext, useState} from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";

export const ThemeContext = createContext("dark");

function App() {

    const [theme, setTheme] = useState("dark")

  return (
    <div className="App">

        <Button onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}>switch theme</Button>
        <ThemeContext.Provider value={theme}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
        </ThemeContext.Provider>


    </div>
  );
}

export default App;

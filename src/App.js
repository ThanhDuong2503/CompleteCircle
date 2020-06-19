import React from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <Header></Header>
      </header>

      <main className="Main">
          <Main></Main>
      </main>

      <footer className="Footer">
          <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;

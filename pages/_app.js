import '../styles/globals.css'

import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

// import './App.css';

function App() {
  return (
    <React.Fragment>
        <Header></Header>
        <Main></Main>
        <About></About>
        <Skills/>
        <Projects></Projects>
    </React.Fragment>
    
  );
}

export default App;
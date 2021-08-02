import '../styles/globals.css'

import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ProfessionalExperience from "../components/ProfessionalExperience";
// import './App.css';
import ContactUs from "../components/ContactUs";

function App() {
  return (
    <React.Fragment>
        <Header></Header>
        <Main></Main>
        <div id="about"><About/></div>
        <div id="skills"><Skills/></div>
        <div id="projects"><Projects/></div>
        <div id="PE"><ProfessionalExperience/></div>
        {/* <div id="ContactUs"><ContactUs/></div> */}
    </React.Fragment>
    
  );
}

export default App;
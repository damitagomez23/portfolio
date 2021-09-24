import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar} from './Navbar.js';
import {FooterLinks} from "./Footer-Links.js";
import {Home} from "./Home.js";
import {Contact} from "./Contact.js";
import {About} from "./About.js";
import {Projects} from "./Projects.js";


import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            {/* if currentUrl == "/about" */}
            <Route path="/about">
                <About />
            </Route>
            {/* if currentUrl == "/home" */}
            <Route path="/" >
                <Home />
            </Route>
          </Switch>
          <FooterLinks />
        </div>
    </BrowserRouter>
  );
}

export default App;

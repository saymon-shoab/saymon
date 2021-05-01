import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Share/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';



function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>     
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/about">
           <AboutMe></AboutMe>
        </Route>
        <Route path="/project">
           <Projects></Projects>
        </Route>
        <Route path="/blog">
           <Blogs></Blogs>
        </Route>
        <Route path="/contact">
           <Contact></Contact>
        </Route>
     </Switch>
    </Router>
  );
}

export default App;

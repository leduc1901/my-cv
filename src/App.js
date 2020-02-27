import React from 'react';
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Project from "./screens/Project"
import { BrowserRouter , Route , Switch, Link } from "react-router-dom"

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/about" exact component={About}></Route>
              <Route path="/projects" exact component={Project}></Route>
            </Switch>
        </div>
    </BrowserRouter>    
  );
}

export default App;

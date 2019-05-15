import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './App.css';
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <h1> Redux Friends </h1>
        <nav>
          <NavLink to="/login">Log In </NavLink>
        </nav>
      </div>
    <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;

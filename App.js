import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dhomepage from './Dhomepage'

function App() {
  return (
    <Router>
    <div className="App">
      <Dhomepage/>
    </div>
    </Router>
  );
}

export default App;

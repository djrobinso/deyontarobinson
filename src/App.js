import React, { Component } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Router from './components/Router';
import './App.css';

//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (

      <div class='page-container'>
        <Navbar />
        <Router />
      </div>

    );
  }
}

export default App;

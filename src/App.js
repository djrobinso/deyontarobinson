import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { NavLink } from 'react-router-dom';
import Router from './components/Router';
import './App.css';
import Footer from './components/footer';

//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (

      <div>
        <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <a class="nav-link" href="#"><NavLink to='/about_me'>About Me</NavLink></a>
                <a class="nav-link" href="#"><NavLink to='/education'>Education</NavLink></a>
                <a class="nav-link" href="#"><NavLink to='/portfolio'>My Portfolio</NavLink></a>
                <a class="nav-link" href="#"><NavLink to='/contact'>Contact</NavLink></a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>

        <Router />
      </div>

    );
  }
}

export default App;

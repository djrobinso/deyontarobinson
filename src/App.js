import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Router from './components/Router';
import './App.css';


class App extends Component {
  render() {
    return (

      <div>
        <div className="demo-big-content">
          <Layout>
            <Header className='header-color' title="Deyonta Robinson" scroll>
              <Navigation>
                <Link to='/'>Home</Link>
                <Link to='/about_me'>About Me</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/'></Link>
                <Link to='/contact'>Contact</Link>
              </Navigation>
            </Header>
            <Drawer className='side-nav-color' title="Deyonta Robinson">
            <Navigation>
                <Link to='/'>Home</Link>
                <Link to='/about_me'>About Me</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/'></Link>
                <Link to='/contact'>Contact</Link>
            </Navigation>
          </Drawer>
          <Content className='content'>
              <div className="page-content" />
              <Router />
          </Content>
        </Layout>
      </div>
  </div>

    );
  }
}
export default App;

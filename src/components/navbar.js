import React from 'react';
import Router from './Router';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#"><NavLink to='/about_me'>About Me</NavLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><NavLink to='/education'>Education</NavLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><NavLink to='/portfolio'>My Portfolio</NavLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><NavLink to='/resume'>Resume</NavLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><NavLink to='/skills'>Skills</NavLink></a>
          </li>
        </ul>
    </nav>

  )
}

export default Navbar

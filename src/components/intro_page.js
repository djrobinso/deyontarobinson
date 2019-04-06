import React from 'react';
import {Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';

/*import Photo from '../img/apple-black-and-white-black-and-white-169573.jpg';*/


const Title = () => {
  return (

      <div className='intro_page'>
        <br />
        <h1>Hello!<br />
        My name is Deyonta <br />
        I do Application Development</h1>
        <p> HTML/CSS | Bootstrap | ReactJs | NPM | AngularJs </p>
        <div>
          <Link className='ghost-button-transition' to='/about_me'>Who Am I ?</Link>
          <Link className='ghost-button-transition' to='/projects'>See My Work</Link>
        </div>
        <div classname='intro-container'>
              <div className='banner-text'>
              </div>
          </div>
      </div>

  )
}
export default Title

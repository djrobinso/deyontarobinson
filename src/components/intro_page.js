import React from 'react';
import {Grid, Cell} from 'react-mdl';
import Photo from '../img/apple-black-and-white-black-and-white-169573.jpg';
/**
<img
  src={Photo}
  alt='landing-page-photo'
  className='intro-photo'
/>
**/


const Title = () => {
  return (

      <div className='intro_page'>
        <Grid className='landing-grid'>
          <div classname='intro-container'>
            <Cell col={12}>
              <div className='banner-text'>
                <h1>Deyonta Robinson</h1>
                <h2>Web Applications / Software Developer</h2>
              </div>
            </Cell>
          </div>
        </Grid>
      </div>


  )
}

export default Title

import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Intro from './intro_page';
import About from './about_me';
import Education from './education';
import Portfolio from './portfolio';
import Resume from './resume';
import Skills from './skills';



const Router = (props) => {
  return (

    <Switch>
      <Route exact path='/' component={Intro} />
      <Route exact path='/about_me' component={About} />
      <Route exact path='/education' component={Education} />
      <Route exact path='/portfolio' componenet={Portfolio} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/skills' component={Skills} />
    </Switch>

  )
}

export default Router

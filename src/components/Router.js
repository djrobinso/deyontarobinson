import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Intro from './intro_page';
import About from './about_me';
import Contact from './contact';
import Skills from './skills';


const Router = () => (

    <Switch>
      <Route exact path='/' component={Intro} />
      <Route path='/about_me' component={About} />
      <Route path='/skills' component={Skills}/>
      <Route path='/contact' component={Contact} />
    </Switch>

)
export default Router;

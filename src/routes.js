import React from 'react'
import Keeper from './components/Keeper'
import Best from './components/Best'
import {Switch, Route} from 'react-router-dom'

export default (
  <Switch>
    <Route exact path='/' component={Best} />
    <Route path='/TrashJokes' component={Keeper} />
  </Switch>
)
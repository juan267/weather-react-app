import React from 'react'
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router'

import Main from '../containers/Main'
import Home from '../components/Home'
import CityWeatherContainer from '../containers/CityWeatherContainer'
import DetailContainer from '../containers/DetailContainer'

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/weather/:city' component={CityWeatherContainer} />
      <Route path='/detail/:city' component={DetailContainer} />
    </Route>
  </Router>
)

export default routes

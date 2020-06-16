import React, { Component } from 'react'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import Todo from './pages/DisplayTask'

import store from './redux/store'

export default class App extends Component {
  render() {
    return (
  
        <Provider store={store}>
        <Router>
        <Switch>
          <Route path='/' exact component={Todo}/>
          </Switch>
        </Router>
        </Provider>
    
    )
  }
}
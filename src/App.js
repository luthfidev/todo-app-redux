import React, { Component } from 'react'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import Todo from './pages/Todo'

export default class App extends Component {
  render() {
    return (
  
        <Router>
          <Route path='/' exact component={Todo}/>
        </Router>
    
    )
  }
}

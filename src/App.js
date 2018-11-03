import React, { Component } from 'react'
import './App.css'

import  Home from './containers/Home'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Home} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App

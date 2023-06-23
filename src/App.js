import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {




  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route path="/">
              <News key="home" pageSize={8} country='in' category='general' />
            </Route>
            <Route path="/General">
              <News key="general" pageSize={8} country='in' category='general' />
            </Route>
            <Route path="/Buisness">
              <News key="business" pageSize={8} country='in' category='business' />
            </Route>
            <Route path="/Entertainment">
              <News key="entertainment" pageSize={8} country='in' category='entertainment' />
            </Route>
            <Route path="/Health">
              <News key="health" pageSize={8} country='in' category='health' />
            </Route>
            <Route path="/Science">
              <News key="science" pageSize={8} country='in' category='science' />
            </Route>
            <Route path="/Sports">
              <News key="sports" pageSize={8} country='in' category='sports' />
            </Route>
            <Route path="/Technology">
              <News key="technology" pageSize={8} country='in' category='technology' />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

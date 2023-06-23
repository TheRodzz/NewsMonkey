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
    // let apikey = 'e24022a4b4a6456dbdc8456a8f281615'
    let apikey = '321bfbd1baaf4dfb82534a010cd0f716'
    return (
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <News key="home" pageSize={8} country='in' category='general' apikey={apikey} title='Home'/>
            </Route>

            <Route exact path="/Buisness">
              <News key="business" pageSize={8} country='in' category='business' apikey={apikey} title='Business'/>
            </Route>
            <Route exact path="/Entertainment">
              <News key="entertainment" pageSize={8} country='in' category='entertainment' apikey={apikey} title='Entertainment'/>
            </Route>
            <Route exact path="/Health">
              <News key="health" pageSize={8} country='in' category='health' apikey={apikey} title='Health'/>
            </Route>
            <Route exact path="/Science">
              <News key="science" pageSize={8} country='in' category='science' apikey={apikey} title='Science'/>
            </Route>
            <Route exact path="/Sports">
              <News key="sports" pageSize={8} country='in' category='sports' apikey={apikey} title='Sports'/>
            </Route>
            <Route exact path="/Technology">
              <News key="technology" pageSize={8} country='in' category='technology' apikey={apikey} title='Technology'/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (newProgress) => {
    this.setState({ progress: newProgress })
  }

  render() {
    // let apikey = 'e24022a4b4a6456dbdc8456a8f281615'
    let apikey = process.env.REACT_APP_API_KEY;
    return (
      <div>
        <Router basename="/NewsWave">
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            
          />

          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress} key="home" pageSize={8} country='in' category='general' apikey={apikey} title='Home' />
            </Route>

            <Route exact path="/Buisness">
              <News setProgress={this.setProgress} key="business" pageSize={8} country='us' category='business' apikey={apikey} title='Business' />
            </Route>
            <Route exact path="/Entertainment">
              <News setProgress={this.setProgress} key="entertainment" pageSize={8} country='in' category='entertainment' apikey={apikey} title='Entertainment' />
            </Route>
            <Route exact path="/Health">
              <News setProgress={this.setProgress} key="health" pageSize={8} country='in' category='health' apikey={apikey} title='Health' />
            </Route>
            <Route exact path="/Science">
              <News setProgress={this.setProgress} key="science" pageSize={8} country='in' category='science' apikey={apikey} title='Science' />
            </Route>
            <Route exact path="/Sports">
              <News setProgress={this.setProgress} key="sports" pageSize={8} country='in' category='sports' apikey={apikey} title='Sports' />
            </Route>
            <Route exact path="/Technology">
              <News setProgress={this.setProgress} key="technology" pageSize={8} country='in' category='technology' apikey={apikey} title='Technology' />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

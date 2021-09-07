import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export class App extends Component {
  apiKey = "baca234f586742f7a6b029741a8132d6";
  render() {
    return (

      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News pageSize={6} apiKey={this.apiKey} key="general" category="general" />
            </Route>
            <Route exact path="/users">
              <News pageSize={6} apiKey={this.apiKey} key="sports" category="sports" />
            </Route>
            <Route exact path="/business">
              <News pageSize={6} apiKey={this.apiKey} key="business" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News pageSize={6} apiKey={this.apiKey} key="entertainment" category="entertainment" />
            </Route>
            <Route exact path="/general">
              <News pageSize={6} apiKey={this.apiKey} key="general" category="general" />
            </Route>
            <Route exact path="/health">
              <News pageSize={6} apiKey={this.apiKey} key="health" category="health" />
            </Route>
            <Route exact path="/sports">
              <News pageSize={6} apiKey={this.apiKey} key="sports" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News pageSize={6} apiKey={this.apiKey} key="technology" category="technology" />
            </Route>
            <Route exact path="/science">
              <News pageSize={6} apiKey={this.apiKey} key="science" category="science" />
            </Route>
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;



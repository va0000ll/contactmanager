import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

import './bootstrap.css';
import './App.css';
import { Provider } from './context';
import AddContact from './components/AddContact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import NotFound from './components/NotFound';
import EditContact from './components/EditContact';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

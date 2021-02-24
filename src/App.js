import React, { Component } from 'react';
import './assets/css/App.css';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Nuevo from './components/Nuevo.jsx';
import Editar from './components/Editar.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact render={props => (<Login {...props} />)}></Route>
            <Route path="/dashboard" exact render={props => (<Dashboard {...props} />)}></Route>
            <Route path="/nuevo" exact render={props => (<Nuevo {...props} />)}></Route>
            <Route path="/editar" exact render={props => (<Editar {...props} />)}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
};

  export default App;
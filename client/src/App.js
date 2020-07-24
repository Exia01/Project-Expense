import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Generate from './Generate/Generate';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Users from './components/auth/Users';
// import allUsers from './components/auth/allUsers';
import FileUpload from './components/FileUpload';
import Dashboard from './components/Dashboard/Dashboard';
import GeneratePlayground from './Generate/GeneratePlayground';

function App() {
  // BrowserRouter enables links
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={FileUpload} />
        <section className="container">
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/read" component={Generate} />
            <Route exact path="/read/test" component={GeneratePlayground} />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Generate from './Generate/Generate';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FileUpload from './components/FileUpload';

function App() {
  // BrowserRouter enables links
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path='/' component={ FileUpload }/>
        <section className="container">
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </section>

      </div>
    </BrowserRouter>
  );
}

export default App;

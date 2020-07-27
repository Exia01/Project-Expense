import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Generate from './Generate/Generate';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Users from './components/Auth/Users';
// import allUsers from './components/auth/allUsers';
import FileUpload from './components/FileUpload';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './containers/Navbar.js/Navbar';

import UserContextProvider from './contexts/user.context';

function App() {
  // BrowserRouter enables links
  return (
    <BrowserRouter>
      <div className='App'>
        {/* <Navbar/> */}

        <Route exact path='/' component={FileUpload} />
        <main className='container'>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/login' component={Login} />
            <Route
              exact
              path='/register'
              render={(props) => (
                <UserContextProvider>
                  <Register {...props} />
                </UserContextProvider>
              )}
            />
            <Route exact path='/users' component={Users} />
            {/* <Route exact path='/all' component={allUsers}/> */}
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

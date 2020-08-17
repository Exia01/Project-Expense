import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Generate from './Generate/Generate';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Users from './components/Auth/Users';
// import allUsers from './components/auth/allUsers';
import FileUpload from './components/FileUpload';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar.js/Navbar';

import { UserContext } from './contexts/user.context';
import { Layout } from 'antd';
import Footer from './components/Footer/Footer';
import { ThemeContext } from './contexts/theme.context';
import { ThemeProvider } from 'react-jss';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ isAuthenticated, redirectPath, children, ...rest }) {
  console.log(isAuthenticated, redirectPath, children);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectPath,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  const theme = useContext(ThemeContext);
  const currentTheme = theme.currentTheme;
  // BrowserRouter enables links
  console.log(theme);
  console.log(currentTheme);
  console.log(theme[currentTheme]);
  const { isAuthenticated } = useContext(UserContext);
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <BrowserRouter>
        <Layout className='App'>
          {/* <Navbar/> */}
          {/* <main className='container'> */}
          <Navbar />
          <Switch>
            <Route exact path='/' component={FileUpload} />
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              path='/dashboard'
              redirectPath='/login'
            >
              <Dashboard />
            </PrivateRoute>
            <Route exact path='/dashboard' render={Dashboard} />
            <Route exact path='/login' component={Login} />
            <Route
              exact
              path='/register'
              render={(props) => <Register {...props} />}
            />
            <Route exact path='/users' component={Users} />
            {/* <Route exact path='/all' component={allUsers}/> */}
          </Switch>
          <Footer />
          {/* </main> */}
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

// Guarded Routes: https://reactrouter.com/web/example/auth-workflow
// https://stackoverflow.com/questions/43164554/how-to-implement-authenticated-routes-in-react-router-4
// Another Example:https://ui.dev/react-router-v4-protected-routes-authentication/

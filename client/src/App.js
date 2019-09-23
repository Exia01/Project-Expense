import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Generate from './Generate/Generate';
import FileUpload from './components/FileUpload';
import Nav from './components/Navigation';

function App() {
  // BrowserRouter enables links
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <FileUpload />

        <div>
          <Generate />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

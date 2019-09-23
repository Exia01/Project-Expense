import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Generate from './Generate/Generate';
import FileUpload from './components/FileUpload';

function App() {
  // BrowserRouter enables links
  return (
    <BrowserRouter>
      <div className="App">
        <FileUpload />

        <div>
          <Generate />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

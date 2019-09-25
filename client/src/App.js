import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Generate from './Generate/Generate';
import FileUpload from './components/FileUpload';
import Nav from './components/Navigation';
import FileClassUpload from './components/FileClassUpload';

// function App() {
//   // BrowserRouter enables links
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Nav />
//         <FileUpload />

//         <div>
//           <Generate />
//         </div>

//       </div>
//     </BrowserRouter>
//   );
// }



class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <FileClassUpload />
        {/* <FileUpload />  */}

      </div>
    );
  }
}

export default App;

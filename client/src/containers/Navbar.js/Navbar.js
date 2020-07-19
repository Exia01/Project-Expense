import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <header className='Navbar'>
        <div className='Logo'>
          <h1>Logo</h1>
        </div>
        <div className='Content'>
          <h1>Item1</h1>
          <h1>Item2</h1>
        </div>
      </header>
    );
  }
}

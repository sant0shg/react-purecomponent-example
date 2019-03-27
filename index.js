import React, { Component } from 'react';
import { render } from 'react-dom';
import Demo1 from './Demo1';
import './style.css';

class App extends Component {

  render(){
    return(
      <div>
        <Demo1/>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));

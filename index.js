import React, { Component } from 'react';
import { render } from 'react-dom';
import NumberComponent from './NumberComponent';
import NumberPureComponent from './NumberPureComponent';
import './style.css';

class App extends Component {
  state = {
    number: 1
  }
  componentDidMount(){
    setTimeout(()=>{
      setInterval(()=>{
        this.setState({
          number: 1
        })
      }, 1000)
    },5000)
  }
  render(){
    const { number } = this.state;
    return(
      <div className="app">
        <NumberComponent number={number}/>
        <NumberPureComponent number={number}/>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));

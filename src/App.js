import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) { 
    super(props); 
    this.state =  
    isOn = false
  }

  buttonClick = () => {
    this.setState({
      isOn = true
    })
  }


  render(){
    console.log(this.state.isOn);
    return (
      <div className="App">
        <p>Hello there, This is my React App. Trying to use Travis CI for this project</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus esse placeat atque veniam dolorem voluptatem, magnam, laborum aperiam nostrum praesentium veritatis accusamus id quod cum! Minima perferendis omnis ipsam ea?</p>
        <button onClick={this.buttonClick}></button>
      </div>
    );
  }
}

export default App;

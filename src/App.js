import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      text: 'This text will be changing'
    };
  }

  onClickButton = () => {
    this.setState({text: "Button is Clicked!"});
  }

  render() {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="App-btn" onClick={this.onClickButton}>CLICK</button>
        <p>{this.state.text}</p>
      </header>
    </div>
  }

}

export default App;

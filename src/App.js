import React from 'react';
import './App.css';
import GetData from './GetData.js';
// import Card from './Card.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    GetData()
  }

  render() {
    return (
      <div>
        <h1>Is this working, now?</h1>
      </div>
    )
  }
}

export default App;

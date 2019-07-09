import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <h1>Is this working, now?</h1>
    )
  }
  componentDidMount() {
    console.log('working')
  }
}

export default App;

import React from 'react';
import './App.css';

const urls = [
  'https://swapi.co/api/vehicles'
]

const getData = async function() {
  try {
    const [ name, model, manufacturer ] = await Promise.all(urls.map(url =>
      fetch(url, {mode: 'no-cors'}).then(resp => resp.json())
      ))
      console.log('name', name)
      console.log('model', model)
      console.log('manufacturer', manufacturer)
  } catch (err) {
    console.log('oops', err)
  };
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    console.log('working')
    getData()
  }

  render() {
    return (
    <h1>Is this working, now?</h1>
    )
  }
}

export default App;

import React from 'react';
import './App.css';

const urls = [
  "https://swapi.co/api/vehicles/?format=json"
]

let currentData = {}

const getData = async () => {
  try {
    let response = await fetch(urls[0]);
    response = await response.json();
    let i = 0;
    let apiResponse = {}
    response.results.forEach(vehicles => {
      let vehicle = {}
      vehicle["name"] = response.results[i].name
      vehicle["model"] = response.results[i].model
      vehicle["manufacturer"] = response.results[i].manufacturer
      apiResponse[i] = vehicle
      i++
    })
    currentData = apiResponse
  } catch (err) {
    console.log('error', err)
  } finally {
    console.log(currentData)
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    // console.log('working')
    getData()
  }

  render() {
    return (
    <h1>Is this working, now?</h1>
    )
  }
}

export default App;

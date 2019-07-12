import React from 'react';
import './App.css';

const urls = [
	// "https://jsonplaceholder.typicode.com/users",
	// "https://jsonplaceholder.typicode.com/posts",
  // "https://jsonplaceholder.typicode.com/albums",
  "https://swapi.co/api/vehicles/?format=json"
]

// example from ZTM
// const getData1 = async function() {
// 	try {
// 		const [ users, posts, albums ] = await Promise.all(urls.map(url => 
// 			fetch(url).then(resp => resp.json())
// 		))
// 		console.log('users', users)
// 		console.log('posts', posts)
// 		console.log('albums', albums)
// 	} catch (err) {
// 		console.log('oofda', err)
// 	}
// }

// hits api, but logs vars as undefined
const getData = async () => {
  try {
    const [ name, model, manufacturer ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
      ))
    console.log('name', name)
    console.log('model', model)
    console.log('manufacturer', manufacturer)
  } catch (err) {
    console.log('oofda', err)
  } finally {
    console.log('nobody died')
  }
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

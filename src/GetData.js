const urls = [
    "https://swapi.co/api/vehicles/?format=json"
  ]
  
const GetData = async () => {
  let currentData = {}
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

export default GetData
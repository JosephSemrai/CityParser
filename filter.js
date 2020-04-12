const fs = require('fs');

// Load data
const jsonData = require('./cities.json')
const oldJsonData = require('./oldCities.json')

const cityNames = []

// Creates array of city names
oldJsonData.forEach(location => cityNames.push(location.city))


// Final location array
let locations = []

jsonData.forEach(location => {
  if (cityNames.includes(location.city)) {
    const locationObject = {
      city: location.city,
      state: location.state_name,
      county: location.county_name,
      density: location.density
    }
    locations.push(locationObject)
  }
})

console.log(`Created locations file with ${locations.length} cities`)

// Export to file
const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

storeData(locations, './output.json')
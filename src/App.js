import { useState } from 'react';

import countryData from './countries.json'
import stateData from './states.json'
import cityData from './cities.json'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'



function App() {

  const [countries, setCountries] = useState(countryData)
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])

  const stateHandler = (e) => {
    const countryId = e.target.value;
    const fliteredStates = stateData.filter(e => e.country_id == countryId )
    setStates(fliteredStates);
  }
  const cityHandler = (e) => {
    const stateId = e.target.value;
    const filteredCities = cityData.filter(e => e.state_id == stateId )
    setCities(filteredCities)
  }
  const commonFun = () => {

  }


  return <section className="mainSection p-5 d-flex justify-content-center">
    <div className="fieldContainer">
      <div className="row">
        <div className="col-4">
          <select className="form-select" onChange={(e) => stateHandler(e)}>
            <option defaultValue>Select Country</option>
            { countries.map(country => <option value={country.id} key={country.id}>{country.name}</option>) }
          </select>
        </div>        
        <div className="col-4">
          <select className="form-select" onClick={(e) => cityHandler(e)}>
            <option defaultValue>Select Country</option>
            { states.map(satate => <option value={satate.id} key={satate.id}>{satate.name}</option> )}
          </select>
        </div>
        <div className="col-4">
          <select className="form-select">
            <option defaultValue>Select Country</option>
            { cities.map(city => <option id={city.id} key={city.id}>{city.name}</option> )}
          </select>
        </div>
      </div>
    </div>
  </section>
}

export default App;

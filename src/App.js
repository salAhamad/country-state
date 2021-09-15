import { useState } from 'react';

import countryData from './countries.json'
import stateData from './states.json'
import cityData from './cities.json'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'



function App() {

  const [countries, setCountries] = useState(countryData)
  const [states, setStates] = useState(stateData)
  const [cities, setCities] = useState(cityData)

  const stateHandler = (e) => {
    const countryId = e.target.value;
    const fliteredStates = stateData.filter((e) => e.country_id === countryId )
    setStates(fliteredStates);
  }
  const cityHandler = (e) => {
    const stateId = e.target.id;
    console.log(stateId);
    const filteredCities = cityData.filter(e => e.state_id === stateId )
    console.log(filteredCities);
    // setCities(filteredCities)
  }


  return <section className="mainSection p-5 d-flex justify-content-center">
    <div className="fieldContainer">
      <div className="row">
        <div className="col-4">

          <div className="itemListContainer">
            <div className="slectedItem">
              <span className="text">Text</span>
              <i className="fas fa-angle-down"></i>
            </div>
            <ul className="itemList">
              { countries.map(country => <li value={country.id} key={country.id} onClick={(e) => stateHandler(e)}>{country.name}</li>) }
            </ul>
          </div>
        </div>        
        <div className="col-4">
          <div className="itemListContainer">
              <div className="slectedItem">
                <span className="text">Text</span>
                <i className="fas fa-angle-down"></i>
              </div>
              <ul className="itemList">
                { states.map(country => <li id={country.id} key={country.id} onClick={(e) => cityHandler(e)}>{country.name}</li> )}
              </ul>
            </div>
        </div>
        <div className="col-4">
          <div className="itemListContainer">
              <div className="slectedItem">
                <span className="text">Text</span>
                <i className="fas fa-angle-down"></i>
              </div>
              <ul className="itemList">
                { cities.map(city => <li id={city.id} key={city.id}>{city.name}</li> )}
              </ul>
            </div>
        </div>        
      </div>
    </div>
  </section>
}

export default App;

import { useState } from 'react';

import countryData from './countries.json'
import stateData from './states.json'
import cityData from './cities.json'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'



function App() {

  const [countries, setCountries] = useState(countryData)
  const [states, setStates] = useState(stateData)
  const [cities, Cities] = useState(cityData)

  const stateHandler = (e) => {
    console.log(e.target.value);
  }
  const selectChangeData = (e) => {
    const countryId = e.target.value;
    const dummyArray = new Array;
    for(let i = 0; i < states.length; i++) {
      if(states[i].country_id == countryId ) {
        dummyArray.push(states[i]);
      }
    }
    setStates(dummyArray);
    console.log(states);
  }


  return <section className="mainSection p-5 d-flex justify-content-center">
    <div className="fieldContainer">
      <div className="row">
        <div className="col-4">
          <select className="form-select" aria-label="Default select example" onChange={(e) => selectChangeData(e)}>
            <option>Select Country</option>
            { countries.map((country, index) => {
              return <option value={country.id} key={country.id} onClick={(e) => stateHandler(e)}>
                {country.name}
              </option>
            })}
          </select>
        </div>        
        <div className="col-4">
          <select className="form-select" aria-label="Default select example">
            <option>Select States</option>
            {states.map((state, index) => <option value={state.state_code} key={state.id}>{state.name}</option> )}
          </select>
        </div>        
        <div className="col-4">
          <select className="form-select" aria-label="Default select example">
            <option>Open this select menu</option>
            <option defaultValue="1">One</option>
            <option defaultValue="2">Two</option>
            <option defaultValue="3">Three</option>
          </select>
        </div>        
      </div>
    </div>
  </section>
}

export default App;

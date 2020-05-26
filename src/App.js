import React, { useState, useEffect } from 'react';
import axios from "axios";
import Countries from "./components/Countries";


const App = () => {

  const [countries, setCountries] = useState([])

  const [filterTerm, setFilterTerm] = useState("")
  const [filterResult, setFilterResult] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])




  const handleFilter = (event) => {
    setFilterTerm(event.target.value);
  }

  React.useEffect(() => {
    const results = countries.filter(country =>
      country.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
    setFilterResult(results);
  }, [filterTerm]); // eslint-disable-line react-hooks/exhaustive-deps





  return (
    <div>
      <h5>find countries: <input onChange={handleFilter} value={filterTerm} /></h5>
      <Countries countries={filterResult.slice(0, 10)} />
    </div>
  );
}

export default App;


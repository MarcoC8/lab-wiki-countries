import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

import countriesData from './countries.json'

import { useState } from 'react';


function App() {

  const [countries, setCountries] = useState(countriesData);


  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className="row">
        <CountriesList coutnries={countries}/>
        <Routes>
          <Route path="/:id" element={<CountryDetails countries={countries} />}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

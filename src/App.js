import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import './App.css'




function App() {

  const API_KEY = '2c91d32ff9e71b61c08ac1e8d00ed24a';

  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('brussels');

  useEffect( () => {
    getWeather();
  // eslint-disable-next-line
  }, [query]);



  const getWeather = async () => {
    const response = await fetch(
      // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`
    );
    const data = await response.json();
    setWeather(data.coord)
    console.log(data.coord);
    // return data;
  };

  // getWeather().then(data => console.log(data));

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <>
      <Navbar />
      <form className='city-field'>
        <input className="search-bar" type="text" value={search} placeholder='enter a city'onChange={updateSearch} />
        <button className="search-button" type="submit">search</button>
      </form>
      <Card />
    </>
  );
}

export default App;

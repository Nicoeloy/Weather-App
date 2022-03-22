import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";



function App() {

  const API_KEY = '2c91d32ff9e71b61c08ac1e8d00ed24a';

  const [weather, setWeather] = useState([]);


  const getWeather = async () => {
    const response = await fetch(
      // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`
    );
    const data = await response.json();
    // setWeather(data.hits)
    // console.log(data.hits);
    return data;
  };

  getWeather().then(data => console.log(data));


  return (
    <>
      <Navbar />
      <Card />
    </>
  );
}

export default App;

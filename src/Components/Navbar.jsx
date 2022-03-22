import React from 'react'
import logo from '../assets/logo/weather-news.png'
import '../App.css'

function Navbar() {
  return (
    <div className='navbar-container'>
      <img src={logo} alt="logo" className='logo'/>
      <h1>Weather App</h1>
    </div>
  )
}

export default Navbar
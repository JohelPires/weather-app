import { useEffect, useState } from 'react'
import './App.css'

// case 'drizzle':
//   addIcon(desc)
//   break;
// case 'clouds':
//   addIcon(desc)
//   break;
// case 'rain':
//   addIcon(desc)
//   break;
// case 'snow':
//   addIcon(desc)
//   break;
// case 'clear':
//   addIcon(desc)
//   break;
// case 'thunderstom':
//   addIcon(desc)
//   break;
// default:

function App() {
  const [weatherData, setWeatherData] = useState({})
  const url =
    'https://weather-proxy.freecodecamp.rocks/api/current?lat=-15.6042883&lon=-56.0584591'
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((actualData) => {
        setWeatherData(actualData)
      })
      .catch((err) => console.log(err.message))
      .finally(() => console.log('data loaded'))
  }, [])

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }

  function showPosition(position) {
    console.log(
      'Latitude: ' +
        position.coords.latitude +
        '<br>Longitude: ' +
        position.coords.longitude
    )
  }
  getLocation()
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          {weatherData.name}, {weatherData.sys.country}
        </h1>
        <h1>{weatherData.weather[0].main}</h1>
        <h1>Temperatura: {Math.round(weatherData.main.temp)} ºC</h1>
        <h1>Sensação térmica: {Math.round(weatherData.main.feels_like)} ºC</h1>
        <h1>Mínima: {Math.round(weatherData.main.temp_min)} ºC</h1>
        <h1>Máxima: {Math.round(weatherData.main.temp_max)} ºC</h1>
        <h1>
          humidade relativa do ar: {Math.round(weatherData.main.humidity)}
        </h1>
        <img src={weatherData.weather[0].icon} alt='' srcset='' />
      </header>
    </div>
  )
}

export default App

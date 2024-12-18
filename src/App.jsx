import './App.css'
import Pressure from './assets/Pressure.png'
import humidity from './assets/humidity.png'
import visibility from './assets/visibility.png'
import windy from './assets/windy.png'
import { useEffect, useState } from 'react'
import callApi from './callApi'
function App() {
  const [searchKey, setSearchKey] = useState('Idukki');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [todayDate, setTodayDate] = useState('')
  const [weatherIco, setWeatherIco] = useState('')
  console.log(searchKey);
  console.log(weatherData);


  const getWeather = async () => {
    try {
      if (!searchKey) {
        alert('Please enter a city name!');
        return;
      }
      const data = await callApi(searchKey);
      console.log(data);

      setWeatherData(data);
      setError(null); // Clear any previous errors
      const today = new Date();
      setTodayDate(formatDate(today));// set date format
      setWeatherIco(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

    } catch (err) {
      setError(err.message); // Set the error message
      setWeatherData(null); // Clear weather data in case of error
    }
  };

  function formatDate(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dayName = daysOfWeek[date.getDay()]; // Get the day of the week
    const day = date.getDate();               // Get the day of the month
    const month = months[date.getMonth()];    // Get the month
    const year = date.getFullYear();          // Get the year

    return `${dayName}, ${day} ${month} ${year}`;
  }

    useEffect(()=>{
      getWeather(searchKey)
    },[])



  return (
    <>
      <div className="container">
        <div className="searchBox">
          <input className='searchBar' onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder='Search' />
          <button onClick={getWeather} className='searchBtn'><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        {error &&
          <div className="errorMsg">
            <h1><i class="fa-solid fa-triangle-exclamation"></i></h1>
            <h2>{error}</h2>
          </div>
        }
        {weatherData &&
          <div className="currWeather">
          <div className="LocAndDate">
            <div className="date">
              <p>{todayDate}</p>
            </div>
            <div className="loc">
              <p>{weatherData?.name},{weatherData?.sys?.country}</p>
            </div>

          </div>
          <div className="weather">
            <div className="icoWeather">
              <img src={weatherIco} alt="" />
            </div>
            <div className="description">
              <p>{weatherData?.weather[0]?.description}</p>
            </div>
          </div>
          <div className="currTemp">
            <h1>{Math.round(weatherData?.main?.temp)}</h1>
            <p>°C</p>
          </div>
        </div>}
        {weatherData &&
        <div className="weatherInfo">
          <div className="card">
            <div className='cardTitle'>
              <p>Pressure</p>
              <img src={Pressure} alt="" />
            </div>
            <span className='cardValue'> {weatherData?.main?.pressure} hPa</span>
          </div>
          <div className="card">
            <div className='cardTitle'>
              <p>humidity</p>
              <img src={humidity} alt="" />
            </div>
            <span className='cardValue'>{weatherData?.main?.humidity} %</span>
          </div>
          <div className="card">
            <div className='cardTitle'>
              <p>visibility</p>
              <img src={visibility} alt="" />
            </div>
            <span className='cardValue'>{weatherData?.visibility / 1000} km</span>
          </div>
          <div className="card">
            <div className='cardTitle'>
              <p>wind speed</p>
              <img src={windy} alt="" />
            </div>
            <span className='cardValue'>{weatherData?.wind?.speed} m/s</span>
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default App

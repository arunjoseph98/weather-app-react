import './App.css'
import TestIoc from './assets/test.png'
import Pressure  from './assets/Pressure.png'
import humidity  from './assets/humidity.png'
import visibility  from './assets/visibility.png'
import windy  from './assets/windy.png'
function App() {
  

  return (
    <>
      <div className="container">
        <div className="searchBox">
          <input className='searchBar' type="text" placeholder='Search'/>
          <button className='searchBtn'><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="currWeather">
          <div className="LocAndDate">
          <div className="date">
              <p>Tuesday, 17 Dec 2024</p>
            </div>
            <div className="loc">
              <p>Koch,IN</p>
            </div>
            
          </div>
          <div className="weather">
            <div className="icoWeather">
              <img src={TestIoc} alt="" />
            </div>
            <div className="description">
              <p>Cloudy</p>
            </div>
          </div>
          <div className="currTemp">
            <h1>26</h1>
            <p>°C</p>
          </div>
        </div>
        <div className="weatherInfo">
          <div className="card">
            <div className='cardTitle'>
              <p>Pressure</p>
              <img src={Pressure} alt="" />
            </div>
            <span className='cardValue'>95%</span>
          </div>
          <div className="card">
            <div className='cardTitle'>
              <p>humidity</p>
              <img src={humidity} alt="" />
            </div>
            <span className='cardValue'>95%</span>
          </div>
          <div className="card">
            <div className='cardTitle'>
              <p>visibility</p>
              <img src={visibility} alt="" />
            </div>
            <span className='cardValue'>95 km</span>
          </div>
          <div className="card">
            <div className='cardTitle'>
              <p>wind speed</p>
              <img src={windy} alt="" />
            </div>
            <span className='cardValue'>5 km/h</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import Forecast from './components/Forecast';

function App() {
  const [searchVal, setSearchVal]= useState('')
  const [lon, setLon] =useState('')
  const [lat, setLat] =useState('')
  const [weatherData, setWeatherData]= useState({
weather:[{id:'', description: '', icon:''}],
coord:{lon:'', lat:''},
name:'',
main:{temp:''}
  })
const fetchData=(url)=>{
  axios.get(url).then((res)=>
  setWeatherData({
    weather: res.data.weather,
    coord: res.data.coord,
    name: res.data.name,
    main: res.data.main  
  }))
}
 
  useEffect(()=>{
    if(searchVal!==''){
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=107a420b6f4b7dd8c2243eb7a310e6fe`
      fetchData(url)
    } else {
      const api='http://api.openweathermap.org/data/2.5/weather?q=bishkek&appid=107a420b6f4b7dd8c2243eb7a310e6fe'
      fetchData(api)
    }
    setLon(weatherData.coord.lon)
    setLat(weatherData.coord.lat)
  },[searchVal])

const handleChange=(e)=>{
setSearchVal(e.target.value)
}

console.log(lon,'lon',lat, 'lat')
const convertCtoF=(temp,type)=>{
  return type==='fahrenheit'   ? Math.floor(((temp - 273.15) * 9) / 5 + 32)
  : Math.floor(temp - 273.15);
}
  return (
    <main className="App">

      <input type='text' onChange={handleChange} placeholder='Enter a city...'/>
      <section>
        <div>
          <i className={`wi wi-owm-${weatherData.weather[0].id} display-1`}></i>
        </div>
        <div>
          <p>Today</p>
          <h1>{weatherData.name}</h1>
          <p>Temperature: {convertCtoF(weatherData.main.temp)}C</p>
          <p>{weatherData.weather.description}</p>
        </div>
        <Forecast weatherData={weatherData}/>
      </section>
    </main>
  );
}

export default App;

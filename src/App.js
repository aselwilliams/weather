import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [searchVal, setSearchVal]= useState('')
  const [weatherData, setWeatherData]= useState({
weather:[{id:'', description: '', icon:''}],
coord:{lon:'', lat:''},
name:'',
main:{temp:''}
  })

 
  useEffect(()=>{
    if(searchVal!==''){
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=107a420b6f4b7dd8c2243eb7a310e6fe`
      axios.get(url).then((res)=>
      setWeatherData({
        weather: res.data.weather,
        coord: res.data.coord,
        name: res.data.name,
        main: res.data.main  
      }))
    }
  },[searchVal])
const handleChange=(e)=>{
setSearchVal(e.target.value)
}

console.log(weatherData)
  return (
    <main className="App">

      <input type='text' onChange={handleChange} placeholder='Enter a city...'/>
      <section>
        <div>
          <i className={`wi wi-owm-${weatherData.weather[0].id} display-1`}></i>
        </div>
        <div>
          <p>Today</p>
          <h1>New York</h1>
          <p>Temperature: 17 C</p>
          <p>clear sky</p>
        </div>
        <article>
          <h5>Wednesday</h5>
          <div><i className={`wi wi-owm-${weatherData.weather[0].id} display-1`}></i></div>
          <p>21C</p>
        </article>
      
      </section>
    </main>
  );
}

export default App;

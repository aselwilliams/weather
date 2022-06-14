import {useState, useEffect} from 'react';


function Forecast(weatherData) {

  return (
      <>
      
    <article>
    <h5>Wednesday</h5>
    {/* <div><i className={`wi wi-owm-${weatherData.weather[0].id} display-1`}></i></div> */}
    <p>21C</p>
  </article>
  </>
  )
}

export default Forecast
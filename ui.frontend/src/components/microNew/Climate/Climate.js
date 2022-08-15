import React, { useState, useEffect} from "react";
import { ClimateSection, NameCity, TemperatureInformation, CurrentTemperature  } from './styles'
import logoTemp from '../../../assets/Ripple-1s-200px.gif'
import axios from 'axios';

const ClimateFull = () => {
const [location, setLocation] = useState(false);
const [weather, setWeather] = useState(false);

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })

    const getWeather = async (lat, long) => {
    const res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: 'ec465b702e56980fda09659eebeced6b',
        lang: 'pt',
        units: 'metric'
      }
      });
      setWeather(res.data);
    }
  }, [])
  
  var imageClimate = '';
  var climate = '';
  var nameCity = '';

  const  verificationLocation = () => {

    if(location == false) {
      console.log(' Você precisa habilitar a localização no browser o/')
      imageClimate = logoTemp
      nameCity = 'Habilite sua localização'
    } else if(weather == false) {
      console.log('Carregando o clima...')
      imageClimate = `http:// https://openweathermap.org/img/wn/11d@2x.png`;

    }else if (location == true) {
      console.log('Carregado ...')
      console.log({imageClimate})
      imageClimate = `http://openweathermap.org/img/wn/${weather['weather'][0]['icon']}@2x.png`;
      climate = Math.round(weather['main']['temp'])+ '°';
      nameCity = weather['name'];
    }
  } 
  verificationLocation()

  return (

    <ClimateSection>
        <NameCity>
            {nameCity} 
        </NameCity>
        <TemperatureInformation>
            <img class="imgTempo" id="imgTempo" src={imageClimate}/>
            <CurrentTemperature> 
            {climate}
            </CurrentTemperature>
        </TemperatureInformation>
    </ClimateSection>
  );
}  
export default ClimateFull;
import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {
		CLOUDY,
		SUN,
		CLOUD,
		RAIN, 
		SNOW,
		WINDY,
		THUNDER,
		DRIZZLE
} from './../../../constant/weathers';

const stateToIconName = (weatherState) =>{

	switch (weatherState) {
		case CLOUD:
			return 'cloud';
		case CLOUDY:
			return 'cloudy';
		case SUN:
			return 'day-sunny';
		case RAIN:
			return 'rain';
		case SNOW:
			return 'snow';
		case WINDY:
			return 'windy';
		case THUNDER:
			return 'day-thunderstorm';
		case DRIZZLE:
			return 'day-showers';
		default:
			return 'day-sunny';
	}

}
const getWeatherIcon = (weatherState) => {
	return	(
		 
		 <WeatherIcons name={stateToIconName(weatherState)}  size="3x" />

		)
}


const WeatherTemperature = ({temperature, weatherState}) => (

	<div>
	
	{getWeatherIcon(weatherState)}		
	  <span>{`${temperature} °C`}</span>


	</div> 
	)

WeatherTemperature.propTypes ={
	temperature:PropTypes.number.isRequired,
	weatherState:PropTypes.string.isRequired,
}

export default  WeatherTemperature ;
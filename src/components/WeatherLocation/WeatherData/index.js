import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

import  './style.css';


const WeatherData = ({data}) => {
	
	const {temperature, weatherState, humidity, wind} = data;
	console.log(data)

	return (

	<div >
	    <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
		<WeatherExtraInfo  humidity={humidity} wind={wind} />
	</div>
	)
};

WeatherData.propTypes ={
	data: PropTypes.shape({
		temperature:PropTypes.number.isRequired,
		weatherState:PropTypes.string.isRequired,
		humidity:PropTypes.number.isRequired,
		wind:PropTypes.string.isRequired,
	}),
};


export default WeatherData;
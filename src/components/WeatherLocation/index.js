import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './style.css'
// import {
// 		CLOUDY,
// 		SUN,
// 		CLOUD,
// 		RAIN, 
// 		SNOW,
// 		WINDY,
// } from './../../constant/weathers';

// const data1 = {
// 	temperature:30,
// 	weatherState: WINDY,
// 	humidity: 80,
// 	wind: 200,
// }

const api_key = '1ebfb4239e179b98889488b80499f91c';
// const location = 'santiago,scl';
const url = 'http://api.openweathermap.org/data/2.5/weather'
// const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`


class WeatherLocation extends Component{
	constructor ({ city }){
		super();
		this.state = { 
			city,
			data: null
		}
		console.log('constructor');
		
	}
	// getWeatherState = (weather) =>{
	// 	return SUN;

	// }

	// getData = (weather_data) =>{
	// 	const weatherState = this.getWeatherState(this.weather)
	// 	const {humidity, temp } = weather_data.main;
	// 	const {speed} = weather_data.wind;

	// 	const data ={
	// 		humidity,
	// 		temperature: temp,
	// 		weatherState,
	// 		wind: `${speed} m/s`,

	// 	}
	// 	return data;
	// }

	componentWillMount() {
		const {city} = this.state
		const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;

		
		fetch(api_weather).then( data =>{
			// console.log(data)
			return data.json();
		}).then(weather_data =>{
			const data = transformWeather(weather_data)

			this.setState ({ data })
			// console.log(weather_data);		 
		})
	// console.log('actualizado');
	}


	// componentWillMount() {
	// 	this.handleUpdateClick();
	// 	// console.log('componentWillMount');
	// }

	// componentDidMount() {
	// 	console.log('componentDidMount');
	// }

	// componentWillUpdate() {
	// 	console.log('componentWillUpdate');
		
	// }

	render = () => {
		const { onWeatherLocationClick } = this.props;
		const {city, data} = this.state;
    return (
     <div className='weatherDataCont weatherLocations' onClick={onWeatherLocationClick}>
    	<Location city = {city}/>
	   {data ? <WeatherData data = {data} /> : <CircularProgress size={60} thickness={7}/>}
       
	</div>
    );
  }

}
WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired,
	onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;
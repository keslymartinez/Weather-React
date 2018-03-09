import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
	<div>
			<p>{`Humidity: ${humidity}%`}</p>
			<p>{` Wind: ${wind}`}</p>
	</div>
	)



export default WeatherExtraInfo;
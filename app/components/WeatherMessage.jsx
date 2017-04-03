var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
		<form>
			<h3 className="text-center">It is {temp} in {location}</h3>
		</form>
	);
}

module.exports = WeatherMessage;

var React = require('react');

var WeatherMessage = ({temp,location}) => {
  return (
    <form>
      <p>It is {temp} in {location}</p>
    </form>
  );
}

module.exports = WeatherMessage;

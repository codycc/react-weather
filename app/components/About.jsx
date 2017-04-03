var React = require('react');


var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>This is a weather application built on React.
			I have built this for the complete react web developer course</p>
			<p>
				Here are some of the tools i've used:
			</p>
			<ul>
				<li><a href="https://facebook.github.io/react">React</a> - This is the JS framwork used</li>
				<li><a href="http://openweathermap.org">Open Weather Map</a>- Api Used </li>
			</ul>
		</div>
	)
};

module.exports = About;

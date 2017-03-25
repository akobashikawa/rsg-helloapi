import React, { Component } from 'react';

class About extends Component {

	render() {
		console.log(this.props.location.state);
		return (
			<div>
				<h2>About</h2>
				Message: {this.props.location.state.message}
			</div>
		);
	}
};

export default About;
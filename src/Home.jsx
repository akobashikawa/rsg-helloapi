import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: ''
		};

		this.inputHandler = this.inputHandler.bind(this);
		this.sendHandler = this.sendHandler.bind(this);
	}

	inputHandler(e) {
		this.setState({
			message: e.target.value
		});
	}

	sendHandler() {
		const message = this.state.message;
		console.log('Goto About', message);
		this.props.history.push({
		  pathname: '/about',
		  state: {
		  	message: message
		  }
		});
	}

	render() {
		return (
			<div>
				<h2>Home</h2>
				<input type="text"
					placeholder="message"
					value={this.state.message}
					onChange={this.inputHandler}
				/>
				<button onClick={this.sendHandler}>Send</button>
			</div>
		);
	}
};

export default Home;
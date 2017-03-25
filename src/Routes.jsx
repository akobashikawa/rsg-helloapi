import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Routes = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home}/>

			<header>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</header>

			<main>
				<Route path="/about" component={About}/>
				<Route path="/contact" component={Contact}/>
			</main>

			<footer>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</footer>
		</div>
	</Router>
);

export default Routes;
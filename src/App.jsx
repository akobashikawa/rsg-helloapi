import React, { Component } from 'react';
import './App.css';

const Generos = (props) => (
	<div>
		<h2>Géneros</h2>
		<ul>
			{props.artist.genres.map((item, i) => {
				return (
					<li key={i}>{item}</li>
				);
			})}
		</ul>
	</div>
);

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			artist: null,
			q: ''
		};

		this.getArtist = this.getArtist.bind(this);
	}

	getArtist() {
		let self = this;

		fetch(`https://api.spotify.com/v1/search?q=${this.state.q}&type=artist&limit=1`, {
			method: 'GET'
		}).then(res => res.json())
		.then(json => {
			console.log('json:', json.artists.items[0]);
			self.setState({
				artist: json.artists.items[0]
			});
		});
	}

	render() {
		console.log('state', this.state);
		const artist = this.state.artist;
		return (
			<div>
				<h1>Spotify API</h1>
				<input type="text"
					placeholder="Nombre de artista"
					onChange={(e) => this.setState({q: e.target.value})}/>
				<button onClick={this.getArtist}>Buscar</button>
				<hr />
				{artist == null ? 
					(
						<div>Haga su búsqueda...</div>
					):
					(
						<div>
							<h1>{artist.name}</h1>
							<div><img src={artist.images[0].url} alt="foto" className="foto"/></div>
							<Generos artist={artist} />
						</div>
					)
				}
			</div>
		);
	}
}
import { useState } from 'react';
import { bg1, bg2, bg3, bg4 } from './assets/images/';
import phrases from './phrases.json';
import './App.css';

const images = [bg1, bg2, bg3, bg4];

function randomIndex(max) {
	return Math.floor(Math.random() * max);
}

function App() {
	const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);
	const [img, setImg] = useState(images[randomIndex(images.length)]);
	function changePhrase() {
		setPhrase(phrases[randomIndex(phrases.length)]);
		setImg(images[randomIndex(images.length)]);
	}
	return (
		<div className="wrapper" style={{ backgroundImage: `url('${img}')` }}>
			<div className="container">
				<h1 className="heading">
					Galleta de la <br /> fortuna
				</h1>
				<div className="card">
					<div className="card__body">
						<q>{phrase.phrase}</q>
						<cite>
							- <b>{phrase.author}</b>{' '}
						</cite>
					</div>
				</div>
				<button className="btn" onClick={changePhrase}>
					Next
				</button>
			</div>
		</div>
	);
}

export default App;

import "./App.css";
import { string } from "is984la-webpack-package";
import { useEffect, useState } from "react";
import Button from "./components/Button";

function App() {
	const [shouldRender, updateShouldRender] = useState(false);
	const [pokemonData, setPokemonData] = useState(null);
	const handleClick = (e) => {
		e.preventDefault();
		updateShouldRender((prevState) => !prevState);
		console.log("here");
	};

	useEffect(() => {
		const fetchPokemonData = async () => {
			const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
			const data = await res.json();
			setPokemonData(data);
		};

		fetchPokemonData();
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<p>Welcome to your webpack app!</p>
				<Button onClick={handleClick} />
				{shouldRender ? <p data-testid="hello-message">{string}</p> : null}
				{pokemonData && (
					<div>
						<h2>{pokemonData.name}</h2>
						<ul>
							{pokemonData?.abilities?.map(({ ability }) => {
								return <li key={"ability-" + ability.name}>{ability.name}</li>;
							})}
						</ul>
					</div>
				)}
			</header>
		</div>
	);
}

export default App;

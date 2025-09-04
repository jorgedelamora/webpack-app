import "./App.css";
import { string } from "is984la-webpack-package";
import { useState } from "react";
import Button from "./components/Button";

function App() {
	const [ shouldRender, updateShouldRender ] = useState(false);
	const handleClick = (e) => {
		e.preventDefault()
		updateShouldRender((prevState) => !prevState);
		console.log('here')
	};
	return (
		<div className="App">
			<header className="App-header">
				<p>Welcome to your webpack app!</p>
				<Button onClick={handleClick}/>
				{ shouldRender ? <p data-testid="hello-message">{string}</p> : null}
			</header>
		</div>
	);
}

export default App;

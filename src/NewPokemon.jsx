import React, { useState } from "react";
import { idGenerator } from "./helpers/util";

const NewPokemon = ({ addPokemon }) => {
	const [pokemonName, setPokemonName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const pokemon = {
			id: idGenerator(),
			name: pokemonName,
		};

		addPokemon(pokemon);
		setPokemonName("");

		console.log(pokemon);
	};

	return (
		<div className="py-3">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="fomr-control"
					placeholder="Enter pokemon name"
					value={pokemonName}
					onChange={(e) => setPokemonName(e.target.value)}
				/>
				<button className="btn btn-success">Save</button>
			</form>
		</div>
	);
};

export default NewPokemon;

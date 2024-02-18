import React, { useState } from "react";
import NewPokemon from "./NewPokemon";

const Pokemons = ({ pokemons, deletePokemon, addPokemon, openPokemon }) => {
	const [isNewPokemonShowed, setIsNewPokemon] = useState(false);

	const handleDeletePokemon = (e, pokemon) => {
		e.preventDefault();
		console.log(pokemon.name);
		deletePokemon(pokemon);
	};

	const handleOpenPokemon = (e, pokemon) => {
		e.preventDefault();
		console.log(pokemon.name);
		openPokemon(pokemon);
	};

	return (
		<div className="container my-5">
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => setIsNewPokemon(true)}
			>
				Add new pokemon
			</button>

			{isNewPokemonShowed && <NewPokemon addPokemon={addPokemon} />}

			<hr />
			<ul className="list-group">
				{pokemons.map((pokemon) => (
					<li
						key={pokemon.name}
						className="list-group-item d-flex justify-content-between align-items-start"
					>
						{pokemon.name.toUpperCase()}
						<button
							type="button"
							className="btn btn-success"
							data-bs-toggle="modal"
							data-bs-target="#staticBackdrop"
							onClick={(e) => {
								handleOpenPokemon(e, pokemon);
							}}
						>
							Edit
						</button>
						<button
							className="btn btn-sm btn-danger"
							onClick={(e) => {
								handleDeletePokemon(e, pokemon);
							}}
						>
							X
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Pokemons;

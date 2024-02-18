import React, { useState } from "react";
import NewPokemon from "./NewPokemon";
import EditPokemon from "./EditPokemon";

const Pokemons = ({ pokemons, deletePokemon, addPokemon, editPokemon }) => {
	const [isNewPokemonShowed, setIsNewPokemon] = useState(false);
	const [isPokemonForEdit, setIsPokemonForEdit] = useState(false);
	const [pokemonForEdit, setPokemonForEdit] = useState(null);

	const handleDeletePokemon = (e, pokemon) => {
		e.preventDefault();

		deletePokemon(pokemon);
	};

	const handleOpenPokemon = (e, pokemon) => {
		e.preventDefault();

		openPokemon(pokemon);
	};

	const openPokemon = (pokemon) => {
		setIsPokemonForEdit(true);
		setPokemonForEdit(pokemon);
		console.log("pokemon za uređivanje", pokemon);
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
			{isPokemonForEdit && (
				<EditPokemon
					pokemonForEdit={pokemonForEdit}
					editPokemon={editPokemon}
				/>
			)}

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

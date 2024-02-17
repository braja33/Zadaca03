import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Pokemons from "./Pokemons";
import { getResource } from "./helpers/fetch";
import { YELLOW_POKEMONS } from "./helpers/endpoints";
import { addToStorage, deleteFromStorage, idGenerator } from "./helpers/util";
import { POKEMONS_STORAGE_KEY } from "./helpers/constants";

const App = () => {
	const [pokemons, setPokemons] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false); //koristi za inicijalno prikazivanje loadera

	const storagePokemons = JSON.parse(
		//ovo se dogodi samo prilikom inicijalizacije
		localStorage.getItem(POKEMONS_STORAGE_KEY) ?? []
	);

	useEffect(() => {
		getResource(YELLOW_POKEMONS)
			.then((data) => {
				data.pokemon_species.forEach((element) => {
					element.id = idGenerator();
				});
				console.log("Pokemoni s APIja", data);

				const allPokemon = [
					...storagePokemons,
					...data.pokemon_species,
				];
				setPokemons(allPokemon);
			})
			.catch(() => {
				alert("Something went wrong!");
			})
			.finally(() => setIsLoaded(true));
	}, []); //hook - kada se komp prvi puta montira, odradit će funkciju. Frist scan recimo

	/* 	const deletePokemon = (pokemon) => {
		setPokemons(pokemons.filter((value) => value.id !== pokemon.id));
	}; */

	const deletePokemon = (pokemon) => {
		try {
			deleteFromStorage(POKEMONS_STORAGE_KEY, pokemon);
			setPokemons(pokemons.filter((value) => value.id !== pokemon.id));
		} catch (error) {
			alert("Error");
		}
	};

	const addPokemon = (pokemon) => {
		try {
			addToStorage(POKEMONS_STORAGE_KEY, pokemon);
			setPokemons([pokemon, ...pokemons]);
		} catch (error) {
			alert("Greška prilikom pisanja podataka u locak storage");
		}
	};

	const editPokemon = (pokemon) => {
		try {
			addToStorage(POKEMONS_STORAGE_KEY, pokemon);
			setPokemons([pokemon, ...pokemons]);
		} catch (error) {
			alert("Greška prilikom pisanja podataka u locak storage");
		}
	};

	return (
		<div>
			{!isLoaded && <Loader />}
			{isLoaded && (
				<Pokemons
					pokemons={pokemons}
					deletePokemon={deletePokemon}
					addPokemon={addPokemon}
					editPokemon={editPokemon}
				/>
			)}
		</div>
	);
};

export default App;

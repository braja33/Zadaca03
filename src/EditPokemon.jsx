import React, { useState } from "react";

const EditPokemon = ({ pokemonForEdit, editPokemon }) => {
	const [newPokemonName, setNewPokemonName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("ime u handelSubmtu", newPokemonName);
		editPokemon(pokemonForEdit, newPokemonName);
		setNewPokemonName("");
	};

	return (
		<>
			<div
				className="modal fade"
				id="staticBackdrop"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="staticBackdropLabel"
							>
								Edit {`${pokemonForEdit.name}`}
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<form onSubmit={handleSubmit}>
							<div className="modal-body">
								<div className="mb-3">
									<label
										htmlFor="pokemonEdit"
										className="col-form-label"
									>
										Enter new pokemon name
									</label>
									<input
										type="text"
										className="form-control"
										id="pokemonEdit"
										value={newPokemonName}
										onChange={(e) =>
											setNewPokemonName(e.target.value)
										}
									></input>
								</div>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Close
								</button>
								<button
									type="submit"
									className="btn btn-primary"
									data-bs-dismiss="modal"
								>
									Change
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditPokemon;

import React from 'react';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useFom';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {
	const heroesFiltered = heroes;

	const [formValues, handleInputChange, reset] = useForm({
		searchText: ''
	});

	const { searchText } = formValues;

	const handleSearch = (e) => {
		e.preventDefault();
		console.log(searchText);
		reset();
	};

	return (
		<div>
			<h1>Search Screen</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Search Form</h4>
					<hr />

					<form onSubmit={handleSearch}>
						<input
							type="text"
							placeholder="Find your hero"
							className="form-control"
							name="searchText"
                            autoComplete="off"
							value={searchText}
							onChange={handleInputChange}
						/>
						<button
							type="submit"
							className="btn n-1 btn-block btn-outline-primary"
						>
							Search...
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>results</h4>
					<hr />
					{heroesFiltered.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</div>
	);
};

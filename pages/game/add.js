import firebaseInstance from '../../config/firebase';
import { useState } from 'react';
import InputBlock from '../../components/InputBlock';

function AddGame() {
	const [ title, setTitle ] = useState(null);
	const [ rating, setRating ] = useState(null);
	const [ year, setYear ] = useState(null);
	const [ developer, setDeveloper ] = useState(null);
	const [ inputTxt, setInputTxt ] = useState('');

	function handleTitleChange(e) {
		setTitle(e.target.value);
		setInputTxt(e.target.value);
	}

	function handleRatingChange(e) {
		setRating(e.target.value);
	}

	function handleYearChange(e) {
		setYear(e.target.value);
	}

	function handleDeveloperChange(e) {
		setDeveloper(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(title, rating, year);
		const collection = firebaseInstance.firestore().collection('games');
		collection
			.doc()
			.set({
				title: title,
				rating: rating,
				year: year,
				developers: developer
			})
			.then(() => {
				//should change this to show that it is sent in or cancel out if you want to stop.
				//console.log('added!');
				setInputTitle('');
			})
			.catch((error) => {
				console.error(error);
			});
	}

	return (
		<main>
			<h1>Add Games</h1>
			<form name="add-game" id="add-game" action="/" method="GET" onSubmit={(e) => handleSubmit(e)}>
				<InputBlock
					inputName="title"
					inputId="title"
					inputType="text"
					inputPlaceholder="game title"
					labelText="title"
					inputTxt={inputTxt}
					inputChangeHandler={(e) => handleTitleChange(e)}
				/>

				<InputBlock
					inputName="rating"
					inputId="rating"
					inputType="number"
					labelText="your rating"
					inputChangeHandler={(e) => handleRatingChange(e)}
				/>

				<InputBlock
					inputName="year"
					inputId="year"
					inputType="number"
					labelText="game's year"
					inputChangeHandler={(e) => handleYearChange(e)}
				/>

				<InputBlock
					inputName="developers"
					inputId="developers"
					inputType="text"
					labelText="developed by"
					inputChangeHandler={(e) => handleDeveloperChange(e)}
				/>

				<button type="submit">Submit</button>
			</form>
		</main>
	);
}

export default AddGame;

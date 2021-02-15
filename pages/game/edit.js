import React from 'react';
import firebaseInstance from '../../config/firebase';
let games = [];
const Edit = ({ games, error }) => {
	const handleDelete = (id) => {
		console.log(id);
		const collection = firebaseInstance.firestore().collection('games');
		collection
			.doc(id)
			.delete()
			.then(() => {
				console.log(id + 'was deleted!');
			})
			.catch((err) => {
				console.log('error', err);
			});
	};

	return (
		<main>
			<h1>Here you can delete any of the games</h1>
			<ol>
				{games.map((item) => {
					return (
						<li key={item.id}>
							{item.title}, {item.year}, {item.rating}, {item.developers}{' '}
							<button onClick={() => handleDelete(item.id)}>Delete</button>
						</li>
					);
				})}
			</ol>
		</main>
	);
};

Edit.getInitialProps = async () => {
	try {
		const gamesCollection = await firebaseInstance.firestore().collection('games');
		const gamesData = await gamesCollection.get();

		gamesData.forEach((game) => {
			games.push({
				id: game.id,
				...game.data()
			});
		});

		return { games };
	} catch (error) {
		return {
			error: error.message
		};
	}
};

export default Edit;

import firebaseInstance from '../config/firebase';

function GamesList({ games, error }) {
	return (
		<main>
			<h1>My Favorite Games</h1>
			<ul>
				{games.map((item) => {
					return <li key={item.id}>{JSON.stringify(item)}</li>;
				})}
			</ul>
		</main>
	);
}

GamesList.getInitialProps = async () => {
	try {
		const gamesCollection = await firebaseInstance.firestore().collection('games');
		const gamesData = await gamesCollection.get();

		let games = [];
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

export default GamesList;

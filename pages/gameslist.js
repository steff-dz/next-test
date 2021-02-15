import React, { useState, useEffect } from 'react';
import firebaseInstance from '../config/firebase';
import Link from 'next/link';
import styled from 'styled-components';

//let games = [];

const GamesList = () => {
	//const [displayMode, setDisplayMode] = useState(null)
	const [ displayGames, setDisplayGames ] = useState([]);

	useEffect(
		() => {
			// if (displayGames.length === 0) {
			// 	console.log('nothin here');
			// } else {
			// 	console.log('games are here', displayGames);
			// }
		},
		[ displayGames ]
	);

	const showAllGames = async () => {
		//setDisplayMode('all')
		setDisplayGames([]);
		let games = [];
		try {
			const gamesCollection = await firebaseInstance.firestore().collection('games');
			const gamesData = await gamesCollection.get();

			gamesData.forEach((game) => {
				games.push({
					id: game.id,
					...game.data()
				});
			});

			setDisplayGames(games);
		} catch (error) {
			console.log(error.message);
		}
	};

	function renderGames() {
		if (displayGames.length === 0) {
			return;
		} else {
			displayGames.map((el) => {
				return <li key={el.id}>{JSON.stringify(el.title)}</li>;
			});
		}
	}

	const showNewerGames = async () => {
		let games = [];
		setDisplayGames([]);
		try {
			const gamesCollection = await firebaseInstance
				.firestore()
				.collection('games')
				.where('year', '>=', '2000')
				.get();

			gamesCollection.forEach((el) => {
				games.push({
					id: el.id,
					...el.data()
				});
			});

			setDisplayGames(games);
		} catch (error) {
			console.log(error.message);
		}
	};

	const showBestGames = async () => {
		let games = [];
		setDisplayGames([]);
		try {
			const gamesCollection = await firebaseInstance
				.firestore()
				.collection('games')
				.where('rating', '>=', 7)
				.get();

			gamesCollection.forEach((el) => {
				games.push({
					id: el.id,
					...el.data()
				});
			});

			setDisplayGames(games);
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<MainBase>
			<h1>My Favorite Games</h1>
			<Link href="/game/add">
				<button>Add More</button>
			</Link>
			<Link href="/game/edit">
				<button>Edit Game Library</button>
			</Link>
			<div>
				<button onClick={showAllGames}>See All Games</button>
				<button onClick={showNewerGames}>See Games Before 2000</button>
				<button onClick={showBestGames}>See Highest Rating Games</button>
			</div>
			<ul>
				{displayGames &&
					displayGames.map((el) => {
						return (
							<li key={el.id}>
								{el.title} from: {el.year}, my rating: {el.rating}
							</li>
						);
					})}
			</ul>
		</MainBase>
	);
};

// function GamesList({ games, error }) {
// 	return (
// 		<MainBase>
// 			<h1>My Favorite Games</h1>
// 			<Link href="/game/add">
// 				<button>Add More</button>
// 			</Link>
// 			<div>
// 				<button>See All Games</button>
// 				<button>See Games Before 2000</button>
// 				<button>See Highest Rating Games</button>
// 			</div>

// 			<ul>
// 				{games.map((item) => {
// 					return <li key={item.id}>{JSON.stringify(item.title)}</li>;
// 				})}
// 			</ul>
// 		</MainBase>
// 	);
// }

// GamesList.getInitialProps = async () => {
// 	try {
// 		const gamesCollection = await firebaseInstance.firestore().collection('games');
// 		const gamesData = await gamesCollection.get();

// 		gamesData.forEach((game) => {
// 			games.push({
// 				id: game.id,
// 				...game.data()
// 			});
// 		});

// 		return { games };
// 	} catch (error) {
// 		return {
// 			error: error.message
// 		};
// 	}
// };

const MainBase = styled.main`
	background-color: lightgrey;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;

	button {
		width: 10rem;
	}

	div {
		margin-top: .5rem;
		display: flex;
		gap: 1rem;

		button {
			padding: 1rem;
		}
	}
`;

export default GamesList;

import React, { useState, useEffect } from 'react';
import firebaseInstance from '../config/firebase';
import Link from 'next/link';
import styled from 'styled-components';
import List from '../components/List';
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

	const showGames = async () => {
		//setDisplayMode('all')
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

	return (
		<MainBase>
			<h1>My Favorite Games</h1>
			<Link href="/game/add">
				<button>Add More</button>
			</Link>
			<div>
				<button onClick={showGames}>See All Games</button>
				<button>See Games Before 2000</button>
				<button>See Highest Rating Games</button>
			</div>
			<ul>
				{displayGames &&
					displayGames.map((el) => {
						return <li key={el.id}>{JSON.stringify(el.title)}</li>;
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

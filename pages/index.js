import React from 'react';
//import firebase from 'firebase';
import firebaseInstance from '../config/firebase';
import PageTitle from '../components/PageTitle';

export default function Home({ game, error }) {
	if (error !== undefined) {
		return <p>there is a failture {error} </p>;
	}
	return (
		<React.Fragment>
			<PageTitle>Home Page</PageTitle>
			<pre>
				<code>{JSON.stringify(game, null, 2)}</code>
			</pre>
		</React.Fragment>
	);
}

Home.getInitialProps = async () => {
	try {
		const collection = await firebaseInstance.firestore().collection('games');
		const document = await collection.doc('C2gmRn5t6esVNqQyw7O7').get();

		if (document.exists !== true) {
			throw new Error('error, doc does not exist');
		}

		const game = {
			id: document.id,
			...document.data()
		};

		return { game };
	} catch (error) {
		return { error: error.message };
	}
};

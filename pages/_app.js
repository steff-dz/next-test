import React from 'react';
import '../styles/globals.css';
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Navigation />
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp;

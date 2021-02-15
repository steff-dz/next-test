function GamePage({ id }) {
	return <h1>You are on a page with id {id}</h1>;
}
GamePage.getInitialProps = async ({ query }) => {
	return {
		id: query.id
	};
};

export default GamePage;

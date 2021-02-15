import PageTitle from '../components/PageTitle';
import styled from 'styled-components';

export default function ContactPage() {
	// let a = true;
	// if (a === true) {
	// 	throw new Error('This is a test');
	// }
	return (
		<MainBase>
			<PageTitle>Contact Me</PageTitle>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptates! Labore non officia illo
				amet at voluptates corporis maiores doloribus nam earum accusantium dignissimos, vel, vitae sit unde
				culpa sed.
			</p>
		</MainBase>
	);
}

const MainBase = styled.main`
	height: 100vh;
	background-color: #f0d9d9;

	p {
		padding: 0 30px;
	}
`;

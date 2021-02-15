import React, { useState, useRef } from 'react';
import PageTitle from '../components/PageTitle';
import styled from 'styled-components';

export default function AboutPage() {
	const [ toggle, setToggle ] = useState(false);
	const textChunk = useRef();
	// function handleClick() {
	// 	textChunk.current.style.display = 'inline';
	// }

	function toggleDisplay() {
		setToggle(true);
	}

	return (
		<MainBase>
			<PageTitle>About Me</PageTitle>
			<button onClick={() => setToggle(!toggle)}>Clickity</button>
			<p className={toggle ? 'normal' : ''}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est libero corporis nihil enim laboriosam
				ratione delectus nesciunt error saepe, quisquam magni obcaecati officia similique neque. In ut optio
				beatae eius. Exercitationem quibusdam, animi beatae unde odit corrupti, possimus ducimus, optio
				perferendis officia similique magnam ipsa eveniet iusto! Enim, incidunt quod. Quasi unde, laudantium
				repudiandae esse inventore vel voluptatum tempora dolores.
			</p>
		</MainBase>
	);
}

const MainBase = styled.main`
	background-color: lightgoldenrodyellow;
	font-size: 2rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;

	button {
		width: 200px;
		font-size: 20px;
		background-color: white;
	}
	p {
		display: none;
		padding: 0 20px;
	}

	.normal {
		padding: 0 20px;
		display: inline;
	}
	.turnOff {
		display: none;
	}
`;

//dont need to export this anywhere else in the code.

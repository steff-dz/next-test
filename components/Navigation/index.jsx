import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navigation = () => {
	return (
		<NavBase>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/gameslist">Game Library</Link>
				</li>
			</ul>
		</NavBase>
	);
};

export const NavBase = styled.nav`
	background-color: lightblue;
	padding: 0 30px;
	font-size: 30px;
	ul {
		display: flex;
		gap: 10px;
		list-style: none;
		margin: 0;
		padding: 0;
		height: 50px;
		align-items: center;
	}
`;

export default Navigation;

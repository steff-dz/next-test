import styled from 'styled-components';

const PageTitle = ({ children }) => {
	return <PageTitleBase>{children}</PageTitleBase>;
};

export const PageTitleBase = styled.h1`
	font-size: 50px;
	color: cornflowerblue;
	text-align: center;
	margin: 0;
	padding: 0;
`;

export default PageTitle;

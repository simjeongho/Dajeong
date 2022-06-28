import styled from "styled-components";

export const LayoutHeader = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: black;
`;

export const LayoutHeaderTitle = styled.h1`
	height: 100%;
	font-family: var(--font-googleGugi);
	color: white;
	margin: 1rem;
`;
export const LayoutNavbar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

export const LayoutNavLists = styled.ul`
	margin-left: 30%;
	display: flex;
	justify-content: flex-end;
`;

export const LayoutNavItem = styled.li`
	list-style: none;
	margin: 1rem;
	font-size: 1.5rem;
	color: white;
	font-family: var(--font-googleSingleDay);
`;

import styled from "styled-components";

export const LayoutHeader = styled.header`
	width: 100%;
	height: auto;
	background-color: black;
	border-radius: 10px;
`;

export const LayoutTitlediv = styled.div`
	display: flex;
	width: max-content;
	margin: 1.5% 10%;
`;

export const LayoutHeaderTitle = styled.h1`
	height: 100%;
	font-family: "googlGugi";
	color: white;
	font-size: 3rem;
	margin: 1rem;
`;

export const LayoutHeaderImg = styled.img`
	height: 8vh;
`;

export const LayoutNavbar = styled.nav`
	display: flex;
	background-color: black;
	margin: 0;
`;

export const LayoutNavLists = styled.ul`
	display: flex;
	justify-content: space-evenly;
	width: 100vw;
	background-color: black;
`;

export const LayoutNavItem = styled.li`
	margin: 1rem;
	list-style: none;
	font-size: 1.5rem;
	color: white;
	font-family: var(--font-lnkLi);
	border: 2px solid transparent;
	background-origin: border-box;
	background-clip: content-box, border-box;
`;

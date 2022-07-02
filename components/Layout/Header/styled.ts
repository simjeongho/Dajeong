import { moveUptop } from "./../../../shared/style/styled";
import styled from "styled-components";

export const LayoutHeader = styled.header`
	width: 100%;
	height: 10%;
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
	font-size: 2rem;
	margin: 1rem;
	cursor: pointer;
`;

export const LayoutNavbar = styled.nav`
	display: flex;
	background-color: black;
	margin: 0;
`;

export const LayoutNavLists = styled.ul`
	display: flex;
	justify-content: space-evenly;
	width: 60vw;
	background-color: black;
`;

export const LayoutNavItem = styled.li`
	position: relative;
	top: 1rem;
	margin-bottom: 2rem;
	list-style: none;
	font-size: 1rem;
	color: white;
	font-family: var(--font-lnkLi);
	border: 2px solid transparent;
	background-origin: border-box;
	background-clip: content-box, border-box;
	cursor: pointer;
	&:hover {
		animation: ${moveUptop} 0.2s linear;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}
`;

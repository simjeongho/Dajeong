import { moveUp, Appear, Disappear } from "./../shared/style/styled";
import Image from "next/image";
import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background: url("/assets/images/Home.svg"); */
`;

export const ProfileContainer = styled.div`
	width: 90%;
	height: 50vh;
	display: flex;

	& > div:first-child {
		width: 20rem;
		height: 20rem;
		box-sizing: border-box;
		border: 8px solid var(--color-middlepurple);
		border-radius: 50%;
		position: relative;
		top: 15rem;
		left: 20rem;
	}

	& > div:last-child {
		width: 20rem;
		height: 20rem;
		box-sizing: border-box;
		border: 8px solid var(--color-middlepurple);
		border-radius: 50%;
		position: relative;
		top: 15rem;
		left: 50rem;
	}
`;

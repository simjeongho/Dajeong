import styled, { css } from "styled-components";
import { moveUp, Appear, Disappear } from "shared/style/styled";
import Image from "next/image";

export const BestAlbumContainer = styled.div`
	width: 40%;
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 5%;
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
`;

export const BestAlbumIntroduceContainer = styled.div`
	width: 60%;
	height: 60%;
	border: 10px solid white;
	position: relative;
	padding: 3rem;
	font-family: var(--font-googleGugi);

	& > h2 {
		font-size: 1rem;
		color: var(--color-middlepurple);
		@media screen and (max-width: 500px) {
			font-size: 0.7rem;
		}
	}

	& > h1 {
		font-size: 2em;
		color: white;
	}
	& > p {
		font-size: 1em;
		color: var(--color-lightgray);
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		height: 50%;
		margin-bottom: 1rem;
	}
`;
export const BestAlbumShowButton = styled.button`
	width: 40%;
	height: auto;
	font-size: 1em;
	color: white;
	background-color: var(--color-middlepurple);
	margin-top: 3em;
	border-radius: 10px 10px 10px 10px;
	cursor: pointer;
	&:hover {
		animation: ${moveUp} 0.5s linear;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}
`;

export const ImageContainer = styled.div<{ show?: boolean }>`
	position: relative;
	left: 3%;
	width: 40%;
	/* visibility: ${({ show }) => (show ? "visible" : "hidden")}; */
	${({ show }) =>
		show
			? css`
					animation: ${Appear} 1s linear;
					animation-fill-mode: forwards;
			  `
			: css`
					animation: ${Disappear} 1s linear;
					animation-fill-mode: forwards;
			  `}

	@media screen and (max-width: 768px) {
		width: 100%;
		left: 0;
	}
`;

export const BestAlbum = styled(Image)``;

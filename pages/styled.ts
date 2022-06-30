import styled, { keyframes } from "styled-components";
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
export const SliderContainer = styled.div`
	width: 90%;
	height: auto;
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

export const BestAlbumContainer = styled.div`
	width: 90%;
	height: 800px;
	display: flex;
`;

export const BestAlbumIntroduceContainer = styled.div`
	width: 500px;
	height: 600px;
	border: 10px solid white;
	position: relative;
	left: 8rem;
	padding: 5rem;

	& > h2 {
		font-size: 1.5rem;
		color: var(--color-middlepurple);
	}

	& > h1 {
		font-size: 3rem;
		color: white;
	}
	& > p {
		font-size: 1rem;
		color: var(--color-lightgray);
	}
`;

const moveUp = keyframes`
    0%{
        margin-top: 5rem;
    }
    50% {
        margin-top: 4rem;
    }
    100% {
        margin-top: 3rem;
    }
`;

export const BestAlbumShowButton = styled.button`
	width: 40%;
	height: auto;
	font-size: 1.5rem;
	color: white;
	background-color: var(--color-middlepurple);
	margin-top: 5rem;
	border-radius: 10px 10px 10px 10px;

	&:hover {
		animation: ${moveUp} 1s linear infinite;
	}
`;

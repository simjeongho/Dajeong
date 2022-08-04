import styled from "styled-components";

export const LikedContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: black;
`;

export const LikedInnerContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: black;
	margin: 2%;
`;

export const LikedTitle = styled.div`
	background-color: var(--color-deepgray);
	width: 100%;
	border-radius: 10px;
	padding: 2%;
	& > h1 {
		color: white;
		font-family: var(--font-crown);
		font-size: 1.5rem;
	}
	margin-bottom: 2%;
`;

export const LikedContent = styled.div`
	width: 100%;
	background-color: var(--color-deepgray);
	border-radius: 10px;
	color: white;
`;

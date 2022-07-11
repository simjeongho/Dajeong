import Image from "next/image";
import styled from "styled-components";

export const ProfileContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: black;
`;

export const ProfileImageContainer = styled.div`
	margin: 5%;
	border: var(--border-container);
`;

export const ProfileImage = styled(Image)``;

export const ProfileDescriptionContainer = styled.div`
	width: 50%;
	height: 100%;
	background-color: black;
	border: var(--border-container);
`;

export const ProfileName = styled.h1`
	color: white;
	font-size: 1.5rem;
	& > h2 {
		color: white;
		font-size: 1rem;
	}
`;

export const ProfileDream = styled.h2`
	font-size: 1rem;
`;

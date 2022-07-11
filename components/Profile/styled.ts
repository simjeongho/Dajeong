import Image from "next/image";
import styled from "styled-components";

export const ProfileContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60vh;
	margin: 15%;
`;

export const ProfileImageContainer = styled.div`
	width: 40%;
	height: 100%;
`;

export const ProfileImage = styled(Image)``;

export const ProfileDescriptionContainer = styled.div`
	width: 60%;
	height: 100%;
`;

export const ProfileName = styled.h1`
	font-size: 1.5rem;
`;

export const ProfileDream = styled.h2`
	font-size: 1rem;
`;

import { MiddlePurpleButton } from "shared/component/MiddlePurpleButton/styled";
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
	border: var(--border-container);
	width: 100%;
	height: 20vh;
	color: var(--color-lightgray);
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: pointer;
	}
`;

export const ProfileUploadForm = styled.form`
	width: 30%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5%;
`;

export const ProfileUploadInput = styled.input``;

export const ProfileUploadButton = styled.button`
	outline: none;
	background-color: black;
	color: var(--color-lightgray);

	&:hover {
		cursor: pointer;
	}
`;

export const ProfileImage = styled(Image)``;

export const ProfileDescriptionContainer = styled.div`
	width: 50%;
	height: 100%;
	background-color: black;
	border: var(--border-container);
	color: white;
	& > h1 {
		color: white;
		font-size: 1.5rem;
	}
	& > h2 {
		color: white;
		font-size: 1rem;
	}
`;

export const LogOutButton = styled(MiddlePurpleButton)`
	width: 30%;
	height: 10%;
	font-size: 1rem;
	margin-top: 0;
`;

export const ProfileDream = styled.h2`
	font-size: 1rem;
`;

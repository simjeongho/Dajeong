import { MiddlePurpleButton } from "shared/component/MiddlePurpleButton/styled";
import Image from "next/image";
import styled from "styled-components";
import { Collapse } from "antd";

export const ProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: black;
	padding-left: 30%;
	padding-right: 30%;
	@media screen and (max-width: 768px) {
		padding-left: 5%;
		padding-right: 5%;
	}
`;

export const ProfileImageContainer = styled.div`
	width: 100%;
	border-radius: 10px;
	color: var(--color-lightgray);
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: pointer;
	}
`;

export const ProfileImageTag = styled(Image)`
	border-radius: 50%;
`;

export const ProfileUploadForm = styled.form`
	width: 30%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 3%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
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
export const ShowLikedContainer = styled.div`
	width: 100%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const ProfileDescriptionContainer = styled.div`
	width: 100%;
	background-color: var(--color-deepgray);
	padding: 3%;
	border-radius: 10px;
	color: white;
	& > h1 {
		color: white;
		font-size: 1.5rem;
	}
	& > h2 {
		color: white;
		font-size: 1rem;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const EditProfileDescription = styled.div`
	margin: 5% 2% 5% 2%;
`;
export const EditProfileDescriptionIcons = styled.div`
	margin-left: 2%;
	&:hover {
		cursor: pointer;
	}
`;
export const ProfileDescriptionDiv = styled.div`
	background-color: black;
	padding: 3%;
	border-radius: 10px;
	font-family: var(--font-crown);
`;

export const ProfileDescriptionUploadForm = styled.form`
	width: 100%;
`;

export const ProfileDescriptionLabel = styled.label`
	font-family: var(--font-crown);
`;

export const ProfileDescriptionTextArea = styled.textarea`
	width: 100%;
	color: black;
`;

export const ChangeDescriptionButton = styled(MiddlePurpleButton)`
	width: 30%;
	padding: 1%;
	font-size: 1rem;
	font-family: var(--font-crown);
`;

export const CustomCollapse = styled(Collapse)`
	background-color: black;
	font-family: var(--font-crown);
	width: 100%;
	background: black;
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

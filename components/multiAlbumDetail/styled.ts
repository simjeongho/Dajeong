import Image from "next/image";
import styled from "styled-components";

export const MultiAlbumDetailContainer = styled.div`
	width: 100%;
	background-color: black;
	display: flex;
	flex-direction: column;
`;

export const MultiAlbumImageArea = styled.div`
	width: 100%;
	background-color: var(--color-lightgray);
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ProfileContainer = styled.div``;
export const ProfileImageContainer = styled.div`
	width: 30px;
	height: 30px;
`;

export const ProfileImage = styled(Image)`
	border-radius: 50%;
`;

export const MultiAlbumImageList = styled.ul`
	width: 80%;
	margin: 1%;
`;

export const MultiAlbumImage = styled(Image)`
	border: 2px solid white;
`;

export const MultiAlbumContentArea = styled.div`
	display: flex;
	width: 100%;
	margin: 5%;
	@media screen and (max-width: 768px) {
		width: 90%;
		flex-direction: column;
		margin: 5%, 5%, 5%, 5%;
	}
`;

export const MultiAlbumTitleContainer = styled.div`
	width: 30%;
	color: white;
	display: flex;
	flex-direction: column;
	padding: 5%;
	background-color: var(--color-deepgray);
	border-radius: 10px;
	margin-right: 3%;
	margin-bottom: 2%;
	font-family: var(--font-crown);
	& > h1 {
		color: white;
	}

	& > h2 {
		color: white;
	}
	& > h3 {
		color: white;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const MultiAlbumLikeDiv = styled.div``;

export const MultiAlbumLikersDiv = styled.div`
	display: flex;

	& > h3 {
		color: white;
		margin: 5px;
		font-size: 1rem;
	}
`;

export const MultiAlbumLiker = styled.div``;

export const MultiAlbumDescriptionContainer = styled.div`
	color: white;
	background-color: var(--color-deepgray);
	border-radius: 10px;
	padding: 3%;
	font-size: 1rem;
	margin-bottom: 2%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const MultiAlbumDescriptionComments = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

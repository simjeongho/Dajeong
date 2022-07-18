import Image from "next/image";
import styled from "styled-components";

export const SingleAlbumDetailContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	background-color: black;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

export const SingleAlbumDetailImageContainer = styled.div`
	border: var(--border-container);
	height: 100%;
	margin: 3%;
`;

export const SingleAlbumDetailImage = styled(Image)``;
export const SingleAlbumContentContainer = styled.div`
	width: 100%;
	height: 100%;
	border: 0.2rem solid var(--color-lightgray);
	margin-bottom: 3%;
`;

export const SingleAlbumDetailTitleContainer = styled.div`
	font-size: 1.2rem;
	margin-bottom: 2rem;
`;
export const SingleAlbumDetailTitle = styled.h1`
	color: white;
`;

export const SingleAlbumDetailDescriptionContainer = styled.div`
	color: white;
	font-size: 0.9rem;
`;

export const SingleAlbumDetailDescription = styled.div``;

export const SingleAlbumDetailRightContainer = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		width: 80%;
	}
`;

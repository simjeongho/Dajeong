import Image from "next/image";
import styled from "styled-components";

export const SingleAlbumDetailContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	background-color: black;
	justify-content: center;
	align-items: center;
`;

export const SingleAlbumDetailImageContainer = styled.div`
	border: var(--border-container);
	width: 40%;
	height: 100%;
`;

export const SingleAlbumDetailImage = styled(Image)``;
export const SingleAlbumContentContainer = styled.div`
	width: 30%;
	height: 100%;
	border: 0.2rem solid var(--color-lightgray);
`;

export const SingleAlbumDetailTitleContainer = styled.div`
	font-size: 0.5rem;
`;

export const SingleAlbumDetailTitle = styled.h1``;

export const SingleAlbumDetailDescriptionContainer = styled.div``;

export const SingleAlbumDetailDescription = styled.div``;

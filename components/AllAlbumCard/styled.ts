import Image from "next/image";
import styled from "styled-components";

export const AllAlbumListCardContainer = styled.div`
	display: flex;
	box-shadow: 2px 2px 2px 2px #212529;
	border-radius: 10px;
	padding: 2%;
	justify-content: space-around;
	align-items: center;
`;

export const AllAlbumListCardThumbnailContainer = styled.div`
	height: auto;
	border: 2px solid white;
`;

export const AllAlbumListCardThumbnail = styled(Image)``;

export const AllAlbumListCardTitleDiv = styled.div`
	display: flex;
	justify-content: space-around;
	width: 20%;
	& > h1 {
		font-family: var(--font-crown);
		color: white;
		font-size: 1.5rem;
	}

	& > h2 {
		color: white;
		font-family: var(--font-crown);
		font-size: 1rem;
	}
`;

export const AllAlbumListCardPreviewDiv = styled.div`
	width: 40%;
	& > h3 {
		color: white;
		font-size: 0.8rem;
	}
`;

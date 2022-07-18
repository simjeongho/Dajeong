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
`;

export const MultiAlbumImageList = styled.ul``;

export const MultiAlbumImage = styled(Image)``;

export const MultiAlbumContentArea = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MultiAlbumTitleContainer = styled.div`
	& > h1 {
	}

	& > h3 {
	}
`;

export const MultiAlbumDescriptionContainer = styled.div``;

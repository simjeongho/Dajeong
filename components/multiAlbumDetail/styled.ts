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

export const MultiAlbumImageList = styled.ul`
	width: 80%;
	margin: 1%;
`;

export const MultiAlbumImage = styled(Image)`
	border: 2px solid white;
`;

export const MultiAlbumContentArea = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const MultiAlbumTitleContainer = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	border: 6px solid var(--color-middlepurple);
	margin-right: 3%;
	& > h1 {
		color: white;
	}

	& > h2 {
		color: white;
	}

	& > h3 {
		color: white;
	}
`;

export const MultiAlbumDescriptionContainer = styled.div`
	color: white;
	width: 60%;
	border: 6px solid var(--color-middlepurple);
	font-size: 1.5rem;
`;

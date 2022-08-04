import styled from "styled-components";
export const MultiAlbumDetailSkeletonContainer = styled.div`
	width: 100%;
	background-color: black;
	display: flex;
	flex-direction: column;
`;

export const MultiAlbumSkeletonImageArea = styled.div`
	width: 100%;
	background-color: var(--color-lightgray);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const MultiAlbumSkeletonContentArea = styled.div`
	display: flex;
	width: 100%;
	height: 30vh;
	margin: 5%;
	@media screen and (max-width: 768px) {
		width: 90%;
		flex-direction: column;
		margin: 5%, 5%, 5%, 5%;
	}
`;

export const MultiAlbumTitleSkeletonContainer = styled.div`
	width: 30%;
	height: 20vh;
	color: white;
	display: flex;
	flex-direction: column;
	padding: 5%;
	background-color: var(--color-deepgray);
	border-radius: 10px;
	margin-right: 3%;
	margin-bottom: 2%;
	font-family: var(--font-crown);
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const MultiAlbumDescriptionSkeletonContainer = styled.div`
	color: white;
	height: 30vh;
	background-color: var(--color-deepgray);
	border-radius: 10px;
	padding: 3%;
	font-size: 1rem;
	margin-bottom: 2%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const MultiAlbumDescriptionSkeletonComments = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

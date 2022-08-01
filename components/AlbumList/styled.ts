import styled from "styled-components";

export const AlbumListComponentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
	@media screen and (max-width: 768px) {
		padding: 3%;
	}
`;

export const AlbumListComponent = styled.div`
	width: 50%;
	background-color: var(--color-deepgray);
	border-radius: 20px;
	padding: 3%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

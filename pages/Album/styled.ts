import { NeonRoundButton } from "shared/component/NeonButton/styled";
import styled from "styled-components";

export const AlbumListContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: black;
	@media screen and (max-width: 768px) {
		padding: 3%;
	}
`;

export const SingleAlbumWritesButton = styled(NeonRoundButton)`
	width: 20%;
`;

export const MultiAlbumWritesButton = styled(NeonRoundButton)`
	width: 20%;
	margin-top: 3%;
`;

export const ShowAllMultiAlbumButton = styled.button`
	background-color: transparent;
	outline: none;
	&:hover {
		cursor: pointer;
	}
`;

export const ShowAllMultiAlbum = styled.div`
	color: white;
	background-color: var(--color-deepgray);
	border-radius: 5px;
	width: 40%;
	padding: 1%;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

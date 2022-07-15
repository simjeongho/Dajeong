import { NeonRoundButton } from "shared/component/NeonButton/styled";
import styled from "styled-components";

export const AlbumListContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: black;
`;

export const SingleAlbumWritesButton = styled(NeonRoundButton)`
	width: 20%;
`;

export const MultiAlbumWritesButton = styled(NeonRoundButton)`
	width: 20%;
	margin-top: 3%;
`;

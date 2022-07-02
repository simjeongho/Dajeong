import { NeonRoundButton } from "shared/component/NeonButton/styled";
import Image from "next/image";
import styled from "styled-components";

export const WritingSingleAlbumContainer = styled.div`
	width: 100vw;
	height: 80vh;
	background-color: black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: var(--border-container);
`;

export const BestSingleAlbumForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80%;
	height: 60%;
	border: var(--border-container);
`;

export const BestSingleAlbumInput = styled.input``;

export const BestSingleAlbumDescriptionInput = styled.input`
	width: 60%;
	height: 100%;
	font-size: 1.5rem;
`;

export const BestSingleAlbumSubmitButton = styled(NeonRoundButton)`
	width: 25%;
`;

export const BestSingleAlbumImage = styled(Image)``;

export const ShowImageContainer = styled.div`
	width: 75%;
	height: auto;
	display: flex;
	justify-content: center;
`;

export const BestSingleAlbumTitle = styled.h1``;

export const BestSingleAlbumYear = styled.div``;

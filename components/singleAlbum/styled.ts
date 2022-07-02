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
export const EmptyImage = styled.div`
	width: 300px;
	height: 400px;
	border: 0.3rem dashed var(--color-lightgray);
	border-radius: 10%;
	margin: 0.2rem;
	text-align: center;
	vertical-align: center;
	color: var(--color-lightgray);
`;
export const BestSingleAlbumForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80%;
	height: 100%;
	border: var(--border-container);
`;

export const BestSingleAlbumInput = styled.input`
	display: none;
`;

export const BestSingleAlbumDescriptionInput = styled.input`
	vertical-align: top;
	width: 60%;
	height: 100%;
	font-size: 1rem;
	background-color: black;
	color: white;
	border: 0.2rem solid var(--color-lightgray);
	border-radius: 10px;
`;

export const BestSingleAlbumSubmitButton = styled(NeonRoundButton)`
	width: 25%;
	font-size: 0.8rem;
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

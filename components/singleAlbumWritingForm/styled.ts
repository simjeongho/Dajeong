import { AlbumListContainer } from "./../../pages/Album/styled";
import { NeonRoundButton } from "shared/component/NeonButton/styled";
import Image from "next/image";
import styled from "styled-components";

export const WritingSingleAlbumContainer = styled.div`
	width: 100%;
	height: 80vh;
	background-color: black;
	border: var(--border-container);
`;
export const EmptyImage = styled.div`
	width: 30%;
	height: 100%;
	border: 0.3rem dashed var(--color-lightgray);
	border-radius: 10%;
	margin: 2rem;
	text-align: center;
	vertical-align: center;
	color: var(--color-lightgray);
`;
export const BestSingleAlbumForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	border: var(--border-container);
`;
export const BestSingleAlbumInputs = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
export const BestSingleAlbumContentInputsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	@media screen and (max-width: 768px) {
		margin-top: 2rem;
	}
`;
export const BestSingleAlbumInput = styled.input`
	display: none;
`;
export const BestSingleAlbumTitleInput = styled.input`
	width: 90%;
	font-size: 1rem;
	background-color: black;
	border: 0.2rem solid var(--color-lightgray);
	border-radius: 10px;
	color: white;
	margin-bottom: 1%;
`;

export const BestSingleAlbumDescriptionInput = styled.textarea`
	vertical-align: top;
	width: 90%;
	height: 300px;
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
	width: 30%;
	height: auto;
	display: flex;
	justify-content: center;
`;

export const BestSingleAlbumTitle = styled.h1``;

export const BestSingleAlbumYear = styled.div``;

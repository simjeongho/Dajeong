import { Appear } from "shared/style/styled";
import { NeonRoundButton } from "shared/component/NeonButton/styled";
import Image from "next/image";
import styled from "styled-components";

export const WritingSingleAlbumContainer = styled.div`
	width: 100%;
	height: 80vh;
	background-color: black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: var(--border-container);
`;
export const EmptyImage = styled.div`
	width: 30%;
	height: 200px;
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
export const BestSingleAlbumTitleInput = styled.input`
	width: 60%;
	font-size: 1rem;
	background-color: black;
	border: 0.2rem solid var(--color-lightgray);
	border-radius: 10px;
	color: white;
	margin-top: 1%;
	margin-bottom: 1%;
`;

export const BestSingleAlbumDescriptionInput = styled.textarea`
	vertical-align: top;
	width: 60%;
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
	width: 75%;
	height: auto;
	display: flex;
	justify-content: center;
`;

export const BestSingleAlbumTitle = styled.h1``;

export const BestSingleAlbumYear = styled.div``;

import { MiddlePurpleButton } from "./../../shared/component/MiddlePurpleButton/styled";
import styled from "styled-components";

export const MultiAlbumWritingFormContainer = styled.div`
	width: 100%;
	background-color: black;
`;

export const MultiAlbumWritingForm = styled.form`
	width: 100%;
	height: 60vh;
	margin: 5%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ShowMultipleImage = styled.div`
	border: 2px solid var(--color-middlepurple);
	width: 40%;
	height: 40%;
	color: var(--color-lightgray);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 3%;
`;
export const MultiAlbumWritingImage = styled.input``;

export const MultiAlbumWritingDescription = styled.textarea`
	width: 40%;
	height: 40%;
	color: var(--color-lightgray);
	background: black;

	&:focus {
		outline: 3px solid var(--color-middlepurple);
	}
`;

export const MultiAlbumSubmitButton = styled(MiddlePurpleButton)`
	width: 20%;
	height: 30px;
	font-family: var(--font-googleGugi);
`;

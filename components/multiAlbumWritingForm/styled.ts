import { MiddlePurpleButton } from "./../../shared/component/MiddlePurpleButton/styled";
import styled from "styled-components";

export const MultiAlbumWritingFormContainer = styled.div`
	width: 100%;
	background-color: black;
`;

export const MultiAlbumWritingForm = styled.form`
	width: 100%;
	height: 80vh;
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

export const MultiAlbumTitle = styled.input`
	width: 40%;
	color: var(--color-lightgray);
	background: black;
	margin: 3%;
	&:focus {
		outline: 3px solid var(--color-middlepurple);
	}

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export const MultiAlbumWritingDescription = styled.textarea`
	width: 40%;
	height: 50%;
	color: var(--color-lightgray);
	background: black;

	&:focus {
		outline: 3px solid var(--color-middlepurple);
	}

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export const MultiAlbumSubmitButton = styled(MiddlePurpleButton)`
	width: 20%;
	height: 30px;
	font-family: var(--font-googleGugi);

	@media screen and (max-width: 768px) {
		width: 100px;
	}
`;

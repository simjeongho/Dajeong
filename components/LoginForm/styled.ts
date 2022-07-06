import { MiddlePurpleButton } from "./../../shared/component/MiddlePurpleButton/styled";
import styled from "styled-components";

export const LoginFormContainer = styled.div`
	background-color: black;
`;

export const LoginFormForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
`;

export const LoginFormInputLabel = styled.label`
	position: relative;
	right: 30%;
	font-family: var(--font-Dongle);
	font-size: 2rem;
`;

export const LoginFormInput = styled.input`
	width: 60%;
	border-radius: 10px;
	margin-top: 1.5rem;
	margin-bottom: 2rem;

	&:hover {
		border: 3px solid var(--color-middlepurple);
	}
	&:focus {
		outline: 3px solid var(--color-middlepurple);
	}
`;

export const LoginFormSubmitButton = styled(MiddlePurpleButton)`
	font-family: var(--font-Dongle);
	font-size: 2rem;
`;

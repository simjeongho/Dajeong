import styled from "styled-components";
import { ring } from "shared/style/styled";

export const NeonRoundButton = styled.button`
	font-family: var(--font-Dongle);
	position: relative;
	border: none;
	min-width: 200px;
	min-height: 50px;
	background: var(--color-neon);
	border-radius: 1000px;
	color: white;
	font-size: 1.5rem;
	cursor: pointer;
	box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
	font-weight: 700;
	transition: 0.3s;
	z-index: 1000;

	&:hover {
		transform: scale(1.1);
	}
	&:hover:after {
		content: "";
		width: 200px;
		height: 200px;
		border-radius: 100%;
		border: 6px solid #00ffcb;
		position: absolute;
		z-index: -1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation-name: ring;
		animation: ${ring} 1.5s infinite;
	}
`;

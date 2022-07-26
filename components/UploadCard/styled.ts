import Image from "next/image";
import styled from "styled-components";

export const ShowImages = styled.div`
	width: 100%;
`;

export const UploadCardContainer = styled.div`
	width: 100%;
	margin: auto;
`;

export const UploadImage = styled(Image)`
	width: 100%;
`;

export const Deletebutton = styled.button`
	background-color: black;
	font-family: var(--font-Dongle);
	font-size: 1.2rem;
	color: white;
	&:hover {
		cursor: pointer;
	}
`;

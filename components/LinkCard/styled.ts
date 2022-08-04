import Image from "next/image";
import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	&:hover {
		transform: scale(1.05);
	}
`;

export const CardImageWrapper = styled.div`
	width: 100%;
	height: auto;
`;

export const CardImage = styled(Image)`
	object-fit: cover;
	border-radius: 4px;
`;

export const CardInfo = styled.div`
	text-align: center;
	width: 100%;
	background-color: var(--color-deepgray);
	border-radius: 7px;
`;

export const CardTitle = styled.h4`
	color: white;
	font-size: 1.5rem;
	font-weight: 500;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 22px;
	margin-bottom: 3px;
	white-space: nowrap;
	max-width: 200px;
	font-family: var(--font-crown);
`;

export const CardKeyWord = styled.div`
	color: var(--color-lightgray);
	padding-bottom: 1px;
	font-size: 1rem;
	font-weight: 400;
`;

export const CardAverage = styled.div`
	color: #74747b;
	font-size: 13px;
	font-weight: 400;
	margin-top: 5px;
	display: flex;
	align-items: cemter;
`;

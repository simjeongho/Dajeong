import { Link } from "react-router-dom";
import styled from "styled-components";
export const StyledLink = styled(Link)`
	text-decoration: none;
	display: block;
	margin-inline: 10px;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export const CardImageWrapper = styled.div`
	width: 100%;
	height: 300px;
`;

export const CardImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 4px;
`;

export const CardInfo = styled.div`
	text-align: left;
	width: 100%;
`;

export const CardTitle = styled.h4`
	color: #292a32;
	font-size: 16px;
	font-weight: 500;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 22px;
	margin-bottom: 3px;
	white-space: nowrap;
	max-width: 200px;
`;

export const CardKeyWord = styled.div`
	color: #292a32;
	padding-bottom: 1px;
	font-size: 14px;
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

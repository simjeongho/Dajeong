import styled from "styled-components";

export const CommentsListContainer = styled.div`
	background-color: var(--color-deepgray);
	border-radius: 10px;
`;

export const CommentList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
`;

export const CommentItem = styled.div`
	width: 100%;
	list-style: none;
	color: white;
	display: flex;
	justify-content: space-around;

	border-radius: 10px;
	box-shadow: 1px 1px gray;
	& > h1 {
		color: white;
		font-size: 1.2rem;
	}

	& > h3 {
		color: white;
		font-size: 1rem;
	}

	& > h2 {
		width: 40%;
		color: white;
		font-size: 1rem;
	}
`;

export const CommentDeleteFix = styled.div`
	align-self: flex-end;
`;

export const CommentDelete = styled.button``;

export const CommentFix = styled.div``;

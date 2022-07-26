import { CommentFormContainer, CommentFormInput, CommentForm, SubmitButton } from "./styled";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
import { useRouter } from "next/router";
import axios from "axios";
import { API_HOST } from "apis/api";
const CommentForms = () => {
	const [comment, setComment] = useState<string>("");
	const userSelector = useSelector(selectUser);
	const router = useRouter();
	const id = router.query.id;
	const { userId } = userSelector;
	const handleCommentText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.preventDefault();
		setComment(e.target.value);
	};

	const handleSubmitCommentForm = (e: React.FormEvent<HTMLFormElement>) => {
		const data = {
			userId: userId,
			PostId: id,
			content: comment,
		};
		console.log("submit!");
		axios.post(`${API_HOST}/comment/multiAlbum/${id}`, data, { withCredentials: true }).then((res) => {
			console.log(res);
		});
	};
	return (
		<CommentFormContainer>
			<CommentForm onSubmit={handleSubmitCommentForm}>
				<CommentFormInput placeholder="댓글을 입력해주세요" onChange={handleCommentText}></CommentFormInput>
				<SubmitButton type="submit">댓글 작성</SubmitButton>
			</CommentForm>
		</CommentFormContainer>
	);
};

export default CommentForms;

import { CommentFormContainer, CommentForm, SubmitButton, CommentFormInput } from "./styled";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
import { useRouter } from "next/router";
import useSubmitComment, { CommentSubmit } from "apis/comment";
const CommentForms = () => {
	const router = useRouter();
	const id = router.query.id;
	const userSelector = useSelector(selectUser);
	const { userId } = userSelector;
	const [comment, setComment] = useState<string>("");
	const [commentData, setCommentData] = useState<CommentSubmit>({
		userId: userId,
		PostId: id ? id : "",
		content: comment,
	});
	const submitCommentQuery = useSubmitComment(id ? id : "", commentData);

	const commentRef = useRef<HTMLInputElement>(null);
	const handleCommentText = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setComment(e.target.value);
		setCommentData({
			userId: userId,
			PostId: id ? id : "",
			content: e.target.value,
		});
	};

	const handleSubmitCommentForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (id) {
			submitCommentQuery.mutate();
			setComment("");
		} else {
			alert("댓글 작성에 실패했습니다");
		}
	};
	return (
		<CommentFormContainer>
			<CommentForm onSubmit={handleSubmitCommentForm}>
				<CommentFormInput
					placeholder="댓글을 입력해주세요"
					onChange={handleCommentText}
					ref={commentRef}
					value={comment}
				></CommentFormInput>
				<SubmitButton type="submit">댓글 작성</SubmitButton>
			</CommentForm>
		</CommentFormContainer>
	);
};

export default CommentForms;

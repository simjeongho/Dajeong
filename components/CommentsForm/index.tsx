import { CommentFormContainer, CommentFormInput, CommentForm } from "./styled";

const CommentForms = () => {
	return (
		<CommentFormContainer>
			<CommentForm>
				<CommentFormInput type="text" placeholder="댓글을 입력해주세요"></CommentFormInput>
			</CommentForm>
		</CommentFormContainer>
	);
};

export default CommentForms;

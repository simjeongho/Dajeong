import axios from "axios";
import React, { useState } from "react";
import { Background } from "shared/component/styled";
import { CustomQuillEditor, QuillFormContainer, QuillSubmitButton, QuillSubmitForm } from "./styled";

const WritingPostsPage = () => {
	const [content, setContent] = useState("");
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setContent("");

		const data = {
			content: content,
		}

		axios.post('api/blog/createPost', data)
		.then()
	};
	return (
		<div>
			<QuillFormContainer>
				<CustomQuillEditor />
			</QuillFormContainer>
			<QuillSubmitForm>
				<QuillSubmitButton>submit</QuillSubmitButton>
			</QuillSubmitForm>
		</div>
	);
};

export default WritingPostsPage;

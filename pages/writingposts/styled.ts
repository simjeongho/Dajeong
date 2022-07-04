import ServerSideQuillEditor from "components/ServerSideQuill";
import { MiddlePurpleButton } from "shared/component/MiddlePurpleButton/styled";
import styled from "styled-components";
export const QuillFormContainer = styled.div`
	height: 100%;
	width: 100%;
`;
export const CustomQuillEditor = styled(ServerSideQuillEditor)`
	height: 50vh;
`;

export const QuillSubmitForm = styled.form``;

export const QuillSubmitButton = styled(MiddlePurpleButton)`
	width: 10%;
	cursor: Pointer;
`;

import React, { useCallback, useState } from "react";
import {
	LoginFormContainer,
	LoginFormForm,
	LoginFormInput,
	LoginFormInputLabel,
	LoginFormSubmitButton,
} from "./styled";
import { useDispatch } from "react-redux";
import { userLogin } from "store/slices/user-slice";
import { useRouter } from "next/router";

const LoginForm = () => {
	const [id, setId] = useState<String>("");
	const [password, setPassword] = useState<String>("");
	const dispatch = useDispatch();
	const Router = useRouter();

	const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setId(e.target.value);
	}, []);
	const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	}, []);
	const handleSubmitForm = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			console.log(id, password);
			dispatch(userLogin());
			Router.push({
				pathname: "/",
				query: {
					login_success: "true",
				},
			});
		},
		[id, password],
	);
	return (
		<LoginFormContainer>
			<LoginFormForm onSubmit={handleSubmitForm}>
				<LoginFormInputLabel htmlFor="loginId">아이디</LoginFormInputLabel>
				<LoginFormInput
					type="text"
					name="loginId"
					id="loginId"
					onChange={onChangeId}
					placeholder="아이디를 입력하세요"
				></LoginFormInput>
				<LoginFormInputLabel htmlFor="loginPassword">비밀번호</LoginFormInputLabel>
				<LoginFormInput
					type="text"
					name="loginPassword"
					id="loginPassword"
					onChange={onChangePassword}
					placeholder="비밀번호를 입력하세요"
				></LoginFormInput>
				<LoginFormSubmitButton type="submit">로그인</LoginFormSubmitButton>
			</LoginFormForm>
		</LoginFormContainer>
	);
};

export default LoginForm;

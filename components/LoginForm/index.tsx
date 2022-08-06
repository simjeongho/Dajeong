import React, { useCallback, useState } from "react";
import {
	LoginFormContainer,
	LoginFormForm,
	LoginFormInput,
	LoginFormInputLabel,
	LoginFormSubmitButton,
} from "./styled";
import { useDispatch } from "react-redux";
import { userLogin, setUserData } from "store/slices/user-slice";
import { useRouter } from "next/router";
import AuthService from "apis/Auth/auth-service";
import { LoginRequest } from "apis/Auth/types";

const authService = new AuthService();

const LoginForm = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const dispatch = useDispatch();
	const Router = useRouter();

	const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	}, []);
	const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	}, []);
	const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data: LoginRequest = {
			email: email,
			password: password,
		};
		const { statusCode, userData } = await authService.login(data);
		if (statusCode >= 400) {
			return;
		}
		if (statusCode === 200) {
			dispatch(userLogin());
			dispatch(setUserData(userData));
			Router.push({
				pathname: "/",
				query: {
					signin_success: "true",
				},
			});
		}
	};
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
					type="password"
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

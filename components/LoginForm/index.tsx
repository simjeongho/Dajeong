import React, { useCallback, useState } from "react";
import {
	LoginFormContainer,
	LoginFormForm,
	LoginFormInput,
	LoginFormInputLabel,
	LoginFormPasswordInput,
	LoginFormSubmitButton,
} from "./styled";

const LoginForm = () => {
	const [id, setId] = useState<String>("");
	const [password, setPassword] = useState<String>("");
	const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setId(e.target.value);
	}, []);

	const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	}, []);
	return (
		<LoginFormContainer>
			<LoginFormForm>
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
				<LoginFormSubmitButton>로그인</LoginFormSubmitButton>
			</LoginFormForm>
		</LoginFormContainer>
	);
};

export default LoginForm;

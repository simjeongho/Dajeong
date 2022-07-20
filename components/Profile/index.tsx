import {
	LogOutButton,
	ProfileContainer,
	ProfileDescriptionContainer,
	ProfileDream,
	ProfileImage,
	ProfileImageContainer,
	ProfileUploadButton,
	ProfileUploadForm,
	ProfileUploadInput,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
import { IoLogOutOutline } from "react-icons/io5";
import axios from "axios";
import { userLogout } from "store/slices/user-slice";
import { API_HOST } from "apis/api";
import { useRouter } from "next/router";
import React, { useMemo, useRef } from "react";
import { ProfileImageType } from "types/Profile";
import { useState } from "react";
const UserProfile = () => {
	const userSelector = useSelector(selectUser);
	const { email, userNickName, userId } = userSelector;
	const [ProfileImage, setProfileImage] = useState<ProfileImageType | null>(null);
	const dispatch = useDispatch();
	const Router = useRouter();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleFileInput = () => {
		fileInputRef.current?.click();
	};
	const handleLogOut = () => {
		try {
			axios.post(`${API_HOST}/user/logout`, {}, { withCredentials: true }).then((res) => {
				console.log(res);
				dispatch(userLogout());
				Router.replace({
					pathname: "/",
				});
			});
		} catch (err) {
			console.log(err);
		}
	};

	const UploadProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const fileList = e.target.files;
		if (fileList && fileList[0]) {
			const url = URL.createObjectURL(fileList[0]);
			setProfileImage({
				file: fileList[0],
				src: url,
				userId: userId,
			});
		}
	};

	const showImages = useMemo(() => {
		if (!ProfileImage && ProfileImage == null) {
		}
	}, [ProfileImage]);
	return (
		<ProfileContainer>
			<ProfileUploadForm>
				<ProfileImageContainer onClick={handleFileInput}>
					프로필을 변경하려면 여기를 클릭하세요
					<ProfileUploadInput
						ref={fileInputRef}
						type="file"
						name="profileImage"
						id="profileImage"
						hidden
					></ProfileUploadInput>
				</ProfileImageContainer>
				<ProfileUploadButton>프로필 변경</ProfileUploadButton>
			</ProfileUploadForm>

			<ProfileDescriptionContainer>
				<h1>{userNickName}</h1>
				<h2>{email}</h2>
				<LogOutButton onClick={handleLogOut}>
					<IoLogOutOutline />
					LogOut
				</LogOutButton>
				<ProfileDream></ProfileDream>
			</ProfileDescriptionContainer>
		</ProfileContainer>
	);
};

export default UserProfile;

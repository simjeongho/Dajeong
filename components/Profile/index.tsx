import {
	LogOutButton,
	ProfileContainer,
	ProfileDescriptionContainer,
	ProfileDream,
	ProfileImageTag,
	ProfileImageContainer,
	ProfileUploadButton,
	ProfileUploadForm,
	ProfileUploadInput,
	ProfileDescriptionUploadForm,
	ProfileDescriptionTextArea,
	ProfileDescriptionLabel,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
import { IoLogOutOutline } from "react-icons/io5";
import axios from "axios";
import { changeProfileImage, userLogout } from "store/slices/user-slice";
import { API_HOST } from "apis/api";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { ProfileImageType } from "types/Profile";
import { useState } from "react";
import { changeDescription } from "apis/profile";
const UserProfile = () => {
	const userSelector = useSelector(selectUser);
	const { email, userNickName, userId, userProfileImage } = userSelector;
	const [ProfileImage, setProfileImage] = useState<ProfileImageType | null>({
		src: userProfileImage,
		file: null,
		userId: userId,
	});
	const [userDescription, setUserDescription] = useState<string>("");
	const dispatch = useDispatch();
	const router = useRouter();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleFileInput = () => {
		fileInputRef.current?.click();
	};
	const handleLogOut = () => {
		try {
			axios.post(`${API_HOST}/user/logout`, {}, { withCredentials: true }).then((res) => {
				dispatch(userLogout());
				router.replace({
					pathname: "/",
				});
			});
		} catch (err) {
			console.log(err);
		}
	};

	const uploadProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const fileList = e.target.files;
		if (fileList && fileList[0]) {
			const url = URL.createObjectURL(fileList[0]);
			setProfileImage({
				file: fileList[0],
				src: url,
				userId: userId,
			});
		}
		console.log(ProfileImage);
	};

	const handleSubmitUserProfile = (e: React.FormEvent<HTMLFormElement>) => {
		const formdata = new FormData();
		if (ProfileImage) {
			formdata.append("profileImageSrc", ProfileImage.src);
			formdata.append("profileImage", ProfileImage.file ? ProfileImage.file : "");
			formdata.append("userId", String(ProfileImage.userId));
			try {
				axios.post(`${API_HOST}/user/profileImage`, formdata, { withCredentials: true }).then((res) => {
					console.log("profileImageSuccess ", res);
					const newProfile = {
						userProfileImage: res.data,
					};
					dispatch(changeProfileImage(newProfile));
					router.reload();
				});
			} catch (err) {
				console.log(err);
			}
		}
	};

	const showImages = useMemo(() => {
		if (!ProfileImage || ProfileImage == null || !userProfileImage) {
			return (
				<ProfileImageContainer onClick={handleFileInput}>프로필을 변경하려면 여기를 클릭하세요</ProfileImageContainer>
			);
		} else {
			return (
				<ProfileImageContainer onClick={handleFileInput}>
					<ProfileImageTag src={ProfileImage.src} alt={ProfileImage.src} width={300} height={400} />
				</ProfileImageContainer>
			);
		}
	}, [ProfileImage]);

	const handleChangeDescription = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.preventDefault();
		setUserDescription(e.target.value);
	}, []);

	const handleSubmitDesctiption = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			profileDescription: userDescription,
			userId: userId,
		};
		changeDescription(data);
		router.reload();
	};
	return (
		<ProfileContainer>
			<ProfileUploadForm onSubmit={handleSubmitUserProfile}>
				{showImages}
				<ProfileUploadInput
					ref={fileInputRef}
					type="file"
					name="profileImage"
					id="profileImage"
					hidden
					onChange={uploadProfileImage}
				></ProfileUploadInput>
				<ProfileUploadButton type="submit">프로필 변경</ProfileUploadButton>
			</ProfileUploadForm>

			<ProfileDescriptionContainer>
				<h1>{userNickName}</h1>
				<h2>{email}</h2>
				<LogOutButton onClick={handleLogOut}>
					<IoLogOutOutline />
					LogOut
				</LogOutButton>
				<ProfileDescriptionUploadForm onSubmit={handleSubmitDesctiption}>
					<ProfileDescriptionLabel>자기 소개를 적어보세요</ProfileDescriptionLabel>
					<ProfileDescriptionTextArea onChange={handleChangeDescription} />
					<button type="submit">자기소개 변경</button>
				</ProfileDescriptionUploadForm>
				<ProfileDream></ProfileDream>
			</ProfileDescriptionContainer>
		</ProfileContainer>
	);
};

export default UserProfile;

import {
	LogOutButton,
	ProfileContainer,
	ProfileDescriptionContainer,
	ProfileImageTag,
	ProfileImageContainer,
	ProfileUploadButton,
	ProfileUploadForm,
	ProfileUploadInput,
	ProfileDescriptionUploadForm,
	ProfileDescriptionTextArea,
	ProfileDescriptionLabel,
	ProfileDescriptionDiv,
	ChangeDescriptionButton,
	EditProfileDescription,
	EditProfileDescriptionIcons,
	CustomCollapse,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
import { IoLogOutOutline } from "react-icons/io5";
import axios from "axios";
import { changeProfileImage, userLogout } from "store/slices/user-slice";
import { API_HOST } from "apis/api";
import { useRouter } from "next/router";
import React, { useCallback, useMemo, useRef } from "react";
import { ProfileImageType } from "types/Profile";
import { useState } from "react";
import {
	changeDescription,
	changeNickname,
	changeProfileImageAxios,
	changeProfileImageType,
	useChangeDescription,
	useChangeNickName,
	useChangeProfileImage,
	useGetProfile,
} from "apis/profile";
import { FiEdit } from "react-icons/fi";
import { TbTriangleInverted } from "react-icons/tb";
import { Collapse } from "antd";
import ShowLiked from "components/ShowLiked";

const UserProfile = () => {
	const userSelector = useSelector(selectUser);
	const { email, userId, userProfileImage } = userSelector;
	const [ProfileImage, setProfileImage] = useState<ProfileImageType | null>({
		src: userProfileImage,
		file: null,
		userId: userId,
	});
	const [changeProfile, setChangeProfile] = useState<changeProfileImageType>({
		profileImageSrc: "",
		profileImage: null,
		userId: userId,
	});
	const [newDescription, setNewDescription] = useState<string>("");
	const [newNickname, setNewNickname] = useState<string>("");
	const dispatch = useDispatch();
	const router = useRouter();
	const { Panel } = Collapse;
	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleFileInput = () => {
		fileInputRef.current?.click();
	};
	const { data, isLoading } = useGetProfile(userId);
	const changeProfileImageQuery = useChangeProfileImage(userId ? userId : "", changeProfile);
	const changeDescriptionQuery = useChangeDescription(userId ? userId : "", {
		profileDescription: newDescription,
		userId: userId,
	});
	const changeNickNameQuery = useChangeNickName(userId ? userId : "", { newNickName: newNickname, userId: userId });
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
			setChangeProfile({
				profileImageSrc: url,
				profileImage: fileList[0],
				userId: userId,
			});
		}
	};

	const handleSubmitUserProfile = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (ProfileImage?.file) {
			const data: changeProfileImageType = {
				profileImageSrc: ProfileImage?.src ? ProfileImage.src : "",
				profileImage: ProfileImage?.file,
				userId: userId,
			};
			const newProfile = changeProfileImageAxios(data);
			dispatch(changeProfileImage(newProfile));
			changeProfileImageQuery.mutate();
		}
	};

	const showImages = useMemo(() => {
		if (!data || isLoading || data.data.profileImage === null || !ProfileImage) {
			console.log("empty");
			return (
				<ProfileImageContainer onClick={handleFileInput}>프로필을 변경하려면 여기를 클릭하세요</ProfileImageContainer>
			);
		} else {
			return (
				<ProfileImageContainer onClick={handleFileInput}>
					<ProfileImageTag src={data.data.profileImage} alt={data.data.profileImage} width={300} height={400} />
				</ProfileImageContainer>
			);
		}
	}, []);

	const handleChangeNickname = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.preventDefault();
		setNewNickname(e.target.value);
	}, []);

	const handleSubmitNickname = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			newNickName: newNickname,
			userId: userId,
		};
		changeNickname(data);
		changeNickNameQuery.mutate();
	};

	const handleChangeDescription = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.preventDefault();
		setNewDescription(e.target.value);
	}, []);

	const handleSubmitDesctiption = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			profileDescription: newDescription,
			userId: userId,
		};
		changeDescription(data);
		changeDescriptionQuery.mutate();
	};
	return (
		<>
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
					<h1>{data?.data.nickname}</h1>
					<h2>{email}</h2>
					<LogOutButton onClick={handleLogOut}>
						<IoLogOutOutline />
						LogOut
					</LogOutButton>
					<EditProfileDescription>
						<ProfileDescriptionDiv>{data?.data.profileDescription}</ProfileDescriptionDiv>
						<EditProfileDescriptionIcons>
							<FiEdit />
							<TbTriangleInverted />
						</EditProfileDescriptionIcons>
					</EditProfileDescription>
					<CustomCollapse defaultActiveKey={["1"]}>
						<Panel header="닉네임 변경" key="1">
							<ProfileDescriptionUploadForm onSubmit={handleSubmitNickname}>
								<ProfileDescriptionLabel>변경할 닉네임을 적어보세요</ProfileDescriptionLabel>
								<ProfileDescriptionTextArea onChange={handleChangeNickname} />
								<ChangeDescriptionButton type="submit">닉네임 변경</ChangeDescriptionButton>
							</ProfileDescriptionUploadForm>
						</Panel>
						<Panel header="자기소개 변경" key="2">
							<ProfileDescriptionUploadForm onSubmit={handleSubmitDesctiption}>
								<ProfileDescriptionLabel>자기 소개를 적어보세요</ProfileDescriptionLabel>
								<ProfileDescriptionTextArea onChange={handleChangeDescription} />
								<ChangeDescriptionButton type="submit">자기소개 변경</ChangeDescriptionButton>
							</ProfileDescriptionUploadForm>
						</Panel>
					</CustomCollapse>
				</ProfileDescriptionContainer>
			</ProfileContainer>
			<ShowLiked></ShowLiked>
		</>
	);
};

export default UserProfile;

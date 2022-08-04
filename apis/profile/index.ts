import { API_HOST } from "apis/api";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

export type ChangeDescriptionType = {
	profileDescription: string | null;
	userId: string | number;
};

export type ChangeNicknameType = {
	newNickName: string | null;
	userId: string | number;
};

type GetProfileAxiosType = {
	createdAt: string;
	email: string;
	id: number | string;
	nickname: string;
	profileDescription: string | null;
	profileImage: string | null;
	updatedAt: string | number;
};

export type changeProfileImageType = {
	profileImageSrc: string;
	profileImage: File | null;
	userId: string;
};

export const changeDescription = async (data: ChangeDescriptionType) => {
	await axios.post(`${API_HOST}/user/description`, data, { withCredentials: true }).then((res) => {});
};

export const changeNickname = async (data: ChangeNicknameType) => {
	await axios.post(`${API_HOST}/user/nickname`, data, { withCredentials: true }).then((res) => {});
};

export const changeProfileImageAxios = async (data: changeProfileImageType) => {
	const formdata = new FormData();
	if (data.profileImage) {
		formdata.append("profileImageSrc", data.profileImageSrc);
		formdata.append("profileImage", data.profileImage);
		formdata.append("userId", String(data.userId));
		try {
			await axios.post(`${API_HOST}/user/profileImage`, formdata, { withCredentials: true }).then((res) => {
				const newProfile = {
					userProfileImage: res.data,
				};
				return newProfile;
			});
		} catch (err) {
			console.log(err);
		}
	}
};

export const useChangeProfileImage = (id: string | string[] | number, data: changeProfileImageType) => {
	const queryClient = useQueryClient();
	const formdata = new FormData();
	if (data.profileImage) {
		formdata.append("profileImageSrc", data.profileImageSrc);
		formdata.append("profileImage", data.profileImage);
		formdata.append("userId", String(data.userId));
	}
	return useMutation(() => axios.post(`${API_HOST}/user/profileImage`, formdata, { withCredentials: true }), {
		onSuccess: () => {
			queryClient.invalidateQueries(["getProfile", id]);
		},
	});
};
export const useChangeDescription = (id: string | string[] | number, data: ChangeDescriptionType) => {
	const queryClient = useQueryClient();
	return useMutation(() => axios.post(`${API_HOST}/user/description`, data, { withCredentials: true }), {
		onSuccess: () => {
			queryClient.invalidateQueries(["getProfile", id]);
		},
	});
};

export const useChangeNickName = (id: string | string[] | number, data: ChangeNicknameType) => {
	const queryClient = useQueryClient();
	return useMutation(() => axios.post(`${API_HOST}/user/nickname`, data, { withCredentials: true }), {
		onSuccess: () => {
			queryClient.invalidateQueries(["getProfile", id]);
		},
	});
};

export const getProfile = (id: string | string[] | number) =>
	axios.get(`${API_HOST}/user/profile/${id}`, { withCredentials: true });

export const useGetProfile = (id: string | string[] | number) => {
	const queryFn = () => getProfile(id);
	return useQuery<AxiosResponse<GetProfileAxiosType>, AxiosError>(["getProfile", id], queryFn);
};

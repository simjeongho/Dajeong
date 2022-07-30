import { API_HOST } from "apis/api";
import axios from "axios";
import { useRouter } from "next/router";

type ChangeDescriptionType = {
	profileDescription: string | null;
	userId: string | number;
};

type ChangeNicknameType = {
	newNickName: string | null;
	userId: string | number;
};
export const changeDescription = async (data: ChangeDescriptionType) => {
	await axios.post(`${API_HOST}/user/description`, data, { withCredentials: true }).then((res) => {});
};

export const changeNickname = async (data: ChangeNicknameType) => {
	await axios.post(`${API_HOST}/user/nickname`, data, { withCredentials: true }).then((res) => {});
};

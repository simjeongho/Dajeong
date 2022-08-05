import { API_HOST } from "./../api";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useQuery } from "react-query";

type RecentImage = {
	src: string;
};

type RecentLiker = {
	id: number;
	profileImage: string | null;
	nickname: string;
};

export type RecentListType = {
	id: number;
	title: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	UserId: number;
	RetweetId: number;
	Images: RecentImage[];
	Likers: RecentLiker[];
};

export const getRecentAlbumList = () => axios.get(`${API_HOST}/multiAlbum/getRecentList`);
const useGetRecentList = () => {
	return useQuery<AxiosResponse<RecentListType[]>, AxiosError>("getRecentList", getRecentAlbumList);
};

export default useGetRecentList;

import { API_HOST } from "apis/api";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";

export type multiAlbumImage = {
	src: string;
	PostId: string;
	RetweetId: number | null;
};
export type Usernickname = {
	nickname: string;
};
export type GetmultiAlbumPost = {
	Images: multiAlbumImage[];
	User: Usernickname;
	content: string;
	createAt: string;
	id: number;
	title: string;
	updatedAt: string;
};

export type multiAlbumPostAxios = {
	multiAlbumList: GetmultiAlbumPost[];
};

const getMultiAlbumList = () => axios.get(`${API_HOST}/multiAlbum/getList`, { withCredentials: true });

const useGetMultiAlbumList = () => {
	return useQuery<AxiosResponse<multiAlbumPostAxios>, AxiosError>("getMultiAlbumList", getMultiAlbumList);
};

export default useGetMultiAlbumList;

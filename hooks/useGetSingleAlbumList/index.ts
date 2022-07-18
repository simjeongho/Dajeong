import { API_HOST } from "apis/api";
import axios, { AxiosError, AxiosResponse } from "axios";
import { singleAlbumPost } from "pages/Album";
import { useQuery } from "react-query";
export type singleAlbumPostAxios = {
	singleAlbumList: singleAlbumPost[];
};

const getSingleAlbumList = () => axios.get(`${API_HOST}/singleAlbum/getList`, { withCredentials: true });

const useGetSingleAlbumList = () => {
	return useQuery<AxiosResponse<singleAlbumPostAxios>, AxiosError>("getSingleAlbumList", getSingleAlbumList);
};

export default useGetSingleAlbumList;

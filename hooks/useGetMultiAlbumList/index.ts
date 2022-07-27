import { API_HOST } from "apis/api";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { multiAlbumPostAxios } from "types/multiAlbum";
export const getMultiAlbumList = () => axios.get(`${API_HOST}/multiAlbum/getList`, { withCredentials: true });

const useGetMultiAlbumList = () => {
	return useQuery<AxiosResponse<multiAlbumPostAxios>, AxiosError>("getMultiAlbumList", getMultiAlbumList);
};

export default useGetMultiAlbumList;

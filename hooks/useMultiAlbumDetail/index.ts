import { API_HOST } from "./../../apis/api";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useQuery } from "react-query";
import { multiAlbumDetailAxios } from "types/multiAlbum";
export const getMultiAlbumDetail = (id: string | string[] | number) =>
	axios.get(`${API_HOST}/multiAlbum/${id}`, { withCredentials: true });

const useGetMultiAlbumDetail = (id: string | string[] | number) => {
	const queryFn = () => getMultiAlbumDetail(id);
	return useQuery<AxiosResponse<multiAlbumDetailAxios>, AxiosError>(["multiAlbumDetail", id], queryFn);
};

export default useGetMultiAlbumDetail;

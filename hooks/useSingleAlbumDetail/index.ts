import { API_HOST } from "./../../apis/api";
import { singleAlbumDetailAxios } from "types/singleAlbum";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useQuery } from "react-query";

export const getSingleAlbumDetail = (postNum: string | string[]) =>
	axios.get(`${API_HOST}/singleAlbum/getDetail/${postNum}`, { withCredentials: true });

const useGetSingleAlbumDetail = (postNum: string | string[]) => {
	const queryFn = () => getSingleAlbumDetail(postNum);
	return useQuery<AxiosResponse<singleAlbumDetailAxios>, AxiosError>(["singleAlbumDetail", postNum], queryFn);
};

export default useGetSingleAlbumDetail;

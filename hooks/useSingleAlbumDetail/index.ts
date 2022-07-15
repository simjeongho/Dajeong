import { singleAlbumPost } from "pages/Album";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useQuery } from "react-query";

export type singleAlbumDetailAxios = {
	singleAlbumDetail: singleAlbumPost;
};

const getSingleAlbumDetail = (postNum: string | string[]) =>
	axios.get(`http://localhost:5000/singleAlbum/getDetail/${postNum}`, { withCredentials: true });

const useGetSingleAlbumDetail = (postNum: string | string[]) => {
	const queryFn = () => getSingleAlbumDetail(postNum);
	return useQuery<AxiosResponse<singleAlbumDetailAxios>, AxiosError>(["singleAlbumDetail", postNum], queryFn);
};

export default useGetSingleAlbumDetail;

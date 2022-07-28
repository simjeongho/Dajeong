import { API_HOST } from "./../../apis/api";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useQuery } from "react-query";
import { Comments } from "types/Comments";

export const getMultiAlbumComment = (id: string | string[] | number) =>
	axios.get(`${API_HOST}/comment/multiAlbum/${id}`, { withCredentials: true });

const useGetMultiAlbumComment = (id: string | string[] | number) => {
	const queryFn = () => getMultiAlbumComment(id);
	return useQuery<AxiosResponse<Comments>, AxiosError>(["multiAlbumComment", id], queryFn);
};

export default useGetMultiAlbumComment;

import { API_HOST } from "apis/api";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export type CommentSubmit = {
	userId: any;
	PostId: string | string[];
	content: string;
};
export const SubmitComment = (id: string | string[], data: CommentSubmit) => {
	return axios.post(`${API_HOST}/comment/multiAlbum/${id}`, data, { withCredentials: true });
};

const useSubmitComment = (id: string | string[], data: CommentSubmit) => {
	const queryClient = useQueryClient();
	return useMutation(() => axios.post(`${API_HOST}/comment/multiAlbum/${id}`, data, { withCredentials: true }), {
		onSuccess: () => {
			queryClient.invalidateQueries(["multiAlbumComment", id]);
		},
	});
};

export default useSubmitComment;

import { API_HOST } from "apis/api";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export const GetAllMultiAlbum = async ({ page = 1 }) => await axios.get(`${API_HOST}/multiAlbum/${page}`);

type SubmitLike = {
	PostId: string | number;
	UserId: string | number;
};

export const useLikePost = (id: string | number, data: SubmitLike) => {
	const queryClient = useQueryClient();
	return useMutation(() => axios.patch(`${API_HOST}/multiAlbum/${id}/like`, data, { withCredentials: true }), {
		onSuccess: () => {
			queryClient.invalidateQueries(["multiAlbumDetail", id]);
		},
	});
};

export const useLikedPosts = (id: string | number) => {};

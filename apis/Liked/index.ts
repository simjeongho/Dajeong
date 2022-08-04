import { useQuery } from "react-query";
import { API_HOST } from "./../api";
import axios, { AxiosResponse, AxiosError } from "axios";

type LikedPostsImage = {
	src: string;
};
type LikedPostsLike = {
	PostId: number;
	UserId: number;
	createdAt: string;
	updatedAt: string;
};

type LikedPostsWriter = {
	id: number;
	nickname: string;
	profileImage: string | null;
};

type LikedPosts = {
	Images: LikedPostsImage[];
	Like: LikedPostsLike;
	RetweetId: number | null;
	User: LikedPostsWriter;
	UserId: number;
	content: string;
	createdAt: string;
	id: number;
	title: string;
	updatedAt: string;
};
export type UserLikedPost = {
	Liked: LikedPosts[] | null;
	id: number;
	nickname: string;
	profileDescription: string | null;
	profileImage: string | null;
};

const getLikedPosts = (id: number | string) =>
	axios.get(`${API_HOST}/multiAlbum/likes/${id}`, { withCredentials: true });

const useGetLikedPosts = (id: number | string) => {
	const queryFn = () => getLikedPosts(id);
	return useQuery<AxiosResponse<UserLikedPost>, AxiosError>(["getLikedPosts", id], queryFn);
};

export default useGetLikedPosts;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsData } from "apis/Auth/types";
type LikedPost = {
	id: number;
	title: string;
};
type WritedPost = {
	RetweetId: null | number;
	UserId: number;
	content: string | null;
	createdAt: string;
	id: number;
	title: string;
	updatedAt: string;
};
type InitialState = {
	likedPosts: LikedPost[] | null;
	writedPosts: WritedPost[] | null;
};
const initialState: InitialState = {
	likedPosts: null,
	writedPosts: null,
};

export const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		setPosts(state, action: PayloadAction<PostsData>) {
			state.likedPosts = action.payload.Liked;
			state.writedPosts = action.payload.Posts;
		},
	},
});

export default postSlice;
export const { setPosts } = postSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "apis/Auth/types";

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
	isLogin: boolean;
	isLogging: boolean;
	userNickName: string;
	email: string;
	userId: number | null;
	userProfileImage: string | null;
	userDescription: string | null;
	likedPosts: LikedPost[] | null;
	writedPosts: WritedPost[] | null;
};

const initialState: InitialState = {
	isLogin: false,
	isLogging: false,
	userNickName: "",
	email: "",
	userId: null,
	userProfileImage: null,
	userDescription: null,
	likedPosts: null,
	writedPosts: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userLogin(state) {
			state.isLogin = true;
			state.isLogging = false;
		},
		userLogout(state) {
			state.isLogin = false;
			state.userNickName = "";
			state.email = "";
			state.userId = null;
			state.isLogging = false;
			state.userProfileImage = "";
			state.userDescription = "";
			state.likedPosts = null;
			state.writedPosts = null;
		},
		userLoginRequest(state) {
			state.isLogging = true;
		},
		setUserData(state, action: PayloadAction<UserData>) {
			state.userNickName = action.payload.nickname;
			state.email = action.payload.email;
			state.isLogin = true;
			state.userId = action.payload.userId;
			state.userProfileImage = action.payload.userProfileImage;
			state.userDescription = action.payload.userDescription;
			state.likedPosts = action.payload.Liked;
			state.writedPosts = action.payload.Posts;
		},
		changeProfileImage(state, action) {
			state.userProfileImage = action.payload.userProfileImage;
		},
	},
});

export default userSlice;

export const { userLogin, userLogout, userLoginRequest, setUserData, changeProfileImage } = userSlice.actions;

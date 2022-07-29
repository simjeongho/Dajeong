import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "apis/Auth/types";

type InitialState = {
	isLogin: boolean;
	isLogging: boolean;
	userNickName: string;
	email: string;
	userId: number | null;
	userProfileImage: string | null;
};

const initialState: InitialState = {
	isLogin: false,
	isLogging: false,
	userNickName: "",
	email: "",
	userId: null,
	userProfileImage: null,
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
			state.isLogging = false;
			state.userProfileImage = "";
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
		},
		changeProfileImage(state, action) {
			state.userProfileImage = action.payload.userProfileImage;
		},
	},
});

export default userSlice;

export const { userLogin, userLogout, userLoginRequest, setUserData, changeProfileImage } = userSlice.actions;

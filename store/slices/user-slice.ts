import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "apis/Auth/types";

type InitialState = {
	isLogin: boolean;
	isLogging: boolean;
	usernickName: string;
};

const initialState: InitialState = {
	isLogin: false,
	isLogging: false,
	usernickName: "",
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
			state.usernickName = "";
			state.isLogging = false;
		},
		userLoginRequest(state) {
			state.isLogging = true;
		},
		setUserData(state, action: PayloadAction<UserData>) {
			state.usernickName = action.payload.nickname;
		},
	},
});

export default userSlice;

export const { userLogin, userLogout, userLoginRequest } = userSlice.actions;

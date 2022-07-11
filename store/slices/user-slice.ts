import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
	isLogin: boolean;
	isLogging: boolean;
	userName: string;
};

const initialState: InitialState = {
	isLogin: false,
	isLogging: false,
	userName: "",
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
			state.userName = "";
			state.isLogging = false;
		},
		userLoginRequest(state) {
			state.isLogging = true;
		},
	},
});

export default userSlice;

export const { userLogin, userLogout, userLoginRequest } = userSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
	isLogin: boolean;
	userName: string;
};

const initialState: InitialState = {
	isLogin: false,
	userName: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userLogin(state) {
			state.isLogin = true;
		},
		userLogout(state) {
			state.isLogin = false;
			state.userName = "";
		},
	},
});

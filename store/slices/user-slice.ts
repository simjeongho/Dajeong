import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
	isLogin: boolean;
	userName: null;
};

const initialState: InitialState = {
	isLogin: false,
	userName: null,
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
		},
	},
});

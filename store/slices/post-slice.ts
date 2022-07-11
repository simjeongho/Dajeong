import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
	id: string;
	User: {
		email: string;
		name: string;
	};
	content: string;
};

const initialState: InitialState = {
	id: "",
	User: {
		email: "",
		name: "",
	},
	content: "",
};

export const postSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
});

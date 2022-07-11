import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
	id: string;
	User: {
		id: string;
		name: string;
	};
	content: string;
};

const initialState: InitialState = {
	id: "",
	User: {
		id: "",
		name: "",
	},
	content: "",
};

export const postSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
});

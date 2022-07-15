import { createSlice } from "@reduxjs/toolkit";

type Images = {
	src: string;
};
type Comments = {
	comment: string;
};
type InitialState = {
	id: string;
	me: {
		email: string;
		name: string;
	};
	content: string;
	Images: Images[];
	Comments: Comments[];
};

const initialState: InitialState = {
	id: "",
	me: {
		email: "",
		name: "",
	},
	content: "",
	Images: [],
	Comments: [],
};

export const postSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
});

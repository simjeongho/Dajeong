import { createSlice } from "@reduxjs/toolkit";
type Me = {
	email: string;
	nickname: string;
};
type Images = {
	src: string;
};
type Comments = {
	user: Me;
	comment: string;
};
type MainPosts = {
	id: string;
	me: Me;
	content: string;
	Images: Images[];
	Comments: Comments[];
};
type InitialState = {
	mainPosts: MainPosts[];
	ImagePath: Images[];
	postAdded: boolean;
};

const initialState: InitialState = {
	mainPosts: [
		{
			id: "1",
			me: {
				email: "simjeongho012@gmail.com",
				nickname: "호정",
			},
			content: "요후리",
			Images: [
				{
					src: "http://localhost:3001/public/assets/images/2090122.png",
				},
			],
			Comments: [
				{
					user: {
						email: "simjeongho012@gmail.com",
						nickname: "호정",
					},
					comment: "댓글이에염",
				},
			],
		},
	],
	ImagePath: [],
	postAdded: false,
};

export const postSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addPost(state) {
			//dummy post
		},
	},
});

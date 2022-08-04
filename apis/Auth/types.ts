export type LoginRequest = {
	email: string;
	password: string;
};

export type LikedPost = {
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

export type UserData = {
	userId: number | null;
	nickname: string;
	email: string;
	userProfileImage: string | null;
	userDescription: string | null;
	Liked: LikedPost[] | null;
	Posts: WritedPost[] | null;
};

export type PostsData = {
	Liked: LikedPost[] | null;
	Posts: WritedPost[] | null;
};

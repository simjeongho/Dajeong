export type LoginRequest = {
	email: string;
	password: string;
};

export type UserData = {
	userId: number | null;
	nickname: string;
	email: string;
};

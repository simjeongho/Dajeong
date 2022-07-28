export type CommentUser = {
	nickname: string;
};
export type Comment = {
	PostId: number;
	User: CommentUser;
	UserId: number;
	content: string;
	id: number;
	createdAt: string;
	updatedAt: string;
};

export type Comments = {
	multiAlbumComments: Comment[];
};

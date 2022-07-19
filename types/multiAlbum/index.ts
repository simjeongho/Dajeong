// 전체 리스트 조회
export type multiAlbumImage = {
	src: string;
	PostId: string;
	RetweetId: number | null;
};
export type Usernickname = {
	nickname: string;
};
export type GetmultiAlbumPost = {
	Images: multiAlbumImage[];
	User: Usernickname;
	content: string;
	createAt: string;
	id: number;
	title: string;
	updatedAt: string;
};
export type multiAlbumPostAxios = {
	multiAlbumList: GetmultiAlbumPost[];
};

// detail page
export type DetailComments = {
	PostId: number;
	UserId: number;
	createdAt: string;
	content: string;
};

export type DetailImage = {
	src: string;
	PostId: number;
};

export type DetailUser = {
	nickname: string;
};

export type multiAlbumPost = {
	Comments: DetailComments[] | null;
	Images: DetailImage[] | null;
	User: DetailUser;
	RetweetId: number | null;
	UserId: number;
	content: string;
	createdAt: string;
	id: number;
	title: string;
	updatedAt: string;
};
export type multiAlbumDetailAxios = {
	multiAlbumDetail: multiAlbumPost;
};

export type multiAlbumDetailPage = {
	Images: DetailImage[] | null;
	User: DetailUser;
	content: string;
	createdAt: string;
	title: string;
};

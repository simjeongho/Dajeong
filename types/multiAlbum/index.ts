// 전체 리스트 조회
export type multiAlbumImage = {
	src: string;
	PostId: string;
};
export type Usernickname = {
	nickname: string;
};
export type Liker = {
	id: number;
	nickname: string;
	profileImage: string | null;
};
export type GetmultiAlbumPost = {
	Images: multiAlbumImage[];
	User: Usernickname;
	Likers: Liker[] | null;
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
	profileImage: string | null;
};

export type multiAlbumPost = {
	Comments: DetailComments[] | null;
	Images: DetailImage[] | null;
	Likers: Liker[] | null;
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
	Likers?: Liker[] | null;
	User: DetailUser;
	content: string;
	createdAt: string;
	title: string;
	id: string | number;
};

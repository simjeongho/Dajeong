export type singleAlbumPost = {
	title: string;
	content: string;
	filePath: string;
	postNum: string;
};

export type singleAlbumPostAxios = {
	singleAlbumList: singleAlbumPost[];
};

export type singleAlbumDetailAxios = {
	singleAlbumDetail: singleAlbumPost;
};

import { API_HOST } from "apis/api";
import AllAlbumCard from "components/AllAlbumCard";
import { useInfiniteQuery } from "react-query";
import { AlbumListComponent, AlbumListComponentContainer } from "./styled";
import axios from "axios";
import Link from "next/link";
import { multiAlbumImage } from "types/multiAlbum/index";

type GetAllAlbumUserType = {
	nickname: string;
	profileImage: string | null;
};
type GetAllAlbumItemType = {
	Images: multiAlbumImage[];
	User: GetAllAlbumUserType;
	UserId: number;
	content: string;
	createdAt: string;
	id: number;
	title: string;
	updatedAt: string;
};

const AlbumList = () => {
	const OFFSET = 2;
	const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery(
		"getAllAlbumList",
		({ pageParam = 0 }) =>
			axios.get(`${API_HOST}/multiAlbum/getAllList`, {
				params: {
					limit: OFFSET,
					offset: pageParam,
				},
			}),
		{
			getNextPageParam: (lastPage, allPages) => {
				const { offset, hasMore } = lastPage?.data;
				if (!hasMore) return false;
				else {
					return Number(offset);
				}
			},
		},
	);
	const AllAlbum: GetAllAlbumItemType[] = data?.pages[0].data.multiAlbumList;
	console.log(data?.pages[0].data.multiAlbumList);
	return (
		<AlbumListComponentContainer>
			<AlbumListComponent>
				{status === "loading" && <div>loading...</div>}
				{status === "error" && <div>error</div>}
				{status === "success" &&
					AllAlbum.map((item) => (
						<AllAlbumCard
							key={item.Images[0].src}
							src={item.Images[0].src}
							title={item.title}
							content={item.content}
							nickname={item.User.nickname}
							linkUrl={`/multiAlbum/${item.id}`}
						/>
					))}
			</AlbumListComponent>
		</AlbumListComponentContainer>
	);
};

export default AlbumList;

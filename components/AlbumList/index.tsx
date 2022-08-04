import { API_HOST } from "apis/api";
import AllAlbumCard from "components/AllAlbumCard";
import { useInfiniteQuery } from "react-query";
import { AlbumListComponent, AlbumListComponentContainer, FetchMoreButton } from "./styled";
import axios from "axios";
import { multiAlbumImage } from "types/multiAlbum/index";
import blankProfile from "public/assets/images/emptyProfile.png";
import useIntersectionObserver from "hooks/useObserver";
import { useRef } from "react";

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
	const OFFSET = 4;
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
				const { nextOffset, hasMore } = lastPage?.data;
				if (!hasMore) return false;
				else {
					return Number(nextOffset);
				}
			},
		},
	);

	const changeButtonText = (hasMore: boolean) => {
		return hasMore ? "load More ..." : "finish";
	};

	const loadMore = () => {
		if (hasNextPage) {
			fetchNextPage();
		}
	};
	const AllAlbums = data?.pages;
	const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
		fetchNextPage();
	};

	const { setTarget } = useIntersectionObserver({ onIntersect });
	return (
		<>
			<AlbumListComponentContainer>
				<AlbumListComponent>
					{status === "loading" && <div>loading...</div>}
					{status === "error" && <div>error</div>}
					{status === "success" &&
						AllAlbums?.map((page) => {
							return page.data.multiAlbumList.map((item: GetAllAlbumItemType) => (
								<AllAlbumCard
									key={item.Images[0].src}
									src={item.Images[0].src}
									title={item.title}
									content={item.content}
									nickname={item.User.nickname}
									linkUrl={`/multiAlbum/${item.id}`}
									profileImage={item.User.profileImage ? item.User.profileImage : blankProfile.src}
								/>
							));
						})}
					<FetchMoreButton onClick={loadMore}>
						{changeButtonText(data?.pages[data?.pages.length - 1].data.hasMore)}
					</FetchMoreButton>
				</AlbumListComponent>
			</AlbumListComponentContainer>
			<div ref={setTarget}></div>
		</>
	);
};

export default AlbumList;

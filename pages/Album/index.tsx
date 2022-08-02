import LinkCard from "components/LinkCard";
import AxiosSlider from "components/carousel";
import Link from "next/link";
import {
	AlbumListContainer,
	MultiAlbumWritesButton,
	ShowAllMultiAlbum,
	ShowAllMultiAlbumButton,
	SingleAlbumWritesButton,
} from "./styled";
import useGetSingleAlbumList from "hooks/useGetSingleAlbumList";
import MultiAlbumList from "components/showMultiAlbum";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { BsArrowRightCircle } from "react-icons/bs";
import Footer from "components/Layout/Footer";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery("getSingleAlbumList", useGetSingleAlbumList);

	return {
		props: {
			deydratedState: dehydrate(queryClient),
		},
	};
};

const Albums = () => {
	const { data, isLoading } = useGetSingleAlbumList();
	const handleContentLength = (content: string) => {
		if (content.length > 15) {
			return content.slice(0, 15) + "...";
		} else {
			return content;
		}
	};
	return (
		<>
			<AlbumListContainer>
				<Link href="Album/SingleAlbumWrites">
					<SingleAlbumWritesButton>싱글 앨범 작성</SingleAlbumWritesButton>
				</Link>
				{isLoading ? (
					<div>is Loading...</div>
				) : (
					<AxiosSlider title="Single Albums">
						{data?.data.singleAlbumList.map((postitem) => (
							<LinkCard
								key={postitem.filePath}
								src={`http://localhost:5000/${postitem.filePath}`}
								title={postitem.title}
								alt={postitem.content}
								year={handleContentLength(postitem.content)}
								width={300}
								height={400}
								linkurl={`/Album/singleAlbum/[postNum]`}
								query={postitem.postNum}
							></LinkCard>
						))}
					</AxiosSlider>
				)}
				<Link href="Album/MultiAlbumWrites">
					<MultiAlbumWritesButton>멀티 앨범 작성</MultiAlbumWritesButton>
				</Link>
				<MultiAlbumList />
				<Link href="Album/AllAlbum">
					<ShowAllMultiAlbum>
						모든 앨범 조회
						<ShowAllMultiAlbumButton>
							<BsArrowRightCircle />
						</ShowAllMultiAlbumButton>
					</ShowAllMultiAlbum>
				</Link>
			</AlbumListContainer>
			<Footer />
		</>
	);
};

export default Albums;

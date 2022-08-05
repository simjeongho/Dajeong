import LinkCard from "components/LinkCard";
import AxiosSlider from "components/carousel";
import Link from "next/link";
import useGetSingleAlbumList from "hooks/useGetSingleAlbumList";
import MultiAlbumList from "components/showMultiAlbum";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { BsArrowRightCircle } from "react-icons/bs";
import Footer from "components/Layout/Footer";
import { FcFilmReel } from "react-icons/fc";
import { NeonRoundButton } from "shared/component/NeonButton/styled";
import styled from "styled-components";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery("getSingleAlbumList", useGetSingleAlbumList);

	return {
		props: {
			deydratedState: dehydrate(queryClient),
		},
	};
};

export const AlbumListContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: black;
	@media screen and (max-width: 768px) {
		padding: 3%;
	}
`;

export const SingleAlbumWritesButton = styled(NeonRoundButton)`
	width: 20%;
`;

export const MultiAlbumWritesButton = styled(NeonRoundButton)`
	width: 20%;
	margin-top: 3%;
`;

export const ShowAllMultiAlbumButton = styled.button`
	background-color: transparent;
	outline: none;
	&:hover {
		cursor: pointer;
	}
`;

export const ShowAllMultiAlbum = styled.div`
	color: white;
	background-color: var(--color-deepgray);
	border-radius: 5px;
	width: 40%;
	padding: 1%;
	display: flex;
	justify-content: space-between;
	font-family: var(--font-crown);
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const ShowTitle = styled.div`
	display: flex;
`;

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
				<Link href="Album/MultiAlbumWrites">
					<MultiAlbumWritesButton>멀티 앨범 작성</MultiAlbumWritesButton>
				</Link>
				<MultiAlbumList />
				<Link href="Album/AllAlbum">
					<ShowAllMultiAlbum>
						<ShowTitle>
							모든 앨범 조회
							<FcFilmReel />
						</ShowTitle>
						<ShowAllMultiAlbumButton>
							<BsArrowRightCircle />
						</ShowAllMultiAlbumButton>
					</ShowAllMultiAlbum>
				</Link>
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
			</AlbumListContainer>
			<Footer />
		</>
	);
};

export default Albums;

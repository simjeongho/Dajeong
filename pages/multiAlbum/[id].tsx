import Footer from "components/Layout/Footer";
import MultiAlbumDetail from "components/multiAlbumDetail";
import MultiAlbumDetailSkeleton from "components/Skeleton/multiDetailSkeleton";
import useGetMultiAlbumDetail, { getMultiAlbumDetail } from "hooks/useMultiAlbumDetail";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { dehydrate, QueryClient } from "react-query";
import styled from "styled-components";

interface IParams extends ParsedUrlQuery {
	id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params as IParams;
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery(["multiAlbumDetail", id], () => getMultiAlbumDetail(id));
	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const MultiDetailPageContainer = styled.div`
	background-color: black;
	padding-left: 20%;
	padding-right: 20%;
	@media screen and (max-width: 768px) {
		padding-left: 0;
		padding-right: 0;
	}
`;

const MultiAlbumDetailPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const { data, isLoading } = useGetMultiAlbumDetail(id ? id : 16);
	return (
		<>
			{isLoading || !data ? (
				<MultiDetailPageContainer>
					<MultiAlbumDetailSkeleton></MultiAlbumDetailSkeleton>
				</MultiDetailPageContainer>
			) : (
				<>
					<MultiDetailPageContainer>
						<MultiAlbumDetail
							Images={data?.data.multiAlbumDetail.Images}
							title={data?.data.multiAlbumDetail.title}
							content={data?.data.multiAlbumDetail.content}
							createdAt={data?.data.multiAlbumDetail.createdAt}
							User={data?.data.multiAlbumDetail.User}
							id={data?.data.multiAlbumDetail.id}
							Likers={data?.data.multiAlbumDetail.Likers}
						/>
					</MultiDetailPageContainer>
				</>
			)}
			<Footer />
		</>
	);
};

export default MultiAlbumDetailPage;

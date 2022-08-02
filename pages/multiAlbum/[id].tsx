import Footer from "components/Layout/Footer";
import MultiAlbumDetail from "components/multiAlbumDetail";
import useGetMultiAlbumDetail, { getMultiAlbumDetail } from "hooks/useMultiAlbumDetail";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { dehydrate, QueryClient } from "react-query";

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

const MultiAlbumDetailPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const { data, isLoading } = useGetMultiAlbumDetail(id ? id : 16);
	return (
		<>
			{isLoading || !data ? (
				<div>로딩중이거나 로그인을 하지 않으면 볼 수 없습니다.</div>
			) : (
				<>
					<MultiAlbumDetail
						Images={data?.data.multiAlbumDetail.Images}
						title={data?.data.multiAlbumDetail.title}
						content={data?.data.multiAlbumDetail.content}
						createdAt={data?.data.multiAlbumDetail.createdAt}
						User={data?.data.multiAlbumDetail.User}
					/>
				</>
			)}
			<Footer />
		</>
	);
};

export default MultiAlbumDetailPage;

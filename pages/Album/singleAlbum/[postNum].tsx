/* eslint-disable react-hooks/rules-of-hooks */
import SingleAlbumDetail from "components/singleAlbumDetail";
import { ParsedUrlQuery } from "querystring";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import useGetSingleAlbumDetail, { getSingleAlbumDetail } from "hooks/useSingleAlbumDetail";
import { singleAlbumPost } from "types/singleAlbum";
import { dehydrate, QueryClient } from "react-query";
import { useRouter } from "next/router";

interface IParams extends ParsedUrlQuery {
	postNum: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
	const { postNum } = context.params as IParams;
	const queryClient = new QueryClient();
	const queryFn = () => getSingleAlbumDetail(postNum);
	await queryClient.prefetchQuery(["singleAlbumDetail", postNum], queryFn);
	//const singleDetailData = getSingleAlbumDetail(postNum);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
const SingleAlbumDetailPage = ({
	singleDetaildata,
}: InferGetServerSidePropsType<{ singleDetailData: singleAlbumPost }>) => {
	const router = useRouter();
	const { postNum } = router.query;
	const { data, isLoading } = useGetSingleAlbumDetail(postNum ? postNum : " ");
	//const { data, isLoading } = useGetSingleAlbumDetail("1");
	return (
		<>
			{isLoading || !data ? (
				<div>is Loading...</div>
			) : (
				<SingleAlbumDetail
					title={data?.data.singleAlbumDetail.title}
					content={data?.data.singleAlbumDetail.content}
					filepath={data?.data.singleAlbumDetail.filePath}
				></SingleAlbumDetail>
			)}
		</>
	);
};

export default SingleAlbumDetailPage;

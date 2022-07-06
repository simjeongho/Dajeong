/* eslint-disable react-hooks/rules-of-hooks */
import SingleAlbumDetail from "components/singleAlbumDetail";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import useGetSingleAlbumDetail from "hooks/useSingleAlbumDetail";

interface IParams extends ParsedUrlQuery {
	postNum: string;
}
// export const getServerSideProps: GetServerSideProps = async (context) => {
// 	const { postNum } = context.params as IParams;
// 	const res = await axios.get(`http://localhost:5000/singleAlbum/getDetail/${postNum}`);
// 	return {
// 		props: {
// 			detail: res,
// 		},
// 	};
// };
const SingleAlbumDetailPage = ({}) => {
	const router = useRouter();
	const { postNum } = router.query;
	const { data, isLoading } = useGetSingleAlbumDetail(postNum ? postNum : "");

	useEffect(() => {
		console.log(data);
		console.log(data?.data.singleAlbumDetail.content);
	}, [data]);
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

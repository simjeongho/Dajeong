/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
	postId: string;
}

const singleAlbumDetail = () => {
	const router = useRouter();
	const { postNum } = router.query;
	return (
		<>
			<div>single Album Detail: {postNum}</div>
		</>
	);
};

export default singleAlbumDetail;

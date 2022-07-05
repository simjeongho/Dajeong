/* eslint-disable react-hooks/rules-of-hooks */
import SingleAlbumDetail from "components/singleAlbumDetail";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
	postId: string;
}

const SingleAlbumDetailPage = () => {
	const router = useRouter();
	const { postNum } = router.query;
	return <SingleAlbumDetail></SingleAlbumDetail>;
};

export default SingleAlbumDetailPage;

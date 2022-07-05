/* eslint-disable react-hooks/rules-of-hooks */
import SingleAlbumDetail from "components/singleAlbumDetail";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";
import axios from "axios";

interface IParams extends ParsedUrlQuery {
	postNum: string;
}

const SingleAlbumDetailPage = ({}) => {
	const router = useRouter();
	const { postNum } = router.query;

	useEffect(() => {
		console.log(postNum);
	}, [postNum]);
	return (
		<>
			<div>{postNum}</div>
			<SingleAlbumDetail></SingleAlbumDetail>
		</>
	);
};

export default SingleAlbumDetailPage;

import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
interface IParams extends ParsedUrlQuery {
	postId: string;
}

const PostDetail = () => {
	const router = useRouter();
	const { postId } = router.query;
	return <div>포스트 디테일 : {postId}</div>;
};

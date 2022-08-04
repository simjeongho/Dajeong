import Link from "next/link";
import { Background } from "shared/component/styled";
import { WritingPostsButton } from "./styled";
import { RiBallPenLine } from "react-icons/ri";

const PostsPage = () => {
	return (
		<Background>
			<Link href="/Posts/BlogPostEdit">
				<WritingPostsButton>
					<RiBallPenLine />글 쓰기
				</WritingPostsButton>
			</Link>
		</Background>
	);
};

export default PostsPage;

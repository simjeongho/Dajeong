import Link from "next/link";
import { Background } from "shared/component/styled";
import { RiBallPenLine } from "react-icons/ri";
import { MiddlePurpleButton } from "shared/component/MiddlePurpleButton/styled";
import styled from "styled-components";

export const WritingPostsButton = styled(MiddlePurpleButton)`
	width: 300px;
	position: relative;
	right: 30%;
`;
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

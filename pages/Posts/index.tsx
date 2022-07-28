import Link from "next/link";
import { Background } from "shared/component/styled";
import { WritingPostsButton } from "./styled";
import { RiBallPenLine } from "react-icons/ri";
import { useEffect } from "react";
import axios from "axios";
import useGetMultiAlbumList from "hooks/useGetMultiAlbumList";
import { API_HOST } from "apis/api";
import useGetMultiAlbumComment from "hooks/useCommentList";
import useGetMultiAlbumDetail from "hooks/useMultiAlbumDetail";

const PostsPage = () => {
	const { data, isLoading } = useGetMultiAlbumDetail(16);
	console.log("data", data);
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

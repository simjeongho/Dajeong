import { API_HOST } from "apis/api";
import axios from "axios";
import { useRouter } from "next/router";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
	CommentDeleteFix,
	CommentItem,
	CommentProfileContainer,
	CommentProfileImage,
	CommentsListContainer,
} from "./styled";
import { useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
import useGetMultiAlbumComment, { getMultiAlbumComment } from "hooks/useCommentList";
import { dehydrate, QueryClient } from "react-query";
import { ParsedUrlQuery } from "querystring";
import { GetServerSideProps } from "next";
import emptyProfile from "public/assets/images/emptyProfile.png";
interface IParams extends ParsedUrlQuery {
	id: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params as IParams;
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery(["multiAlbumComment", id], () => getMultiAlbumComment(id));
	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const CommentList = () => {
	const router = useRouter();
	const id = router.query.id;
	const userSelector = useSelector(selectUser);
	const { userId } = userSelector;
	const { data, isLoading } = useGetMultiAlbumComment(id ? id : "");
	const handleCreatedAt = (createdAt: string) => {
		return createdAt.slice(0, 10) + " " + createdAt.slice(12, 19);
	};

	const handleDeleteComment = async (commentid: number, creatorId: number) => {
		await axios
			.delete(`${API_HOST}/comment/multiAlbum/delete/${commentid}`, {
				data: {
					id: commentid,
					UserId: userId,
					creatorId: creatorId,
				},
				withCredentials: true,
			})
			.then((res) => {
				console.log("삭제 성공");
				router.reload();
			});
	};
	return (
		<CommentsListContainer>
			{!data || isLoading ? (
				<div>Loading</div>
			) : (
				data?.data.multiAlbumComments.map((comment) => (
					<CommentItem key={comment.id}>
						<div>
							<CommentProfileContainer>
								<CommentProfileImage
									src={comment.User.profileImage ? comment.User.profileImage : emptyProfile}
									width={20}
									height={20}
								/>
							</CommentProfileContainer>
						</div>
						<h1>{comment.User.nickname}</h1>
						<h3>{handleCreatedAt(comment.createdAt)}</h3>
						<h2>{comment.content}</h2>
						<CommentDeleteFix>
							<RiDeleteBin6Line onClick={() => handleDeleteComment(comment.id, comment.UserId)} />
						</CommentDeleteFix>
					</CommentItem>
				))
			)}
		</CommentsListContainer>
	);
};

export default CommentList;

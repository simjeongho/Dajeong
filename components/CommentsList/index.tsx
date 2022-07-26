import { API_HOST } from "apis/api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Comments } from "types/Comments";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import { CommentDeleteFix, CommentItem, CommentsListContainer } from "./styled";

const CommentList = () => {
	const [comments, setComments] = useState<Comments | null>(null);
	const router = useRouter();
	const id = router.query.id;
	useEffect(() => {
		console.log("commentList", id);
		axios.get(`${API_HOST}/comment/multiAlbum/${id}`, { withCredentials: true }).then((res) => {
			console.log(res.data.multiAlbumComments);
			const data = res.data.multiAlbumComments;
			setComments({
				multiAlbumComments: data,
			});
			console.log("comment!!", comments);
		});
	}, []);
	return (
		<CommentsListContainer>
			{comments === null ? (
				<div>Loading</div>
			) : (
				comments?.multiAlbumComments.map((comment) => (
					<CommentItem key={comment.createdAt}>
						<h1>{comment.User.nickname}</h1>
						<h3>{comment.createdAt}</h3>
						<h2>{comment.content}</h2>
						<CommentDeleteFix>
							<RiDeleteBin6Line />
							<RiEditBoxLine />
						</CommentDeleteFix>
					</CommentItem>
				))
			)}
		</CommentsListContainer>
	);
};

export default CommentList;

import { API_HOST } from "apis/api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Comments } from "types/Comments";
import { CommentsListContainer } from "./styled";

const CommentList = () => {
	const [comments, setComments] = useState<Comments | null>(null);
	const router = useRouter();
	const id = router.query.id;
	useEffect(() => {
		console.log("commentList", id);
		axios.get(`${API_HOST}/comment/multiAlbum/${id}`, { withCredentials: true }).then((res) => {
			console.log(res);
			setComments(res.data.multiAlbumComments);
		});
	}, []);
	return <CommentsListContainer></CommentsListContainer>;
};

export default CommentList;

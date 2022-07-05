import axios from "axios";
import LinkCard from "components/LinkCard";
import AxiosSlider from "components/carousel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AlbumListContainer, SingleAlbumWritesButton } from "./styled";
type singleAlbumPost = {
	title: string;
	content: string;
	filePath: string;
	postNum: number;
};

const Albums = () => {
	const [singleAlbumList, setSingleAlbumList] = useState<singleAlbumPost[] | null>(null);
	useEffect(() => {
		axios
			.get("/singleAlbum/getList")
			.then((response) => {
				console.log(response.data.singleAlbumList);
				setSingleAlbumList(response.data.singleAlbumList);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	const handleContentLength = (content: string) => {
		if (content.length > 15) {
			return content.slice(0, 15) + "...";
		} else {
			return content;
		}
	};
	console.log("singleAlbumList", singleAlbumList);
	return (
		<AlbumListContainer>
			<Link href="Album/SingleAlbumWrites">
				<SingleAlbumWritesButton>싱글 앨범 작성</SingleAlbumWritesButton>
			</Link>
			<AxiosSlider title="Single Albums">
				{singleAlbumList?.map((postitem) => (
					<LinkCard
						key={postitem.filePath}
						src={`http://localhost:5000/${postitem.filePath}`}
						title={postitem.title}
						alt={postitem.content}
						year={handleContentLength(postitem.content)}
						width={300}
						height={400}
						linkurl={`/Album/singleAlbum/[postNum]`}
						query={postitem.postNum}
					></LinkCard>
				))}
			</AxiosSlider>
		</AlbumListContainer>
	);
};

export default Albums;

import axios from "axios";
import LinkCard from "components/LinkCard";
import AxiosSlider from "components/carousel";
import StaticSlider from "components/StaticCarousel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AlbumListContainer, SingleAlbumWritesButton } from "./styled";
type singleAlbumPost = {
	title: string;
	content: string;
	filePath: string;
	postNum: Number;
};

const Albums = () => {
	const [singleAlbumList, setSingleAlbumList] = useState<singleAlbumPost[] | null>(null);
	useEffect(() => {
		axios
			.post("/singleAlbum/getList")
			.then((response) => {
				console.log(response.data.singleAlbumList);
				setSingleAlbumList(response.data.singleAlbumList);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

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
						year="2022"
						width={300}
						height={400}
					></LinkCard>
				))}
			</AxiosSlider>
		</AlbumListContainer>
	);
};

export default Albums;

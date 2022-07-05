import axios from "axios";
import LinkCard from "components/LinkCard";
import AxiosSlider from "components/carousel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AlbumListContainer, SingleAlbumWritesButton } from "./styled";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Props } from "next/script";
import useGetSingleAlbumList from "hooks/useGetSingleAlbumList";
export type singleAlbumPost = {
	title: string;
	content: string;
	filePath: string;
	postNum: number;
};

// export const getServerSideProps: GetServerSideProps = async () => {
// 	try {
// 		const singleAlbums: singleAlbumPost[] = await axios
// 			.get("http://localhost5000/singleAlbum/getList")
// 			.then((res) => res.data.singleAlbumList);
// 		return { props: { data: singleAlbums } };
// 	} catch (err) {
// 		console.log("Error!!", err);
// 		return {
// 			redirect: {
// 				destination: "/",
// 				permanent: false,
// 			},
// 		};
// 	}
// };
const Albums = ({ singleAlbums }: InferGetServerSidePropsType<{ singleAlbums: singleAlbumPost[] }>) => {
	//const [singleAlbumList, setSingleAlbumList] = useState<singleAlbumPost[] | null>(null);
	//const singleAlbumList: singleAlbumPost[] = singleAlbums;
	// useEffect(() => {
	// 	axios
	// 		.get("/singleAlbum/getList")
	// 		.then((response) => {
	// 			console.log(response.data.singleAlbumList);
	// 			setSingleAlbumList(response.data.singleAlbumList);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, []);
	const { data, isLoading } = useGetSingleAlbumList();
	const singleAlbumList = data;
	useEffect(() => {
		console.log("data", singleAlbumList);
	}, []);

	const handleContentLength = (content: string) => {
		if (content.length > 15) {
			return content.slice(0, 15) + "...";
		} else {
			return content;
		}
	};
	return (
		<AlbumListContainer>
			<Link href="Album/SingleAlbumWrites">
				<SingleAlbumWritesButton>싱글 앨범 작성</SingleAlbumWritesButton>
			</Link>

			{isLoading ? (
				<div>is Loading...</div>
			) : (
				<AxiosSlider title="Single Albums">
					{data?.data.singleAlbumList.map((postitem) => (
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
			)}
		</AlbumListContainer>
	);
};

export default Albums;

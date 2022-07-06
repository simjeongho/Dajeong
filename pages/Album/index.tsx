import LinkCard from "components/LinkCard";
import AxiosSlider from "components/carousel";
import Link from "next/link";
import { AlbumListContainer, SingleAlbumWritesButton } from "./styled";
import { InferGetServerSidePropsType } from "next";
import useGetSingleAlbumList from "hooks/useGetSingleAlbumList";
export type singleAlbumPost = {
	title: string;
	content: string;
	filePath: string;
	postNum: string;
};

const Albums = ({ singleAlbums }: InferGetServerSidePropsType<{ singleAlbums: singleAlbumPost[] }>) => {
	const { data, isLoading } = useGetSingleAlbumList();
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

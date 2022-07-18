import { API_HOST } from "apis/api";
import AxiosSlider from "components/carousel";
import LinkCard from "components/LinkCard";
import useGetMultiAlbumList from "hooks/useGetMultiAlbumList";
import { useEffect } from "react";

const MultiAlbumList = () => {
	const { data, isLoading } = useGetMultiAlbumList();
	const handleContentLength = (content: string) => {
		if (content.length > 15) {
			return content.slice(0, 15) + "...";
		} else {
			return content;
		}
	};
	useEffect(() => {
		console.log(data?.data[0].Images.src);
	}, []);

	return (
		<>
			{isLoading ? (
				<div>is Loading ... </div>
			) : (
				<AxiosSlider title="multi Albums">
					{data?.data.map((item) => (
						<LinkCard
							key={item.Images[0].src}
							src={`${item.Images[0].src}`}
							title={item.title}
							alt={item.content}
							year={handleContentLength(item.content)}
							width={300}
							height={400}
							linkurl={`/Album/multiAlbum/[id]`}
							query={item.id}
						></LinkCard>
					))}
				</AxiosSlider>
			)}
		</>
	);
};

export default MultiAlbumList;

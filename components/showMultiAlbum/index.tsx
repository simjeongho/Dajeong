import AxiosSlider from "components/carousel";
import MultiLinkCard from "components/multiLinkCard";
import useGetMultiAlbumList, { getMultiAlbumList } from "hooks/useGetMultiAlbumList";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery("getMultiAlbumList", getMultiAlbumList);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const MultiAlbumList = () => {
	const { data, isLoading } = useGetMultiAlbumList();
	const handleContentLength = (content: string) => {
		if (content.length > 15) {
			return content.slice(0, 15) + "...";
		} else {
			return content;
		}
	};

	return (
		<>
			{isLoading ? (
				<div>is Loading ... </div>
			) : (
				<AxiosSlider title="multi Albums">
					{data?.data.multiAlbumList.map((item) => (
						<MultiLinkCard
							key={item.Images[0].src}
							src={`${item.Images[0].src}`}
							title={item.title}
							alt={item.content}
							year={handleContentLength(item.content)}
							width={300}
							height={400}
							linkurl={`/Album/MultiAlbum/[id]`}
							query={item.id}
						></MultiLinkCard>
					))}
				</AxiosSlider>
			)}
		</>
	);
};

export default MultiAlbumList;

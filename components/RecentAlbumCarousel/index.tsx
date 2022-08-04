import useGetRecentList, { getRecentAlbumList } from "apis/Home";
import AxiosSlider from "components/carousel";
import MultiLinkCard from "components/multiLinkCard";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
export const getServerSideProps: GetServerSideProps = async (context) => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery("getRecentAlbumList", getRecentAlbumList);
	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
const RecentAlbumList = () => {
	const { data, isLoading } = useGetRecentList();

	return (
		<>
			{isLoading ? (
				<div>is Loading ... </div>
			) : (
				<AxiosSlider title="최근 앨범들">
					{data?.data.map((item) => (
						<MultiLinkCard
							key={item.Images[0].src}
							src={`${item.Images[0].src}`}
							title={item.title}
							alt={item.content}
							year={""}
							width={300}
							height={400}
							linkurl={`/multiAlbum/[id]`}
							query={item.id}
							Likers={item.Likers}
						></MultiLinkCard>
					))}
				</AxiosSlider>
			)}
		</>
	);
};

export default RecentAlbumList;

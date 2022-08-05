import { RecentListType } from "apis/Home";
import AxiosSlider from "components/carousel";
import MultiLinkCard from "components/multiLinkCard";

type RecentAlbumListProps = {
	data: RecentListType[] | null;
	isLoading: boolean;
};
const RecentAlbumList = ({ data, isLoading }: RecentAlbumListProps) => {
	return (
		<>
			{isLoading || !data ? (
				<div>is Loading ... </div>
			) : (
				<AxiosSlider title="최근 앨범들">
					{data.map((item) => (
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

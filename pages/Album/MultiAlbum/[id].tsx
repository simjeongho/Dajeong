import MultiAlbumDetail from "components/multiAlbumDetail";
import useGetMultiAlbumDetail from "hooks/useMultiAlbumDetail";
import { useRouter } from "next/router";

const MultiAlbumDetailPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const { data, isLoading } = useGetMultiAlbumDetail(id ? id : "");
	console.log("multiAlbum", data);

	return (
		<>
			{isLoading || !data ? (
				<div>is Loading...</div>
			) : (
				<MultiAlbumDetail
					Images={data?.data.multiAlbumDetail.Images}
					title={data?.data.multiAlbumDetail.title}
					content={data?.data.multiAlbumDetail.content}
					createdAt={data?.data.multiAlbumDetail.createdAt}
					User={data?.data.multiAlbumDetail.User}
				/>
			)}
		</>
	);
};

export default MultiAlbumDetailPage;

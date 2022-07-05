import {
	SingleAlbumContentContainer,
	SingleAlbumDetailContainer,
	SingleAlbumDetailDescription,
	SingleAlbumDetailDescriptionContainer,
	SingleAlbumDetailImage,
	SingleAlbumDetailImageContainer,
	SingleAlbumDetailTitle,
	SingleAlbumDetailTitleContainer,
} from "./styled";

const SingleAlbumDetail = () => {
	return (
		<SingleAlbumDetailContainer>
			<SingleAlbumDetailImageContainer></SingleAlbumDetailImageContainer>

			<SingleAlbumContentContainer>
				<SingleAlbumDetailTitleContainer>
					<SingleAlbumDetailTitle />
				</SingleAlbumDetailTitleContainer>
				<SingleAlbumDetailDescriptionContainer>
					<SingleAlbumDetailDescription>gggg</SingleAlbumDetailDescription>
				</SingleAlbumDetailDescriptionContainer>
			</SingleAlbumContentContainer>
		</SingleAlbumDetailContainer>
	);
};

export default SingleAlbumDetail;

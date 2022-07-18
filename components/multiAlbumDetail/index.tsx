import {
	MultiAlbumContentArea,
	MultiAlbumDescriptionContainer,
	MultiAlbumDetailContainer,
	MultiAlbumImageArea,
	MultiAlbumImageList,
	MultiAlbumTitleContainer,
} from "./styled";

const MultiAlbumDetail = () => {
	return (
		<>
			<MultiAlbumDetailContainer>
				<MultiAlbumImageArea>
					<MultiAlbumImageList></MultiAlbumImageList>
				</MultiAlbumImageArea>
				<MultiAlbumContentArea>
					<MultiAlbumTitleContainer>
						<h1>유후</h1>
						<h3>우ㅠ후후</h3>
					</MultiAlbumTitleContainer>
					<MultiAlbumDescriptionContainer></MultiAlbumDescriptionContainer>
				</MultiAlbumContentArea>
			</MultiAlbumDetailContainer>
		</>
	);
};

export default MultiAlbumDetail;

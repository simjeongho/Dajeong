import {
	AllAlbumListCardContainer,
	AllAlbumListCardPreviewDiv,
	AllAlbumListCardThumbnail,
	AllAlbumListCardThumbnailContainer,
	AllAlbumListCardTitleDiv,
} from "./styled";
import daebudo from "public/assets/images/landscape/daebudo.jpg";

const AllAlbumCard = () => {
	return (
		<AllAlbumListCardContainer>
			<AllAlbumListCardThumbnailContainer>
				<AllAlbumListCardThumbnail src={daebudo} width={90} height={120} />
			</AllAlbumListCardThumbnailContainer>
			<AllAlbumListCardTitleDiv>
				<h1>제목</h1>
				<h2>작성자</h2>
			</AllAlbumListCardTitleDiv>
			<AllAlbumListCardPreviewDiv>
				<h3>내용이 들어갈 곳이에요</h3>
			</AllAlbumListCardPreviewDiv>
		</AllAlbumListCardContainer>
	);
};

export default AllAlbumCard;

import {
	AllAlbumListCardContainer,
	AllAlbumListCardPreviewDiv,
	AllAlbumListCardThumbnail,
	AllAlbumListCardThumbnailContainer,
	AllAlbumListCardTitleDiv,
} from "./styled";

type AllAlbumCardProps = {
	src: string;
	title: string;
	content: string;
	nickname: string;
};

const AllAlbumCard = ({ src, title, content, nickname }: AllAlbumCardProps) => {
	const handleContent = (content: string) => {
		return content.slice(0, 15) + "...";
	};
	return (
		<AllAlbumListCardContainer>
			<AllAlbumListCardThumbnailContainer>
				<AllAlbumListCardThumbnail src={src} width={90} height={120} />
			</AllAlbumListCardThumbnailContainer>
			<AllAlbumListCardTitleDiv>
				<h1>{title}</h1>
				<h2>{nickname}</h2>
			</AllAlbumListCardTitleDiv>
			<AllAlbumListCardPreviewDiv>
				<h3>{handleContent(content)}</h3>
			</AllAlbumListCardPreviewDiv>
		</AllAlbumListCardContainer>
	);
};

export default AllAlbumCard;

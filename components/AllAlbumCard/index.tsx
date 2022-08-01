import Link from "next/link";
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
	linkUrl: string;
};

const AllAlbumCard = ({ src, title, content, nickname, linkUrl }: AllAlbumCardProps) => {
	const handleContent = (content: string) => {
		return content.slice(0, 15) + "...";
	};
	return (
		<Link
			href={{
				pathname: `${linkUrl}`,
			}}
		>
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
		</Link>
	);
};

export default AllAlbumCard;

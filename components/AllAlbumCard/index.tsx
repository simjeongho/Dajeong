import Image from "next/image";
import Link from "next/link";
import {
	AllAlbumListCardContainer,
	AllAlbumListCardPreviewDiv,
	AllAlbumListCardThumbnail,
	AllAlbumListCardThumbnailContainer,
	AllAlbumListCardTitleDiv,
	AllAlbumListCardWriter,
	AllAlbumListCardWriterProfile,
	AllAlbumListCardWriterProfileContainer,
} from "./styled";

type AllAlbumCardProps = {
	src: string;
	title: string;
	content: string;
	nickname: string;
	linkUrl: string;
	profileImage: string;
};

const AllAlbumCard = ({ src, title, content, nickname, linkUrl, profileImage }: AllAlbumCardProps) => {
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
				</AllAlbumListCardTitleDiv>
				<AllAlbumListCardWriter>
					<AllAlbumListCardWriterProfileContainer>
						<AllAlbumListCardWriterProfile src={profileImage} width={20} height={20}></AllAlbumListCardWriterProfile>
					</AllAlbumListCardWriterProfileContainer>
					<h2>{nickname}</h2>
				</AllAlbumListCardWriter>
				<AllAlbumListCardPreviewDiv>
					<h3>{handleContent(content)}</h3>
				</AllAlbumListCardPreviewDiv>
			</AllAlbumListCardContainer>
		</Link>
	);
};

export default AllAlbumCard;

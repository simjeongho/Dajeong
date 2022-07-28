import CommentForms from "components/CommentsForm";
import CommentList from "components/CommentsList";
import OneSlider from "components/ShowOneCarousel";
import { useRouter } from "next/router";
import { multiAlbumDetailPage } from "types/multiAlbum";
import {
	MultiAlbumContentArea,
	MultiAlbumDescriptionContainer,
	MultiAlbumDetailContainer,
	MultiAlbumImage,
	MultiAlbumImageArea,
	MultiAlbumTitleContainer,
	MultiAlbumDescriptionComments,
} from "./styled";

const MultiAlbumDetail = ({ Images, content, createdAt, title, User }: multiAlbumDetailPage) => {
	const handleDate = () => {
		return createdAt.slice(0, 10) + "일 " + createdAt.slice(12, 19);
	};
	return (
		<>
			<MultiAlbumDetailContainer>
				<MultiAlbumImageArea>
					<OneSlider>
						{Images?.map((image) => (
							<MultiAlbumImage key={image.src} src={image.src} width={300} height={400} />
						))}
					</OneSlider>
				</MultiAlbumImageArea>
				<MultiAlbumContentArea>
					<MultiAlbumTitleContainer>
						<h1>{title}</h1>
						<h2>{`작성자 ${User.nickname}`}</h2>
						<h3>{`작성 일 ${handleDate()}`}</h3>
					</MultiAlbumTitleContainer>
					<MultiAlbumDescriptionComments>
						<MultiAlbumDescriptionContainer>{content}</MultiAlbumDescriptionContainer>
						<CommentForms />
						<CommentList />
					</MultiAlbumDescriptionComments>
				</MultiAlbumContentArea>
			</MultiAlbumDetailContainer>
		</>
	);
};

export default MultiAlbumDetail;

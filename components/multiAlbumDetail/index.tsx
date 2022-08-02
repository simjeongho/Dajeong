import CommentForms from "components/CommentsForm";
import CommentList from "components/CommentsList";
import OneSlider from "components/ShowOneCarousel";
import { multiAlbumDetailPage } from "types/multiAlbum";
import {
	MultiAlbumContentArea,
	MultiAlbumDescriptionContainer,
	MultiAlbumDetailContainer,
	MultiAlbumImage,
	MultiAlbumImageArea,
	MultiAlbumTitleContainer,
	MultiAlbumDescriptionComments,
	ProfileImage,
	ProfileImageContainer,
	MultiAlbumLikeDiv,
} from "./styled";
import emptyProfile from "public/assets/images/emptyProfile.png";
import { IoHeartOutline } from "react-icons/io5";

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
						<ProfileImageContainer>
							<ProfileImage src={User.profileImage ? User.profileImage : emptyProfile} width={30} height={30} />
						</ProfileImageContainer>
						<h2>{`작성자 ${User.nickname}`}</h2>
						<h3>{`작성 일 ${handleDate()}`}</h3>
						<MultiAlbumLikeDiv>
							<IoHeartOutline />
						</MultiAlbumLikeDiv>
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

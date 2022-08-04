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
	MultiAlbumLikersDiv,
	MultiAlbumLiker,
} from "./styled";
import emptyProfile from "public/assets/images/emptyProfile.png";
import { IoHeartOutline } from "react-icons/io5";
import { useLikePost } from "apis/MultiAlbum";
import { useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
import { ImTelegram } from "react-icons/im";

const MultiAlbumDetail = ({ Images, content, createdAt, title, User, id, Likers }: multiAlbumDetailPage) => {
	const handleDate = () => {
		return createdAt.slice(0, 10) + "일 " + createdAt.slice(12, 19);
	};

	const userSelector = useSelector(selectUser);
	const { userId } = userSelector;

	const SubmitLikeQuery = useLikePost(id, {
		PostId: id,
		UserId: userId,
	});

	const handleSubmitLike = () => {
		SubmitLikeQuery.mutate();
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
							<IoHeartOutline onClick={handleSubmitLike} />
							<MultiAlbumLikersDiv>
								이 앨범을 좋아하는 사람:
								{Likers?.map((item) => (
									<MultiAlbumLiker>
										<ProfileImage
											src={item.profileImage ? item.profileImage : emptyProfile}
											width={10}
											height={10}
										></ProfileImage>
										{item.nickname ? item.nickname : "없습니다"}
									</MultiAlbumLiker>
								))}{" "}
							</MultiAlbumLikersDiv>
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

import { UserLikedPost } from "apis/Liked";
import AllAlbumCard from "components/AllAlbumCard";
import { useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
import blankProfile from "public/assets/images/emptyProfile.png";
import { FcStackOfPhotos } from "react-icons/fc";
import { LikedContainer, LikedContent, LikedInnerContainer, LikedTitle } from "./styled";
type ShowLikedProps = {
	LikedData: UserLikedPost | null;
	LikedLoading: boolean;
};
const ShowLiked = ({ LikedData, LikedLoading }: ShowLikedProps) => {
	const userSelector = useSelector(selectUser);
	const { userNickName } = userSelector;
	return (
		<LikedContainer>
			<LikedInnerContainer>
				<LikedTitle>
					<h1>{userNickName}이 좋아하는 앨범</h1>
					<FcStackOfPhotos />
				</LikedTitle>
				{LikedLoading || !LikedData || !LikedData.Liked ? (
					<div>is Loading</div>
				) : (
					<LikedContent>
						{LikedData.Liked.map((item) => (
							<AllAlbumCard
								key={item.Images[0].src}
								src={item.Images[0].src}
								title={item.title}
								content={item.content}
								nickname={item.User.nickname}
								linkUrl={`/multiAlbum/${item.id}`}
								profileImage={item.User.profileImage ? item.User.profileImage : blankProfile.src}
							/>
						))}
					</LikedContent>
				)}
			</LikedInnerContainer>
		</LikedContainer>
	);
};

export default ShowLiked;

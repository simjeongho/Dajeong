import useGetLikedPosts from "apis/Liked";
import AllAlbumCard from "components/AllAlbumCard";
import { useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
import blankProfile from "public/assets/images/emptyProfile.png";
import { FcStackOfPhotos } from "react-icons/fc";
import { LikedContainer, LikedContent, LikedInnerContainer, LikedTitle } from "./styled";

const ShowLiked = () => {
	const userSelector = useSelector(selectUser);
	const { userNickName, userId } = userSelector;
	const { data, isLoading } = useGetLikedPosts(userId);
	return (
		<LikedContainer>
			<LikedInnerContainer>
				<LikedTitle>
					<h1>{userNickName}이 좋아하는 앨범</h1>
					<FcStackOfPhotos />
				</LikedTitle>
				{isLoading || !data || !data.data.Liked ? (
					<div>is Loading</div>
				) : (
					<LikedContent>
						{data?.data.Liked.map((item) => (
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

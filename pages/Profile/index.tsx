import useGetLikedPosts, { getLikedPosts } from "apis/Liked";
import { getProfile, useGetProfile } from "apis/profile";
import UserProfile from "components/Profile";
import ShowLiked from "components/ShowLiked";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { dehydrate, QueryClient } from "react-query";
import { useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
import styled from "styled-components";
const ProfileContainer = styled.div`
	padding-left: 30%;
	padding-right: 30%;
	background-color: black;
	@media screen and (max-width: 768px) {
		padding-left: 5%;
		padding-right: 5%;
	}
`;
interface IParams extends ParsedUrlQuery {
	id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query as IParams;
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery(["getProfile", id], () => getProfile(id));
	await queryClient.prefetchQuery(["getLikedPosts", id], () => getLikedPosts(id));
	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const Profile = () => {
	const userSelector = useSelector(selectUser);
	const { userId } = userSelector;
	const { data: profileDatas, isLoading: ProfileLoading } = useGetProfile(userId);
	const { data: LikedDatas, isLoading: LikedLoading } = useGetLikedPosts(userId);
	const profileData = profileDatas?.data;
	const LikedData = LikedDatas?.data;
	return (
		<>
			<ProfileContainer>
				<UserProfile profileData={profileData ? profileData : null} profileLoading={ProfileLoading}></UserProfile>
				<ShowLiked LikedData={LikedData ? LikedData : null} LikedLoading={LikedLoading}></ShowLiked>
			</ProfileContainer>
		</>
	);
};

export default Profile;

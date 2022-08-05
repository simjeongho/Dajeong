import { getProfile, useGetProfile } from "apis/profile";
import UserProfile from "components/Profile";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { dehydrate, QueryClient } from "react-query";
import { useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
interface IParams extends ParsedUrlQuery {
	id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query as IParams;
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery(["getProfile", id], () => getProfile(id));
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
	const profileData = profileDatas?.data;
	return (
		<>
			<UserProfile profileData={profileData ? profileData : null} profileLoading={ProfileLoading}></UserProfile>
		</>
	);
};

export default Profile;

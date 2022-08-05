import useGetRecentList from "apis/Home";
import DaeunBestImage from "components/DaeunBestAlbum";
import Footer from "components/Layout/Footer";
import RecentAlbumList from "components/RecentAlbumCarousel";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import styled from "styled-components";

const HomeContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background: url("/assets/images/Home.svg"); */
	@media screen and (max-width: 1000px) {
		display: flex;
		flex-direction: column;
		padding: 3%;
	}
`;

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery("getRecentAlbumList", useGetRecentList);
	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const Index = () => {
	const { data, isLoading } = useGetRecentList();
	const propsData = data?.data;
	return (
		<>
			<HomeContainer>
				<DaeunBestImage />
				<RecentAlbumList data={propsData ? propsData : null} isLoading={isLoading} />
			</HomeContainer>
			<Footer />
		</>
	);
};

export default Index;

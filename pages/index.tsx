import { HomeContainer } from "./styled";
import DaeunBestImage from "components/DaeunBestAlbum";
import Footer from "components/Layout/Footer";
import RecentAlbumList from "components/RecentAlbumCarousel";

const Index = () => {
	return (
		<>
			<HomeContainer>
				<DaeunBestImage />
				<RecentAlbumList />
			</HomeContainer>
			<Footer />
		</>
	);
};

export default Index;

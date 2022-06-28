import HomeImageCard from "@components/HomeImageCard";
import styled from "styled-components";
import HomeBackground from "@assets/image/home.jpg";
const HomeContainer = styled.div`
	width: 100%;
	height: 80%;
	background-color: var(--color-lightgray);
	background-image: url(HomeBackground);
`;

const Home = () => {
	return (
		<HomeContainer>
			<HomeImageCard />
		</HomeContainer>
	);
};

export default Home;

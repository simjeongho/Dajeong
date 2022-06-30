import HomeImageCard from "components/HomeImageCard";

import styled from "styled-components";
const HomeContainer = styled.div`
	width: 100%;
	height: 80%;
	background-color: var(--color-lightgray);
`;

const Home = () => {
	return (
		<HomeContainer>
			<HomeImageCard />
		</HomeContainer>
	);
};

export default Home;

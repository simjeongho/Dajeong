import StaticSlider from "components/StaticCarousel";
import styled from "styled-components";

const HomeContainer = styled.div`
	width: 100%;
	height: 100%;
`;
const Index = () => {
	return (
		<HomeContainer>
			<StaticSlider />
		</HomeContainer>
	);
};

export default Index;

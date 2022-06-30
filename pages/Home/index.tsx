import HomeImageCard from "components/HomeImageCard";
import StaticSlider from "components/StaticCarousel";
import Card from "components/card";
import mangWon from "assets/images/mangwon.jpg";
import hanRiver from "assets/images/hanriver.jpg";
import incheonpark from "assets/images/incheonpark.jpg";
import inhoo from "assets/images/inhoo.jpg";
import daebudo from "assets/images/daebudo.jpg";
import moouido from "assets/images/moouido.jpg";
import styled from "styled-components";
const HomeContainer = styled.div`
	width: 100%;
	height: 80%;
	background-color: var(--color-lightgray);
`;
const landscapedata = [
	<Card src={mangWon} alt="망원" title="망원에서" year="2022" />,
	<Card src={hanRiver} alt="한강" title="한강 피크닉" year="2022" />,
	<Card src={incheonpark} alt="인천대공원" title="인천대공원" year="2022" />,
	<Card src={inhoo} alt="인하대 후문" title="인하대 후문" year="2022" />,
	<Card src={daebudo} alt="첫 대부도" title="첫 대부도" year="2022" />,
	<Card src={moouido} alt="무의도" title="무의도" year="2022" />,
];

const Home = () => {
	return (
		<HomeContainer>
			<StaticSlider children={landscapedata} />
			<HomeImageCard />
		</HomeContainer>
	);
};

export default Home;

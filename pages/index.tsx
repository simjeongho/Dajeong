import StaticSlider from "components/StaticCarousel";
import { useEffect, useState } from "react";
import { HomeContainer, SliderContainer } from "./styled";
import Card from "components/card";
import mangWon from "assets/images/landscape/mangwon.jpg";
import hanRiver from "assets/images/landscape/hanriver.jpg";
import incheonpark from "assets/images/landscape/incheonpark.jpg";
import inhoo from "assets/images/landscape/inhoo.jpg";
import daebudo from "assets/images/landscape/daebudo.jpg";
import moouido from "assets/images/landscape/moouido.jpg";
import haru1 from "assets/images/together/haru1.jpg";
import haru2 from "assets/images/together/haru2.png";
import haru3 from "assets/images/together/haru3.png";
import haru4 from "assets/images/together/haru4.png";
import haru5 from "assets/images/together/haru5.png";
import togeter2 from "assets/images/together/together2.jpg";
import DaeunBestImage from "components/DaeunBestAlbum";
const landscapeData = [
	<Card key="land1" src={mangWon} alt="망원" title="망원에서" year="2022" />,
	<Card key="land2" src={hanRiver} alt="한강" title="한강 피크닉" year="2022" />,
	<Card key="land3" src={incheonpark} alt="인천대공원" title="인천대공원" year="2022" />,
	<Card key="land4" src={inhoo} alt="인하대 후문" title="인하대 후문" year="2022" />,
	<Card key="land5" src={daebudo} alt="첫 대부도" title="첫 대부도" year="2022" />,
	<Card key="land6" src={moouido} alt="무의도" title="무의도" year="2022" />,
];

const togetherData = [
	<Card key="together1" src={haru1} alt="하루1" title="하루필름1" year="2022" />,
	<Card key="together2" src={haru2} alt="하루2" title="하루필름2" year="2022" />,
	<Card key="together3" src={haru3} alt="하루3" title="하루필름3" year="2022" />,
	<Card key="together4" src={haru4} alt="하루4" title="하루필름4" year="2022" />,
	<Card key="together5" src={haru5} alt="하루5" title="하루필름5" year="2022" />,
	<Card key="together6" src={togeter2} alt="" title="헤헿2" year="2022" />,
];

const Index = () => {
	const [page, setPage] = useState<number | null>(0);

	useEffect(() => {
		setPage(0);
		return () => {
			setPage(null);
		};
	}, [setPage]);
	// const handleNext = () => {
	// 	if (page === null || page === pages.length - 1) return;
	// 	setPage(page + 1);
	// };
	const handlePrev = () => {
		if (page === null || page === 0) return;
		setPage(page - 1);
	};
	return (
		<HomeContainer>
			<DaeunBestImage />
			<StaticSlider children={landscapeData} title="LandScape" />

			<StaticSlider children={togetherData} title="Together" />
		</HomeContainer>
	);
};

export default Index;

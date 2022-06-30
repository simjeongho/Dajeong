import StaticSlider from "components/StaticCarousel";
import { StaticImageData } from "next/image";
import { useState } from "react";
import {
	HomeContainer,
	SliderContainer,
	ProfileContainer,
	BestAlbumContainer,
	BestAlbumIntroduceContainer,
	BestAlbumShowButton,
	BestAlbum,
	ImageContainer,
} from "./styled";
import OurYouthDaeun from "assets/images/daeunOuryouth.jpg";
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
import togeter1 from "assets/images/together/together1.jpg";
import togeter2 from "assets/images/together/together2.jpg";
const landscapeData = [
	<Card src={mangWon} alt="망원" title="망원에서" year="2022" />,
	<Card src={hanRiver} alt="한강" title="한강 피크닉" year="2022" />,
	<Card src={incheonpark} alt="인천대공원" title="인천대공원" year="2022" />,
	<Card src={inhoo} alt="인하대 후문" title="인하대 후문" year="2022" />,
	<Card src={daebudo} alt="첫 대부도" title="첫 대부도" year="2022" />,
	<Card src={moouido} alt="무의도" title="무의도" year="2022" />,
];

const togetherData = [
	<Card src={haru1} alt="하루1" title="하루필름1" year="2022" />,
	<Card src={haru2} alt="하루2" title="하루필름2" year="2022" />,
	<Card src={haru3} alt="하루3" title="하루필름3" year="2022" />,
	<Card src={haru4} alt="하루4" title="하루필름4" year="2022" />,
	<Card src={haru5} alt="하루5" title="하루필름5" year="2022" />,
	<Card src={togeter2} alt="" title="헤헿2" year="2022" />,
];
const Index = () => {
	const [showbestImage, setshowBestImage] = useState<boolean>(false);
	const handleShowBestImage = () => {
		showbestImage ? setshowBestImage(false) : setshowBestImage(true);
	};
	return (
		<HomeContainer>
			<BestAlbumContainer>
				<BestAlbumIntroduceContainer>
					<h2>최근 선정 Best Cut</h2>
					<h1>
						매일 매일 싸우지만 <br />또 금방 금방 화해하는 <br />
						다은이의 Our Youth
					</h1>
					<p>
						2022년 다은이의 첫 프로필 사진 <br /> 이 날 사진으로 고문당했다.
					</p>
					<BestAlbumShowButton onClick={handleShowBestImage}>이미지 보기</BestAlbumShowButton>
				</BestAlbumIntroduceContainer>
				<ImageContainer show={showbestImage ? true : false}>
					<BestAlbum src={OurYouthDaeun} alt="ourYouth" width={600} height={700} />
				</ImageContainer>
			</BestAlbumContainer>
			<SliderContainer>
				<StaticSlider children={landscapeData} title="LandScape" />
			</SliderContainer>
			<SliderContainer>
				<StaticSlider children={togetherData} title="Together" />
			</SliderContainer>
		</HomeContainer>
	);
};

export default Index;

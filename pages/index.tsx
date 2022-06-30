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
import mangWon from "assets/images/mangwon.jpg";
import hanRiver from "assets/images/hanriver.jpg";
import incheonpark from "assets/images/incheonpark.jpg";
import inhoo from "assets/images/inhoo.jpg";
import daebudo from "assets/images/daebudo.jpg";
import moouido from "assets/images/moouido.jpg";

const landscapedata = [
	<Card src={mangWon} alt="망원" title="망원에서" year="2022" />,
	<Card src={hanRiver} alt="한강" title="한강 피크닉" year="2022" />,
	<Card src={incheonpark} alt="인천대공원" title="인천대공원" year="2022" />,
	<Card src={inhoo} alt="인하대 후문" title="인하대 후문" year="2022" />,
	<Card src={daebudo} alt="첫 대부도" title="첫 대부도" year="2022" />,
	<Card src={moouido} alt="무의도" title="무의도" year="2022" />,
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
				<StaticSlider children={landscapedata} />
			</SliderContainer>
			s
			<ProfileContainer>
				<div>정호</div>
				<div>다은</div>
			</ProfileContainer>
		</HomeContainer>
	);
};

export default Index;

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
				<StaticSlider />
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

import StaticSlider from "components/StaticCarousel";
import {
	HomeContainer,
	SliderContainer,
	ProfileContainer,
	BestAlbumContainer,
	BestAlbumIntroduceContainer,
	BestAlbumShowButton,
} from "./styled";

const Index = () => {
	return (
		<HomeContainer>
			<BestAlbumContainer>
				<BestAlbumIntroduceContainer>
					<h2>최근 선정 Best Cut</h2>
					<h1>
						매일 매일 싸우지만 <br />또 금방 금방 화해하는 <br />
						다은이의 대부도 모습
					</h1>
					<p>
						2022년 하반기 대부도 여행 <br /> 전날 술을 너무 많이 먹었다.
					</p>
					<BestAlbumShowButton>이미지 보기</BestAlbumShowButton>
				</BestAlbumIntroduceContainer>
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

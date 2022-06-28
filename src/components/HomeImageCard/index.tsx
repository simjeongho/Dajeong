import { HomeImageCardContainer, HomeImageCardImage } from "./styled";
import HomeBackground from "@assets/image/home.svg";
const HomeImageCard = () => {
	return (
		<HomeImageCardContainer>
			<HomeImageCardImage src={HomeBackground} />
		</HomeImageCardContainer>
	);
};

export default HomeImageCard;

import { HomeImageCardContainer, HomeImageCardImage } from "./styled";
import Image from "next/image";
import HomeBackImage from "assets/img/Home.svg";
const HomeImageCard = () => {
	return (
		<HomeImageCardContainer>
			<Image src={HomeBackImage} width="100%" height="100%" />
		</HomeImageCardContainer>
	);
};

export default HomeImageCard;

import { HomeImageCardContainer, HomeImageCardImage } from "./styled";
import Image from "next/image";
import HomeBackImage from "assets/img/Home.svg";
const HomeImageCard = () => {
	return (
		<HomeImageCardContainer>
			<Image src={HomeBackImage} layout="fill" />
		</HomeImageCardContainer>
	);
};

export default HomeImageCard;

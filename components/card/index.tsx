import Image, { StaticImageData } from "next/image";
import { CardContainer, CardImageWrapper, CardInfo, CardKeyWord, CardTitle } from "./styeld";
type ImageProps = {
	src: StaticImageData;
	title: string;
	alt: string;
	year: string;
};

const Card: React.FC<ImageProps> = ({ src, title, alt, year }) => {
	return (
		<CardContainer>
			<CardImageWrapper>
				<Image src={src} alt={alt} />
			</CardImageWrapper>
			<CardInfo>
				<CardTitle>{title}</CardTitle>
				<CardKeyWord>{year}</CardKeyWord>
			</CardInfo>
		</CardContainer>
	);
};

export default Card;

import Image, { StaticImageData } from "next/image";
import { CardContainer, CardImageWrapper, CardInfo, CardKeyWord, CardTitle } from "./styeld";
type CardProps = {
	src: StaticImageData | string;
	title: string;
	alt: string;
	year: string;
	width: number;
	height: number;
};

const Card: React.FC<CardProps> = ({ src, title, alt, year, width, height }) => {
	return (
		<CardContainer>
			<CardImageWrapper>
				<Image src={src} alt={alt} layout="responsive" quality={100} width={width} height={height} />
			</CardImageWrapper>
			<CardInfo>
				<CardTitle>{title}</CardTitle>
				<CardKeyWord>{year}</CardKeyWord>
			</CardInfo>
		</CardContainer>
	);
};

export default Card;

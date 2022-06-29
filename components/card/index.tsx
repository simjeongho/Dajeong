import { CardContainer, CardImage, CardImageWrapper, CardInfo, CardKeyWord, CardTitle } from "./styeld";
type ImageProps = {
	src: string;
	title: string;
	alt: string;
	year: string;
};

const Card: React.FC<ImageProps> = ({ src, title, alt, year }) => {
	return (
		<CardContainer>
			<CardImageWrapper>
				<CardImage src={src} alt={`${alt}의 포스터`} />
			</CardImageWrapper>
			<CardInfo>
				<CardTitle>{title}</CardTitle>
				<CardKeyWord>{year}</CardKeyWord>
			</CardInfo>
		</CardContainer>
	);
};

export default Card;

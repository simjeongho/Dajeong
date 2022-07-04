import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CardContainer, CardImageWrapper, CardInfo, CardKeyWord, CardTitle } from "./styled";
type LinkCardProps = {
	src: StaticImageData | string;
	title: string;
	alt: string;
	year: string;
	width: number;
	height: number;
	linkurl: string;
};

const LinkCard: React.FC<LinkCardProps> = ({ src, title, alt, year, width, height, linkurl }) => {
	return (
		<Link href={linkurl}>
			<CardContainer>
				<CardImageWrapper>
					<Image src={src} alt={alt} layout="responsive" quality={100} width={width} height={height} />
				</CardImageWrapper>
				<CardInfo>
					<CardTitle>{title}</CardTitle>
					<CardKeyWord>{year}</CardKeyWord>
				</CardInfo>
			</CardContainer>
		</Link>
	);
};

export default LinkCard;
